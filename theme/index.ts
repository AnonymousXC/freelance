import { semanticTokens, styles } from "./global";
import { extendTheme } from "@chakra-ui/react";
import Button from "./components/Button";
import Text from "./components/Text";
import Link from "./components/Link";


const components = {
    Button,
    Text,
    Link,
};

const fonts = {
    body: 'spartan'
}


const theme = extendTheme({
    semanticTokens,
    styles,
    components,
    fonts,
})

export default theme;