import {
  Box,
  Image,
  Flex,
  Text
} from '@chakra-ui/react'

type Props = {
  city: string;
  country: string;
  city_banner: string;
  country_flag: string;
}

export function CityCard({ city, country, city_banner, country_flag }: Props) {
  return (
    <Box
      w="xs"
      h="280px"
      position="relative"
      bgColor="white"

      overflow="hidden"
      rounded="lg"
    >
      <Box
        h="60%"
        overflow="hidden"
        position="relative"
      >
        <Image src={city_banner} h="100%" w="100%" />
      </Box>
      <Flex
        justify="space-between"
        px="6"
        align="center"
        h="40%"
        borderWidth="2px"
        borderColor="yellow.200"
        rounded="lg"
        borderTop="none"
        borderTopRightRadius="none"
        borderTopLeftRadius="none"
      >
        <Box fontFamily="Barlow" textAlign="left">
          <Text fontSize="20" fontWeight="semibold" color="gray.600">{city}</Text>
          <Text fontSize="16" color="darkInfo">{country}</Text>
        </Box>

        <Image w={["10", "10", "14"]} h={["10", "10", "14"]} rounded="full" objectFit="cover" src={country_flag} />
      </Flex>
    </Box>
  )
}