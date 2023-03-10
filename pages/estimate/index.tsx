import {
    Flex, 
    Heading,
    Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Head from 'next/head';
import { Discord } from '@styled-icons/bootstrap/Discord';
import { Instagram } from '@styled-icons/bootstrap/Instagram';
import { Linkedin } from '@styled-icons/bootstrap/Linkedin';
import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp';

function EstimatePage() {
    return (
        <Flex
        w={'100%'}
        h={'var(--height)'}
        justifyContent={'center'}
        alignItems={'center'}
        direction={'column'}
        gap={'48px'}>
            <Head>
                <title>DevStudio : Estimate</title>
            </Head>
            <Heading variant={'h2'}>Talk to me to get an estimated price 📞</Heading>
            <Flex gap={'32px'}>
                <Link as={NextLink} href={'https://discordapp.com/users/913777629142876200'} variant={'unstyled'} _hover={{transform: 'scale(1.1)', opacity: '0.9'}}>
                    <Discord size={'60px'} />
                </Link>
                <Link as={NextLink} href={'https://www.instagram.com/nthearcane/'} variant={'unstyled'} _hover={{transform: 'scale(1.1)', opacity: '0.9'}}>
                    <Instagram size={'60px'} />
                </Link>
                <Link as={NextLink} href={'https://www.linkedin.com/in/thearcane/'} variant={'unstyled'} _hover={{transform: 'scale(1.1)', opacity: '0.9'}}>
                    <Linkedin size={'60px'} />
                </Link>
                <Link as={NextLink} href={'https://wa.me/19097403687'} variant={'unstyled'} _hover={{transform: 'scale(1.1)', opacity: '0.9'}}>
                    <Whatsapp size={'60px'} />
                </Link>
            </Flex>
            <Heading variant={'h4'}>Thanks</Heading>
        </Flex>
    )
}

export default EstimatePage;