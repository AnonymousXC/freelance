import {
    HStack,
    Link,
    chakra,
    Image,
    Button,
    useColorMode,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { DarkMode } from '@styled-icons/material-rounded/DarkMode';
import { LightMode } from '@styled-icons/material-rounded/LightMode';

function NavBarDesktop() {

    const { colorMode, toggleColorMode} = useColorMode()

    return (
        <HStack 
        justifyContent={'space-around'}
        h={'86px'}>
            <Image src={'images/Logo.svg'} transform={'scale(1.5)'} />
            <HStack gap={'24px'}>
                <Link as={NextLink} href={'/'} variant={'nav-link'}>
                    <chakra.span color={'nav-link-number-color'}>1.</chakra.span> Home
                </Link>
                <Link as={NextLink} href={'/'} variant={'nav-link'}>
                    <chakra.span color={'nav-link-number-color'}>2.</chakra.span> Work
                </Link>
                <Link as={NextLink} href={'/'} variant={'nav-link'}>
                    <chakra.span color={'nav-link-number-color'}>3.</chakra.span> About
                </Link>
                <Link as={NextLink} href={'/'} variant={'nav-link'}>
                    <chakra.span color={'nav-link-number-color'}>4.</chakra.span> Contact
                </Link>
                <Button variant={'unstyled'} onClick={toggleColorMode} transform={'translateY(-2px)'}>
                    {colorMode === 'dark' ? <LightMode size={'30px'} /> : <DarkMode size={'30px'}/>}
                </Button>
            </HStack>
        </HStack>
    )
}

export default NavBarDesktop;