import axios from 'axios'
import {
    SubmissionError
} from 'redux-form'

import {
    validateEmail
} from '../components/SubscribeForm/validateEmail'

export const OPEN_MODAL = 'OPEN_MODAL'
export const SUBSCRIBE_USER = 'SUBSCRIBE_USER'
export const FETCH_ARTICLE = 'FETCH_ARTICLE'
export const FETCH_FEED = 'FETCH_FEED'

const WP_URL = 'http://localhost:8888/wp/wp-json/wp/v2/'

export function openModal() {
    return {
        type: OPEN_MODAL,
        value: true
    }
}

export const subscribeUser = values => dispatch => {
    const params = {
        email_address: values.email,
        EDITION: values.edition + ' Edition'
    }

    if (!validateEmail(values.email)) {
        throw new SubmissionError({
            email: "Invalid email address"
        })

    } else {

        return axios
            .get('/.netlify/functions/subscribe', {
                params
            })
            .then(function (response) {
                dispatch({
                    type: SUBSCRIBE_USER,
                    payload: {
                        email: response.data.body.email_address,
                        status: response.data.body.statusCode
                    }
                })
            })
            .catch(function (error) {
                if (error.response.data.body.title === 'Member Exists') {
                    throw new SubmissionError({
                        email: "Hey, looks like you're already signed up!"
                    })
                } else {
                    throw new SubmissionError({
                        email: 'There was an error'
                    })
                }

                dispatch({
                    type: SUBSCRIBE_USER,
                    payload: {
                        error: error.response.data.body.title,
                        statusCode: error.response.data.statusCode.body.statusCode
                    }
                })
            })

    }


}

export const fetchArticle = value => dispatch => {
    const res = axios
        // .get(WP_URL + `posts/${value}?_embed`)
        .then(function (response) {
            dispatch({
                type: FETCH_ARTICLE,
                payload: response
            })
        })
        .catch(function (error) {
            dispatch({
                type: FETCH_ARTICLE,
                payload: error.response
            })
        })
}