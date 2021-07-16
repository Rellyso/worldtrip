import Link from 'next/link'
import { Flex, Heading, Text, VStack } from '@chakra-ui/react';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

type SliderProps = {
  continents: {
    name: string;
    description: string;
    image: string;
  }[]
}

export function Slider({ continents }: SliderProps) {
  return (
    <Flex w="100%" h={["250px", "450px"]} maxW="1240px" mx="auto" mb={["5", "10"]}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation
        loop={true}
        pagination={{
          "clickable": true,
        }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: '100%', flex: 1 }}
      >
        {continents.map(continent => (
          <SwiperSlide key={continent.name.split('').join('-')}>
            <Flex
              w="100%"
              h="100%"
              bgImg={continent.image}
              bgRepeat="no-repeat"
              bgSize="cover"
              bgPosition="center"
            >
              <Link href="continent/north-america">
                <Flex
                  as="a"
                  w="100%"
                  h="100%"
                  align="center"
                  justify="center"
                  direction="column"
                  color="heading.light"
                  bg="rgba(0,0,0,0.35)"
                  cursor="pointer"
                >
                  <VStack spacing="4">
                    <Heading fontSize="48px">{continent.name}</Heading>
                    <Text fontSize="24px" fontWeight="bold">{continent.description}</Text>
                  </VStack>
                </Flex>
              </Link>

            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  )
}