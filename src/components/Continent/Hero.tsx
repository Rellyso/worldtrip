import { Flex, Heading, Skeleton } from "@chakra-ui/react";

type Props = {
  banner: string,
  title: string,
}

export function ContinentHero({ banner, title }: Props) {
  return (
    <Skeleton isLoaded={!!banner}>
      <Flex
        as="main"
        backgroundImage={`url(${banner})`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
        w="100%"
        h="500px"
        position="relative"
        _after={{
          content: `""`,
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          bgColor: 'rgba(0,0,0,0.35)'
        }}
      >
        <Flex
          maxW="8xl"
          w="100%"
          px="4"
          py="16"
          mx="auto"
          align="end"
          justify="start"
        >
          <Heading color="white" zIndex={4}>{title}</Heading>
        </Flex>
      </Flex>
    </Skeleton>
  )
}