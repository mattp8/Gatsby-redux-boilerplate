// const Promise = require(`bluebird`)
// const path = require(`path`)
// const _ = require(`lodash`)
// const slash = require(`slash`)


exports.modifyBabelrc = ({
    babelrc
}) => {
    if (process.env.NODE_ENV !== `production`) {
        return {
            plugins: [
                [require.resolve(`babel-plugin-emotion`), {
                    sourceMap: true
                }],
            ].concat(babelrc.plugins),
        }
    }
    return {
        plugins: [require.resolve(`babel-plugin-emotion`)].concat(babelrc.plugins),
    }
}
