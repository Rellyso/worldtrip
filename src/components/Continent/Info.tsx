import {
  SimpleGrid,
  SimpleGridProps,
} from '@chakra-ui/react'


export function ContinentInfo({ children, ...rest }: SimpleGridProps) {
  return (
    <SimpleGrid columns={3} spacing={10} {...rest}>
      {children}
    </SimpleGrid>

  )
}