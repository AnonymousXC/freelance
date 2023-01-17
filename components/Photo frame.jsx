import {
    Box,
    Image,
    useColorMode,
} from '@chakra-ui/react'

function Photo(props) {
    const { colorMode } = useColorMode()
    return (
        <Box
        w={'254px'}
        h={'254px'}
        {...props}
        ml={'4px'}>
            {colorMode === 'dark' ? <Image src={'images/Dark Frame.svg'} w={'100%'} h={'100%'} /> : <Image src={'images/Light Frame.svg'} w={'100%'} h={'100%'} />}
        </Box>
    )
}

export default Photo;