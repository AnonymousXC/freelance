import {
    Flex, 
    Heading,
    Text,
    chakra,
} from '@chakra-ui/react';
import { Favorite } from '@styled-icons/material-rounded/Favorite'

function AboutSection() {
    return (
        <Flex
        position={'relative'} 
        maxW={'1250px'} 
        w={'100%'} 
        left={'50%'} 
        px={'12px'}
        transform={'translateX(-50%)'}
        direction={'column'}
        gap={'48px'}>
            <Heading variant={'h2'} mb={'22px'}>About 👨‍💼 Me</Heading>
            <Flex direction={'column'} gap={'32px'} maxW={'700px'}>
                <Text variant={'muted'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, consequuntur aspernatur praesentium velit rerum unde dolorem, cumque necessitatibus voluptatum error illum totam nihil doloremque?
                </Text>
                <Text variant={'muted'}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat minima magni, magnam earum officia cum velit debitis quisquam sed veniam amet, perferendis, architecto ducimus ullam quia iusto dicta? Ipsum, quisquam? architecto ducimus ullam quia iusto dicta? Ipsum, quisquam? quia iusto dicta? Ipsum, quisquam? 
                </Text>
                <Text variant={'muted'}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia itaque ullam voluptatibus ea dolor, incidunt quam quibusdam veniam accusamus ducimus error obcaecati sed blanditiis autem velit nemo ratione in quos! blanditiis autem velit nemo ratione in quos!
                </Text>
            </Flex>
            <Flex> <Favorite size={'23px'} fill={'red'} /> <Text variant={'muted'}>I love <chakra.span color={'nav-link-number-color'}>good design</chakra.span>, gaming, art, netflix, and gadgets.</Text> </Flex>
        </Flex>
    )
}

export default AboutSection;