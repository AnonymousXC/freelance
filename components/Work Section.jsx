import {
    Box, 
    Heading,
    Flex,
    Image,
    Text,
    Button,
    useMediaQuery,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

function WorkSection() {

    const [ smallerThan850 ] = useMediaQuery('(max-width: 850px)', {ssr: false})

    return (
        <Box 
        position={'relative'} 
        maxW={'1250px'} 
        w={'100%'} 
        left={'50%'} 
        px={'12px'}
        transform={'translateX(-50%)'}
        mb={'180px'}
        id={'Work-Section'}>
            <Heading variant={'h2'}>
                What I do
            </Heading>
            <Flex 
            mt={'84px'} 
            gap={smallerThan850 ? '60px' : '30px'} 
            px={'12px'}
            flexWrap={'wrap'}
            justifyContent={'center'}
            >
                <Card 
                imagePath={'images/Web Dev.svg'} 
                heading={'Mobile & Web Development'}
                content={'Need a website or web app? I can create beautiful websites or web apps based on your content, or redesign your old website to improve user engagement or achieve your business goals.'} />
                <Card 
                imagePath={'images/Designing.svg'} 
                heading={'Certificate Design'}
                content={'Need certificate for your organization? I can create beautiful art, designs based on your project requirements such as business cards, digital banners, icons, logos, hand-drawn characters, abstracts, textures, etc.'} />
                <Card 
                imagePath={'images/Full Stack Dev.svg'} 
                heading={'Full Stack Development'}
                content={'Already have the design? I can create static websites such as landing pages, company sites, and custom websites with minimal javascript. Will deliver a well-documented code. '} />
            </Flex>
        </Box>
    )
}


function Card({imagePath, heading, content}) {
    const router = useRouter()
    return (
        <Flex 
        direction={'column'}
        gap={'32px'}
        maxW={'380px'}
        alignItems={'flex-start'}>
            <Image src={imagePath} w={'55px'} h={'55px'} />
            <Heading variant={'h4'}>{heading}</Heading>
            <Text variant={'muted'}>{content}</Text>
            <Button variant={'btn-muted'} 
            onClick={() => {
                router.push('/estimate', undefined, { shallow: true })
            }}>Get an estimate</Button>
        </Flex>
    )
}

export default WorkSection;