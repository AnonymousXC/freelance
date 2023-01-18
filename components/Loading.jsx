import {
    Flex,
    Text,
    Spinner,
} from '@chakra-ui/react'


function LoadingScreen(props) {
    return (
        <Flex
        position={'fixed'}
        w={'100%'}
        h={'var(--height)'}
        top={'0px'}
        left={'0px'}
        backgroundColor={'bg-default'}
        zIndex={1001}
        justifyContent={'center'}
        alignItems={'center'}
        direction={'column'}
        gap={'16px'}
        className={'loading-screen'}
        {...props}>
            <Spinner thickness={'6px'} size={'xl'} />
            <Text>Loading</Text>
        </Flex>
    )
}

export default LoadingScreen;