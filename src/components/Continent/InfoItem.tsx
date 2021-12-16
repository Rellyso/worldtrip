import {
  Box,
  Heading,
  Text,
  BoxProps
} from '@chakra-ui/react'

type Props = {
  count: number,
} & BoxProps

export function InfoItem({ children, count, ...rest }: Props) {
  return (
    <Box textAlign={["left", "left", "center"]} justifySelf={["flex-start", "flex-start", "center"]} {...rest}>
      <Heading
        fontWeight={["semibold", "semibold", "bold"]}
        fontSize={["3xl", "3xl", "5xl"]}
        color="highlight"
        as="span"
      >
        {count}
      </Heading>
      <Text
        fontWeight={["regular", "regular", "semibold"]}
        fontSize="xl"
        color="gray.600"
      >
        {children}
      </Text>
    </Box >
  )
}