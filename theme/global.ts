
const Colors = {
    light: {
        'bg-default': '#FFFFFF',
        'fg-default': '#212126',
        'fg-muted': '#6E6D7A',
        'fg-muted-L': '#212126',
        'primary-color': '#FF6666',
        'secondary-color': '#336699',
        'complementary': '#dddddd',
    },
    dark: {
        'bg-default': '#000',
        'fg-default': '#F9F9F9',
        'fg-muted': '#A4A4A4',
        'fg-muted-L': '#DEDEDE',
        'primary-color': '#FF6666',
        'secondary-color': '#336699',
        'complementary': '#161616',
    }
}

const semanticTokens = {
    colors: {
        'bg-default': {
            default: Colors.light["bg-default"],
            _dark: Colors.dark["bg-default"],
        },
        'fg-default': {
            default: Colors.light["fg-default"],
            _dark: Colors.dark["fg-default"],
        },
        'fg-muted': {
            default: Colors.light["fg-muted"],
            _dark: Colors.dark["fg-muted"],
        },
        'fg-muted-L': {
            default: Colors.light["fg-muted-L"],
            _dark: Colors.dark["fg-muted-L"],
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
        },
        'nav-mobile-menu-bg': {
            default: Colors.light.complementary,
            _dark: Colors.dark.complementary,
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