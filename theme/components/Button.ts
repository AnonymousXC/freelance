const Button = {
    baseStyle: {
        borderRadius: '4px',
    },
    variants: {
        'primary': {
            backgroundColor: 'primary-color',
            color: '#000000',
            fontSize: '1.2rem',
            fontWeight: '600',
            height: '48px',
            paddingLeft: '19px',
            paddingRight: '19px',
            _hover: {
                transform: 'scale(1.1)'
            }
        },
        'secondary': {
            backgroundColor: 'secondary-color',
            color: '#ffffff',
            fontSize: '1.2rem',
            fontWeight: '600',
            height: '48px',
            paddingLeft: '19px',
            paddingRight: '19px',
            _hover: {
                transform: 'scale(1.1)'
            }
        },
        'btn-muted': {
            color: 'fg-muted-L',
            fontSize: '1.375rem',
            fontFamily: 'Spartan',
            lineHeight: 'auto',
            backgroundColor: 'transparent',
            paddingRight: '0px',
            paddingLeft: '0px',
            _hover: {
                opacity: '0.9',
                transform: 'scale(1.1)',
            }
        }
    }
}

export default Button;