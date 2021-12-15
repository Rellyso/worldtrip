import { Divider, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Slider } from '../components/Slider'
import { TravelTypeCard } from '../components/TravelTypeCard'
import { useContinents } from '../hooks/useContinents'
import Head from 'next/head'


export default function Home() {

  const { continents } = useContinents()

  return (
    <Flex direction="column">

      <Head>
        <title>World Trip</title>
      </Head>

      <Header />

      <Container>
        <Flex
          as="main"
          w="100%"
          h="335px"
          bgImg="assets/images/sky-background.png"
          // bgAttachment="fixed"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="top center"
        >
          <Flex
            w="100%"
            maxW={1440}
            mx="auto"
            h="100%"
            position="relative"
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
              bottom="-34px"
              h="270px"
            />
          </Flex>
        </Flex>

        <Flex as="section" py="24" px="24" justify="space-around">
          <TravelTypeCard src="assets/cocktail.svg">vida noturna</TravelTypeCard>
          <TravelTypeCard src="assets/surf.svg">praia</TravelTypeCard>
          <TravelTypeCard src="assets/building.svg">moderno</TravelTypeCard>
          <TravelTypeCard src="assets/museum.svg">clássico</TravelTypeCard>
          <TravelTypeCard src="assets/earth.svg">e mais...</TravelTypeCard>
        </Flex>

        <Divider w={90} borderWidth="2px" borderColor="heading.dark" />

        <Flex
          as="section"
          direction="column"
          w="100%"
        >
          <Heading as="h3" py="14" fontWeight="medium" color="heading.dark">
            Vamos nessa? <br />
            Então escolha seu continente
          </Heading>

          {continents && (
            <Slider
              continents={continents}
            />
          )}
        </Flex>
      </Container>
    </Flex >
  )
}
