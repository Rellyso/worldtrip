import { Flex, FlexProps } from "@chakra-ui/react";

export function Section({ children, ...rest }: FlexProps) {
  return (
    <Flex
      as="section"
      maxW="8xl"
      w="100%"
      px="4"
      mx="auto"
      mt="20"
      {...rest}
    >
      {children}
    </Flex>
  )
}