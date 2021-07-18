import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      h={100}
      bg="heading.white"
      w="100%"
      maxW={1440}
      mx="auto"
      p="0"
      align="center"
      justify="space-between"
    >
      <ChevronLeftIcon fontSize="32px" color="heading.dark" />

      <Image src="assets/logo.svg" />
      <span />
    </Flex>
  )
}