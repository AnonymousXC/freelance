import { semanticTokens, styles } from "./global";
import { extendTheme } from "@chakra-ui/react";
import Button from "./components/Button";
import Text from "./components/Text";


const components = {
    Button,
    Text,
};


const theme = extendTheme({
    semanticTokens,
    styles,
    components,
})

export default theme;