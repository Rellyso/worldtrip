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
    <Box {...rest}>
      <Heading as="span" fontSize="5xl" color="highlight">{count}</Heading>
      <Text fontWeight="semibold" fontSize="xl" color="gray.600">{children}</Text>
    </Box>
  )
}