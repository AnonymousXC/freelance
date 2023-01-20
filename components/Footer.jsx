import {
    Flex,
    HStack,
    Image,
    Text,
    chakra,
    useMediaQuery,
} from '@chakra-ui/react';

function Footer() {

    const [ smallerThan770 ] = useMediaQuery('(max-width: 770px)');
    const [ smallerThan560 ] = useMediaQuery('(max-width: 560px)');

    return (
        <Flex
        py={smallerThan560 ? '38px' : '48px'}
        justifyContent={'space-around'}
        backgroundColor={'footer-bg'}>
            <HStack gap={'32px'}>
                <Image src={'images/Logo.svg'} h={'25px'} display={smallerThan770 ? 'none' : 'block'} />
                <Text variant={'muted'}>
                    Thearcane <br />
                    Full Stack Web Developer
                </Text>
            </HStack>
            <Text variant={'muted'} align={'end'} display={smallerThan560 ? 'none' : 'block'}>
                Designed using Figma <br />
                Hosted on <chakra.span color={'secondary-color'}>Vercel</chakra.span>
            </Text>
        </Flex>
    )
}

export default Footer;