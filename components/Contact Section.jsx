import {
    Flex,
    Heading,
    Text,
    Stack,
    Box,
    HStack,
    Link,
    Textarea,
    Button,
    useMediaQuery,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import emailjs from '@emailjs/browser';
import InputComponent from '../theme/components/Input';
import { TwitterWithCircle } from '@styled-icons/entypo-social/TwitterWithCircle';
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle';
import { GithubWithCircle } from '@styled-icons/entypo-social/GithubWithCircle';
import { InstagramWithCircle } from '@styled-icons/entypo-social/InstagramWithCircle';
import { useState } from 'react';

function ContactSection() {

    const [ isSmallerThan320 ] = useMediaQuery('(max-width: 770px)');
    const [ self_name, setSelfName ] = useState('')
    const [ from_name, setFromName ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ websiteUrl, setWebsiteUrl ] = useState('')
    const [ isEmailSendLoading, setEmailSendLoading ] = useState(false)

    return (
        <Flex
        position={'relative'} 
        maxW={'1250px'} 
        w={'100%'} 
        left={'50%'} 
        px={'12px'}
        transform={'translateX(-50%)'}
        gap={'48px'}
        mb={'180px'}
        justifyContent={'space-between'}
        id={'Contact-Section'}
        flexWrap={'wrap'}
        direction={isSmallerThan320 ? 'column' : 'row'}>
            <Stack maxW={'400px'} gap={'32px'}>
                <Heading variant={'h2'}>📅 Schedule a consult.</Heading>
                <Text variant={'muted-2'}>I am always open to discuss your project, improve your website or help with coding challenges. </Text>
                <Box>
                    <Text variant={'txt-s'} mb={'16px'} mt={'8px'}>📧 Email me at</Text>
                    <Text variant={'muted-2'}>cvxanonymous007@gmail.com</Text>
                </Box>
                <Box>
                    <Text variant={'txt-s'} mt={'8px'}>Follow</Text>
                    <HStack mt={'16px'}>
                        <Link as={NextLink} variant={'unstyled'} href={'https://twitter.com/nthearcane'} target={'_blank'} _hover={{transform: 'scale(1.1)'}}>
                            <TwitterWithCircle size={'38px'} fill={'var(--chakra-colors-secondary-color)'} />
                        </Link>
                        <Link as={NextLink} variant={'unstyled'} href={'https://www.linkedin.com/in/thearcane/'} target={'_blank'} _hover={{transform: 'scale(1.1)'}}>
                            <LinkedinWithCircle size={'38px'} fill={'var(--chakra-colors-secondary-color)'} />
                        </Link>
                        <Link as={NextLink} variant={'unstyled'} href={'https://github.com/AnonymousXC'} target={'_blank'} _hover={{transform: 'scale(1.1)'}}>
                            <GithubWithCircle size={'38px'} fill={'var(--chakra-colors-secondary-color)'} />
                        </Link>
                        <Link as={NextLink} variant={'unstyled'} href={'https://www.instagram.com/nthearcane/'} target={'_blank'} _hover={{transform: 'scale(1.1)'}}>
                            <InstagramWithCircle size={'38px'} fill={'var(--chakra-colors-secondary-color)'} />
                        </Link>
                    </HStack>
                </Box>
            </Stack>
            <Stack maxW={'500px'} w={'100%'} gap={'64px'} flex={'1'} flexBasis={'0'}>
                <Stack gap={'32px'}>
                    <InputComponent placeholder={'Your name*'} onChange={(e) => {setSelfName(e.currentTarget.value)}} />
                    <InputComponent placeholder={'Your email*'} onChange={(e) => {setFromName(e.currentTarget.value)}} />
                    <InputComponent placeholder={'Your website(if exists)'} onChange={(e) => {setWebsiteUrl(e.currentTarget.value)}} />
                    <Textarea variant={'contact'} placeholder={'How can i help?*'} minH={'140px'} onChange={(e) => {setMessage(e.currentTarget.value)}} />
                </Stack>
                <Button 
                variant={'primary'} 
                w={'140px'} 
                py={'12px'} 
                alignSelf={'flex-end'} 
                mr={'35px'}
                _hover={{transform: 'scale(1.1)'}}
                isLoading={isEmailSendLoading}
                onClick={() => {
                    setEmailSendLoading(true)
                    const templateParams = {
                        self_name: `${self_name}`,
                        from_email: `${from_name}`,
                        user_message: `${message}`,
                        website_url: `${websiteUrl}`
                    }
                    sendEmailSelf(templateParams, setEmailSendLoading)
                }}>Get In <br /> Touch</Button>
            </Stack>
        </Flex>
    )
}

function sendEmailSelf(templateParams, setEmailSendLoading) {
    emailjs.send('service_qax18nh', 'template_6idf71z', templateParams, 'cHZojKbc8rC9mZPd4')
    .then(function(response) {
       alert('Email send successfully.')
       setEmailSendLoading(false)
    }, function(error) {
       alert('Email not send. Please Retry.')
       setEmailSendLoading(false)
    });

}

export default ContactSection;