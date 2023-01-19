
const Colors = {
    light: {
        'bg-default': '#FFFFFF',
        'fg-default': '#212126',
        'fg-muted': '#6E6D7A',
        'fg-muted-2': '#212126',
        'txt-s': '#6E6D7A',
        'primary-color': '#FF6666',
        'secondary-color': '#336699',
        'complementary': '#dddddd',
        'input-bg': '#DEDEDE',
    },
    dark: {
        'bg-default': '#000',
        'fg-default': '#F9F9F9',
        'fg-muted': '#A4A4A4',
        'fg-muted-2': '#DEDEDE',
        'txt-s': '#6E6D7A',
        'primary-color': '#FF6666',
        'secondary-color': '#336699',
        'complementary': '#161616',
        'input-bg': '#212126',
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
        'fg-muted-2': {
            default: Colors.light["fg-muted-2"],
            _dark: Colors.dark["fg-muted-2"],
        },
        'txt-s': {
            default: Colors.light["txt-s"],
            _dark: Colors.dark["txt-s"],
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
        },
        'input-bg': {
            default: Colors.light["input-bg"],
            _dark: Colors.dark["input-bg"],
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