import Colors from './Colors'
const type = {
    base: '-apple-system, BlinkMacSystemFont, Open Sans, sans-serif',
    bold: 'System',
    emphasis: 'HelveticaNeue-Italic'
}
const size = {
    h1: '34px',
    h2: '28px',
    h3: '24px',
    h4: '20px',
    h5: '20px',
    h6: '17px',
    input: '17px',
    regular: '16px',
    medium: '13px',
    small: '13px',
    tiny: '12px'
}
const style = {
    h1: {
        fontFamily: type.base,
        fontWeight: '700',
        fontSize: size.h1,
        margin: '0px',
        lineHeight: '51px'
    },
    h2: {
        fontFamily: type.base,
        fontWeight: '700',
        fontSize: size.h2,
        lineHeight: '42px'
    },
    h3: {
        fontFamily: type.base,
        fontSize: size.h3,
        fontWeight: '700',
        lineHeight: '36px',
        marginBottom: '8px'
    },
    h4: {
        fontFamily: type.base,
        fontSize: size.h4,
        lineHeight: '30px'
    },
    h5: {
        fontFamily: type.base,
        fontSize: size.h5,
        lineHeight: '30px'
    },
    h6: {
        fontFamily: type.base,
        fontSize: size.h6,
        lineHeight: '24px'
    },
    normal: {
        fontFamily: type.base,
        fontSize: size.regular,
        lineHeight: '24px'
    },
    description: {
        fontFamily: type.base,
        fontSize: size.medium,
        lineHeight: '20px'
    },
    small: {
        fontFamily: type.base,
        fontSize: size.small,
        lineHeight: '20px'
    },
    tiny: {
        fontFamily: type.base,
        fontSize: size.tiny,
        lineHeight: '16px'
    },
    info: {
        fontWeight: 'bold',
        color: Colors.fmzBrandM
    },
    warning: {
        fontFamily: type.base,
        fontSize: size.tiny,
        color: Colors.fmzRedError,
        lineHeight: '18px',

    }
}
const weights = {
    title: '900',
    subheading: '500'
}
export default {
    type,
    size,
    style,
    weights
}