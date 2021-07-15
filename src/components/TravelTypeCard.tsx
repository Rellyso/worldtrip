import { Image, Stack, Text } from "@chakra-ui/react";

interface TravelTypeCardProps {
  src: string;
  children: string;
}

export function TravelTypeCard({ children, src }: TravelTypeCardProps) {
  return (
    <Stack spacing="6">
      <Image src={src} alt="coquetel" h="85" />
      <Text fontSize="24" fontWeight="semibold" color="heading.dark">{children}</Text>
    </Stack>
  )
}