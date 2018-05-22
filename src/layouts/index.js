import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { ThemeProvider } from 'emotion-theming'

import Header from '../components/Header'
import './index.css'
import theme from '../themes/theme'

const App = styled.div`
    position: relative;
`

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet
            title="Boiler Plate"
            meta={[
                { name: 'description', content: '' },
                { name: 'keywords', content: '' }
            ]}
        />
        <App>
            <ThemeProvider theme={theme}>{children()}</ThemeProvider>
        </App>
    </div>
)

TemplateWrapper.propTypes = {
    children: PropTypes.func
}

export default TemplateWrapper
