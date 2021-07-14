import { Flex, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps extends FlexProps {
  children: ReactNode,
}

export function Container({ children, ...rest }: ContainerProps) {
  return (
    <Flex
      justify="center"
      align="center"

      m="0"
      p="0"

      w="100vw"
      maxW="1440px"
      {...rest}
    >
      {children}
    </Flex>
  )
}