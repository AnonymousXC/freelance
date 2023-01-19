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
        gap={'48px'}
        mb={'180px'}
        id={'About-Section'}>
            <Heading variant={'h2'} mb={'22px'}>About 👨‍💼 Me</Heading>
            <Flex direction={'column'} gap={'32px'} maxW={'700px'}>
                <Text variant={'muted-2'}>
                    I started as a game development in school, and later I founded DevStudio alone. As a founder, I learned a lot about managing a company, team, and projects. I also learned App Development and Full Stack Web Development.
                </Text>
                <Text variant={'muted-2'}>
                    And in less than a year, I found my passion for coding. Now, I’m selling digital goods on the web and working on freelance projects. I love helping small businesses to create their online presence and help setting up their own online store (e-commerce) to boost their business. 
                </Text>
                <Text variant={'muted-2'}>
                    My code ensures that it is developer-friendly as it passes through the lens of my experience as a app developer. When I code, I make sure it is 100% readable and understood by other developers. I document the whole code with comments for better understanding.
                </Text>
            </Flex>
            <Flex gap={'23px'}> <Favorite size={'26px'} fill={'red'} /> <Text variant={'muted'}>I love <chakra.span color={'nav-link-number-color'}>good code</chakra.span>, technology, problem solving, youtube, and gadgets.</Text> </Flex>
        </Flex>
    )
}

export default AboutSection;