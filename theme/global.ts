
const Colors = {
    light: {
        'bg-default': '#FFFFFF',
        'fg-default': '#212126',
        'fg-muted': '#6E6D7A',
        'primary-color': '#FF6666',
        'secondary-color': '#336699',
    },
    dark: {
        'bg-default': '#000',
        'fg-default': '#F9F9F9',
        'fg-muted': '#A4A4A4',
        'primary-color': '#FF6666',
        'secondary-color': '#336699',
    }
}

const semanticTokens = {
    colors: {
        'bg-default': {
            default: Colors.light["bg-default"],
            _dark: Colors.dark["bg-default"],
        },
        'fg-default': {
            default: Colors.light["bg-default"],
            _dark: Colors.dark["fg-default"],
        },
        'fg-muted': {
            default: Colors.light["fg-muted"],
            _dark: Colors.dark["fg-muted"],
        },
        'primary-color': {
            default: Colors.light["primary-color"],
            _dark: Colors.dark["primary-color"],
        },
        'secondary-color': {
            default: Colors.light["secondary-color"],
            _dark: Colors.dark["secondary-color"],
        },
        'nav-link-color': {
            default: Colors.light["secondary-color"],
            _dark: Colors.dark["primary-color"],
        },
        'nav-link-number-color': {
            default: Colors.light["primary-color"],
            _dark: Colors.dark["secondary-color"],
        }
    }
}

const styles = {
    global: {
        body: {
            backgroundColor: 'bg-default',
        }
    }
}

export { Colors, semanticTokens, styles }