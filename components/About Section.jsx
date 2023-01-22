import {
    Flex, 
    Heading,
    Text,
    chakra,
    HStack,
    Stack,
    Link,
    useColorMode,
    useMediaQuery,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { Favorite } from '@styled-icons/material-rounded/Favorite';
import { Javascript } from '@styled-icons/simple-icons/Javascript';
import { Typescript } from '@styled-icons/simple-icons/Typescript';
import { Python } from '@styled-icons/simple-icons/Python';
import { Java } from '@styled-icons/simple-icons/Java';
import { ReactLogo } from '@styled-icons/simple-icons/ReactLogo';
import { Nextdotjs } from '@styled-icons/simple-icons/Nextdotjs';
import { Electron } from '@styled-icons/simple-icons/Electron';
import { HtmlFive } from '@styled-icons/icomoon/HtmlFive';
import { Css3 } from '@styled-icons/icomoon/Css3';
import { Tailwindcss } from '@styled-icons/simple-icons/Tailwindcss';
import { Chakraui } from '@styled-icons/simple-icons/Chakraui';
import { Firebase } from '@styled-icons/simple-icons/Firebase';
import { Figma } from '@styled-icons/simple-icons/Figma';
import { Canva } from '@styled-icons/simple-icons/Canva';
import { Nodedotjs } from '@styled-icons/simple-icons/Nodedotjs';
import { Vercel } from '@styled-icons/simple-icons/Vercel';
import { Github } from '@styled-icons/simple-icons/Github';
import { Git } from '@styled-icons/icomoon/Git';

function AboutSection() {

    const { colorMode } = useColorMode()
    const [ isSmallerThan930 ] = useMediaQuery('(max-width: 920px)');

    return (
        <Flex
        position={'relative'} 
        maxW={'1250px'} 
        w={'100%'} 
        left={'50%'} 
        px={'12px'}
        transform={'translateX(-50%)'}
        mb={'180px'}
        id={'About-Section'}
        direction={'column'}
        gap={'48px'}>
            <Heading variant={'h2'} mb={'22px'}>About 👨‍💼 Me</Heading>
            <Flex gap={'82px'} alignItems={'flex-start'} flexWrap={'wrap'} direction={isSmallerThan930 ? 'column' : 'row'}>
                <Flex direction={'column'} gap={'32px'} maxW={'700px'} flex={'1'}>
                    <Text variant={'muted-2'}>
                        I started as a game development in school, and later I founded DevStudio alone. As a founder, I learned a lot about managing a company, team, and projects. I also learned App Development and Full Stack Web Development.
                    </Text>
                    <Text variant={'muted-2'}>
                        And in less than a year, I found my passion for coding. Now, I’m selling digital goods on the web and working on freelance projects. I love helping small businesses to create their online presence and help setting up their own online store (e-commerce) to boost their business. 
                    </Text>
                    <Text variant={'muted-2'}>
                        My code ensures that it is developer-friendly as it passes through the lens of my experience as a app developer. When I code, I make sure it is 100% readable and understood by other developers. I document the whole code with comments for better understanding.
                    </Text>
                    <Flex gap={'23px'} mt={'16px'}> <Favorite size={'23px'} fill={'red'} /> <Text variant={'muted'}>I love <Link as={NextLink} href={'https://betterprogramming.pub/good-code-vs-bad-code-35624b4e91bc'} target={'_blank'} _hover={{textDecoration: 'underline', textDecorationColor: 'nav-link-color', textUnderlineOffset: '6px'}}><chakra.span color={'nav-link-number-color'}>good code</chakra.span></Link>, technology, problem solving, youtube, and gadgets.</Text> </Flex>
                </Flex>
                <Stack gap={'32px'} maxW={'400px'} w={'100%'}>
                    <Heading variant={'h4'}>Things I have learned💻</Heading>
                    <Flex gap={'25px'} wrap={'wrap'} flex={'1'} justifyContent={'center'} className={'exp-icon-wrapper'} color={colorMode === 'dark' ? '#e5dfd3' : '#1A202C'}>
                        <Javascript size={'60px'} />
                        <Typescript size={'60px'} />
                        <Python size={'60px'} />
                        <Java size={'60px'} />
                        <ReactLogo size={'60px'} />
                        <Nextdotjs size={'60px'} />
                        <Electron size={'60px'} />
                        <HtmlFive size={'60px'} />
                        <Css3 size={'60px'} />
                        <Tailwindcss size={'60px'} />
                        <Chakraui size={'60px'} />
                        <Firebase size={'60px'} />
                        <Figma size={'60px'} />
                        <Canva size={'60px'} />
                        <Nodedotjs size={'60px'} />
                        <Vercel size={'60px'} />
                        <Github size={'60px'} />
                        <Git size={'60px'} />
                        {/*<chakra.span w={'100%'}></chakra.span>
                        <Favorite size={'60px'} />*/}
                    </Flex>
                </Stack>
            </Flex>
            <Flex gap={'23px'}> <Favorite size={'23px'} fill={'red'} /> <Text variant={'muted'}>I love <chakra.span color={'nav-link-number-color'}>good code</chakra.span>, technology, problem solving, youtube, and gadgets.</Text> </Flex>
        </Flex>
    )
}

export default AboutSection;