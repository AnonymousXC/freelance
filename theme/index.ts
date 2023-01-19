import { semanticTokens, styles } from "./global";
import { extendTheme } from "@chakra-ui/react";
import Button from "./components/Button";
import Text from "./components/Text";
import Link from "./components/Link";
import Heading from "./components/Heading";
import Input from "./components/Input";


const components = {
    Input,
    Button,
    Text,
    Link,
    Heading,
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