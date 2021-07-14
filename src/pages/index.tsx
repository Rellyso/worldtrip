import { Container, Flex, Image } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <Container>
      <Flex
        as="header"
        h={100}
        bg="white"
        w="100%"
        m="0"
        p="0"
        align="center"
        justify="center"
      >
        <Image src="assets/logo.svg" />
      </Flex>
    </Container>
  )
}
