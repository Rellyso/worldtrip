import { Box, BoxProps } from "@chakra-ui/react";

type ContainerProps = BoxProps

export function Container({ ...rest }: ContainerProps) {
  return (
    <Box
      w="100%"
      maxW={1440}
      mx="auto"
      align="center"
      bg="heading.white"
      {...rest}
    />

  )
}