module.exports = {
    siteMetadata: {
        title: 'GATSBY BOILER PLATE'
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Hind Siliguri`, `source sans pro\:300,400,400,500,700`]
            }
        },
        {
            resolve: `gatsby-plugin-create-client-paths`,
            options: {
                prefixes: [`/news/*`, `/feed/*`]
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-react-next`,
    ]
}