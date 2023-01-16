import {
  Button,
  Text,
  useColorMode,
} from '@chakra-ui/react'

export default function Home() {
  
  const { toggleColorMode } = useColorMode()

  return (
    <> 
      <Button variant={'primary'} onClick={toggleColorMode}>Toggle Theme</Button>
      <Button variant={'secondary'}>Hello World</Button>
      <Text variant={'muted'}>
        Hello World
      </Text>
    </>
  )
}
