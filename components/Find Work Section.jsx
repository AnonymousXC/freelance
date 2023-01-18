import {
    Box,
    Flex,
    Image,
    Heading,
    useColorMode,
} from '@chakra-ui/react'

function FindWorkSection() {

    const { colorMode } = useColorMode()

    return (
        <Box
        position={'relative'} 
        maxW={'1250px'} 
        w={'100%'} 
        left={'50%'} 
        px={'12px'}
        transform={'translateX(-50%)'}>
            <Heading variant={'h2'} mb={'64px'}>Where to find 🔍 my work?</Heading>
            <Flex gap={'80px'}>
                <Image src={'images/GitHub-Logo.png'} h={'150px'} w={'auto'} filter={colorMode === 'dark' ? 'invert(0)' : 'invert(1)'}/>
                <Image src={'images/figma.svg'} h={'150px'} w={'auto'} fill={colorMode === 'dark' ? '#fff' : '#000'}/>
            </Flex>
        </Box>
    )
}

export default FindWorkSection;