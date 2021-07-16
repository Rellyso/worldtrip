import { Divider, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Container } from '../components/Container'
import { Slider } from '../components/Slider'
import { TravelTypeCard } from '../components/TravelTypeCard'


export default function Home() {
  return (
    <Flex direction="column">
      <Flex
        as="header"
        h={100}
        bg="heading.white"
        w="100%"
        m="0"
        p="0"
        align="center"
        justify="center"
      >
        <Image src="assets/logo.svg" />
      </Flex>

      <Container>
        <Flex
          as="main"
          w="100%"
          bg="white"
          minH="300px"
          position="relative"
          bgImg="assets/images/sky-background.png"
          bgAttachment="fixed"
          bgRepeat="no-repeat"
          bgSize="contain"
          bgPosition="top center"
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

          <Slider
            continents={[
              {
                name: 'América do Norte',
                description: 'O continente do desenvolvimento',
                image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
              },
              {
                name: 'Europa',
                description: 'O continente mais antigo',
                image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
              },
            ]}
          />
        </Flex>


      </Container>
    </Flex >
  )
}
