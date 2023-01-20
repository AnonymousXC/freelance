import {
    Flex,
    Heading,
    Text,
    Button,
    useMediaQuery,
} from '@chakra-ui/react';
import Photo from '../components/Photo frame';

function HomeSection() {

    const [ isMobile ] = useMediaQuery('(max-width: 830px)')

    return (
        <Flex
        w={'100%'}
        h={isMobile ? 'calc(var(--height) - 4rem)' : 'calc(var(--height) - 5rem)'}
        marginTop={isMobile ? '4rem' : '5rem'}
        justifyContent={'center'}
        alignItems={'center'}
        position={'relative'}
        id={'Home-Section'}>
            <Flex gap={'100px'}>
                <Photo  display={isMobile === true ? 'none' : 'block'} />
                <Flex direction={'column'} pl={isMobile === true ? '16px' : '0px'}>
                    <Heading variant={'h3'} mb={'26px'}>Hi 👋, I&apos;m Thearcane</Heading>
                    <Heading variant={'h1'}>Freelance Full Stack Web Developer</Heading>
                    <Text variant={'muted'}>“good code makes the world a better place.”</Text>
                    <Flex gap={'30px'} mt={'58px'}>
                        <Button variant={'secondary'}>My Work</Button>
                        <Button variant={'primary'}>Let’s Talk</Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default HomeSection;