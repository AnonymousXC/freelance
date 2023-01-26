import {
    HStack,
    Link,
    chakra,
    Image,
    Button,
    useColorMode,
    Flex,
    Text,
    useMediaQuery,
} from '@chakra-ui/react';
import { DarkMode } from '@styled-icons/material-rounded/DarkMode';
import { LightMode } from '@styled-icons/material-rounded/LightMode';
import { Menu } from '@styled-icons/material-rounded/Menu';
import { Close } from '@styled-icons/material-rounded/Close';
import { useState } from 'react';
import * as Scroll from 'react-scroll';

function NavBar() {
    const [ isMobile ] = useMediaQuery('(max-width: 830px)', {ssr: false})
    if(isMobile === false)
        return <NavBarDesktop />
    else
        return <NavBarMobile />
}


function NavBarDesktop() {

    const { colorMode, toggleColorMode} = useColorMode()

    return (
        <HStack 
        justifyContent={'space-around'}
        h={'5rem'}
        position={'fixed'}
        top={'0px'}
        w={'100%'}
        zIndex={1000}
        backgroundColor={'bg-default'}
        className={'Nav-Bar-Desktop'}>
            <Image src={'images/Logo.svg'} transform={'scale(1.5)'} />
            <HStack gap={'24px'}>
                <Scroll.Link to={'Home-Section'} smooth={'easeInCubic'} ignoreCancelEvents={true}>
                    <Text variant={'nav-link'}>
                        <chakra.span color={'nav-link-number-color'}>1.</chakra.span> Home
                    </Text>
                </Scroll.Link>
                <Scroll.Link to={'Work-Section'} smooth={'easeInCubic'} offset={-100} ignoreCancelEvents={true}>
                    <Text variant={'nav-link'}>
                        <chakra.span color={'nav-link-number-color'}>2.</chakra.span> Work
                    </Text>
                </Scroll.Link>
                <Scroll.Link to={'About-Section'} smooth={'easeInCubic'} offset={-100} ignoreCancelEvents={true}>
                    <Text variant={'nav-link'}>
                        <chakra.span color={'nav-link-number-color'}>3.</chakra.span> About
                    </Text>
                </Scroll.Link>
                <Scroll.Link to={'Contact-Section'} smooth={'easeInCubic'} offset={-100} ignoreCancelEvents={true}>
                    <Text variant={'nav-link'}>
                        <chakra.span color={'nav-link-number-color'}>4.</chakra.span> Contact
                    </Text>
                </Scroll.Link>
                <Button variant={'unstyled'} onClick={toggleColorMode} transform={'translateY(-2px)'}>
                    {colorMode === 'dark' ? <LightMode size={'30px'} /> : <DarkMode size={'30px'}/>}
                </Button>
            </HStack>
        </HStack>
    )
}

function NavBarMobile() {
    
    const { colorMode, toggleColorMode} = useColorMode()
    const [ sideBar, setSideBar ] = useState(false)

    Scroll.Events.scrollEvent.register('begin', (to, ele) => {
        setSideBar(false)
    })

    return (
        <>
            <HStack 
            position={'fixed'}
            top={'0px'}
            justifyContent={'space-between'}
            w={'100%'}
            backgroundColor={'bg-default'}
            h={'4rem'}
            zIndex={1000}
            className={'Nav-Bar-Mobile'}>
                <Button 
                variant={'unstyled'} 
                ml={'8px'}
                onClick={() => {
                    setSideBar(!sideBar)
                }}>
                    {sideBar === true ? <Close /> : <Menu />}
                </Button>
                <Image src={'images/Logo.svg'} transform={'scale(1.25)'}/>
                <Button variant={'unstyled'} onClick={toggleColorMode} pr={'8px'}>
                        {colorMode === 'dark' ? <LightMode size={'30px'} /> : <DarkMode size={'30px'}/>}
                </Button>
            </HStack>
            <Flex
            position={'fixed'}
            top={'4rem'}
            maxW={'380px'}
            w={'100%'}
            h={'calc(var(--height) - 4rem)'}
            backgroundColor={'nav-mobile-menu-bg'}
            left={sideBar === true ? '0px' : '-100%'}
            transition={'left 200ms'}
            borderRightRadius={'8px'}
            direction={'column'}
            gap={'25px'}
            pt={'16px'}
            alignItems={'center'}
            zIndex={1000}
            className={'Nav-Bar-Mobile-Menu'}>
                <Scroll.Link to={'Home-Section'} smooth={'easeInCubic'} ignoreCancelEvents={true}>
                    <Text variant={'nav-link'}>
                        <chakra.span color={'nav-link-number-color'}>1.</chakra.span> Home
                    </Text>
                </Scroll.Link>
                <Scroll.Link to={'Work-Section'} smooth={'easeInCubic'} offset={-80} ignoreCancelEvents={true}>
                    <Text variant={'nav-link'}>
                        <chakra.span color={'nav-link-number-color'}>2.</chakra.span> Work
                    </Text>
                </Scroll.Link>
                <Scroll.Link to={'About-Section'} smooth={'easeInCubic'} offset={-80} ignoreCancelEvents={true}>
                    <Text variant={'nav-link'}>
                        <chakra.span color={'nav-link-number-color'}>3.</chakra.span> About
                    </Text>
                </Scroll.Link>
                <Scroll.Link to={'Contact-Section'} smooth={'easeInCubic'} offset={-80} ignoreCancelEvents={true}>
                    <Text variant={'nav-link'}>
                        <chakra.span color={'nav-link-number-color'}>4.</chakra.span> Contact
                    </Text>
                </Scroll.Link>
            </Flex>
        </>
    )
}


export default NavBar;