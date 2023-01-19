const Text = {
    variants: {
        'normal': {
            color: 'fg-default',
        },
        'muted': {
            color: 'fg-muted',
            fontSize: '1.25rem',
            fontFamily: 'Hind',
        },
        'nav-link': {
            color: 'nav-link-color',
            fontSize: '1.25rem',
            fontWeight: '600',
            cursor: 'pointer',
            _hover: {
                opacity: '0.9',
                textDecoration: 'none',
            }
        },
        'muted-2': {
            color: 'fg-muted-2',
            fontSize: '1.25rem',
            fontFamily: 'Hind',
        },
        'txt-s': {
            color: 'txt-s',
            fontSize: '1.125rem',
            fontFamily: 'Spartan',
        }
    }
}

export default Text;