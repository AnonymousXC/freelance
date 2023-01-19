import {
    Flex,
    Heading,
    Text,
    Stack,
    Box,
    HStack,
    Link,
    Input,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { TwitterWithCircle } from '@styled-icons/entypo-social/TwitterWithCircle';
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle';
import { GithubWithCircle } from '@styled-icons/entypo-social/GithubWithCircle';
import { InstagramWithCircle } from '@styled-icons/entypo-social/InstagramWithCircle';

function ContactSection() {
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
        id={'Contact-Section'}>
            <Stack maxW={'400px'} gap={'32px'}>
                <Heading variant={'h2'}>📅 Schedule a consult.</Heading>
                <Text variant={'muted-2'}>I am always open to discuss your project, improve your online presence or help with your UX/UI design challenges. </Text>
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
            <Stack maxW={'500px'} w={'100%'}>
                <Input variant={'default'} />
            </Stack>
        </Flex>
    )
}

export default ContactSection;