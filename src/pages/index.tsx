import { Box, Flex, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { Container } from '../components/Container'
import { TravelTypeCard } from '../components/TravelTypeCard'

export default function Home() {
  return (
    <Flex direction="column">
      <Flex
        as="header"
        h={100}
        bg="heading.white"
        w="100vw"
        m="0"
        p="0"
        align="center"
        justify="center"
      >
        <Image src="assets/logo.svg" />
      </Flex>

      <Container>
        <Flex
          w="100%"
          bg="white"
          minH="300px"
          position="relative"
          bgImg="assets/images/sky-background.png"
          bgRepeat="no-repeat"
          px={140}
          color="white"
        >
          <Stack
            spacing="6"
            pt="20"
          >
            <Heading
              as="h1"
              fontWeight="md"
              maxW={416}
              fontSize={36}
              alignSelf="start"
              textAlign="left"
            >
              5 Continentes, infinitas possibilidades.
            </Heading>

            <Text color="gray.300" fontSize={20} maxW={524} align="left">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Stack>

          <Image
            src="assets/airplane.svg"
            alt="Avião"
            position="absolute"
            right="140px"
            top="76px"
            h="270px"
          />
        </Flex>

        <Flex py="20" gap="4" px="24" justify="space-around">
          <TravelTypeCard src="assets/cocktail.svg">vida noturna</TravelTypeCard>
          <TravelTypeCard src="assets/surf.svg">praia</TravelTypeCard>
          <TravelTypeCard src="assets/building.svg">moderno</TravelTypeCard>
          <TravelTypeCard src="assets/museum.svg">clássico</TravelTypeCard>
          <TravelTypeCard src="assets/earth.svg">e mais...</TravelTypeCard>
        </Flex>
      </Container>
    </Flex >
  )
}
