import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
} from '@chakra-ui/react';

function HomeSection() {
    return (
        <Flex
        w={'100%'}
        h={'calc(var(--height) - 5rem)'}
        top={'5rem'}
        justifyContent={'center'}
        alignItems={'center'}
        position={'relative'}>
            <Flex gap={'100px'}>
                <Box w={'254px'} h={'254px'}>
                    Photo
                </Box>
                <Flex direction={'column'}>
                    <Heading variant={'h3'} mb={'26px'}>Hi 👋, I'm Thearcane</Heading>
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