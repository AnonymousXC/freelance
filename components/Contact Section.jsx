import {
    Flex,
    Heading,
    Text,
    Stack,
    Box,
    HStack,
    Link,
    Textarea,
    Button,
    useMediaQuery,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import InputComponent from '../theme/components/Input';
import { TwitterWithCircle } from '@styled-icons/entypo-social/TwitterWithCircle';
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle';
import { GithubWithCircle } from '@styled-icons/entypo-social/GithubWithCircle';
import { InstagramWithCircle } from '@styled-icons/entypo-social/InstagramWithCircle';

function ContactSection() {

    const [ isSmallerThan320 ] = useMediaQuery('(max-width: 770px)');

    return (
        <Flex
        position={'relative'} 
        maxW={'1250px'} 
        w={'100%'} 
        left={'50%'} 
        px={'12px'}
        transform={'translateX(-50%)'}
        gap={'48px'}
        mb={'180px'}
        justifyContent={'space-between'}
        id={'Contact-Section'}
        flexWrap={'wrap'}
        direction={isSmallerThan320 ? 'column' : 'row'}>
            <Stack maxW={'400px'} gap={'32px'}>
                <Heading variant={'h2'}>📅 Schedule a consult.</Heading>
                <Text variant={'muted-2'}>I am always open to discuss your project, improve your website or help with coding challenges. </Text>
                <Box>
                    <Text variant={'txt-s'} mb={'16px'} mt={'8px'}>📧 Email me at</Text>
                    <Text variant={'muted-2'}>cvxanonymous007@gmail.com</Text>
                </Box>
                <Box>
                    <Text variant={'txt-s'} mt={'8px'}>Follow</Text>
                    <HStack mt={'16px'}>
                        <Link as={NextLink} variant={'unstyled'} href={'/'} _hover={{transform: 'scale(1.1)'}}>
                            <TwitterWithCircle size={'38px'} fill={'var(--chakra-colors-secondary-color)'} />
                        </Link>
                        <Link as={NextLink} variant={'unstyled'} href={'/'} _hover={{transform: 'scale(1.1)'}}>
                            <LinkedinWithCircle size={'38px'} fill={'var(--chakra-colors-secondary-color)'} />
                        </Link>
                        <Link as={NextLink} variant={'unstyled'} href={'/'} _hover={{transform: 'scale(1.1)'}}>
                            <GithubWithCircle size={'38px'} fill={'var(--chakra-colors-secondary-color)'} />
                        </Link>
                        <Link as={NextLink} variant={'unstyled'} href={'/'} _hover={{transform: 'scale(1.1)'}}>
                            <InstagramWithCircle size={'38px'} fill={'var(--chakra-colors-secondary-color)'} />
                        </Link>
                    </HStack>
                </Box>
            </Stack>
            <Stack maxW={'500px'} w={'100%'} gap={'64px'} flex={'1'} flexBasis={'0'}>
                <Stack gap={'32px'}>
                    <InputComponent placeholder={'Your name*'} />
                    <InputComponent placeholder={'Your email*'} />
                    <InputComponent placeholder={'Your website(if exists)'} />
                    <Textarea variant={'contact'} placeholder={'How can i help?*'} minH={'140px'} />
                </Stack>
                <Button 
                variant={'primary'} 
                w={'140px'} 
                py={'12px'} 
                alignSelf={'flex-end'} 
                mr={'35px'}>Get In <br /> Touch</Button>
            </Stack>
        </Flex>
    )
}

export default ContactSection;