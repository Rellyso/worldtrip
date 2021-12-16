import { Icon, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { BsCircleFill } from 'react-icons/bs'
interface TravelTypeCardProps {
  src: string;
  children: string;
}

export function TravelTypeCard({ children, src }: TravelTypeCardProps) {

  const isMobile = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
  })

  return (
    <Stack spacing="6" direction={["row", "row", "row", "column"]} align="center">
      {isMobile ? <Icon as={BsCircleFill} color="highlight" /> : <Image src={src} alt={"imagem de " + children} h="85" />}
      <Text fontSize="24" fontWeight="semibold" color="heading.dark">{children}</Text>
    </Stack>
  )
}