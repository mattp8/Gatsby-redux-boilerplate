import React from 'react'
import styled from 'react-emotion'
import LoadingGif from '../../images/loading.gif'

const Loading = () => {
    return (
        <LoadingWrapper>
            <img src={LoadingGif} alt="loading Finimize" />
        </LoadingWrapper>
    )
}

export default Loading

const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    opacity: 0.8;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 100px;
        width: auto;
        margin: 0;
        padding: 0;
    }
`
