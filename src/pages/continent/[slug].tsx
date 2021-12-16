import { Box, Flex, Heading, Image, SimpleGrid, SkeletonText, Stack, Text, Tooltip } from "@chakra-ui/react";
import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { api } from "../../services/api";
import { Continent, getNewContinent } from "../../models/continent";
import { ContinentInfo } from "../../components/Continent/Info";
import { InfoItem } from "../../components/Continent/InfoItem";
import { InfoIcon } from "@chakra-ui/icons";
import { CityCard } from "../../components/City/CityCard";
import { ContinentHero } from "../../components/Continent/Hero";


export default function ContinentPage({ slug }) {

  const [continent, setContinent] = useState<Continent>(getNewContinent())

  useEffect(() => {
    getContinent()
  }, [slug])

  async function getContinent() {
    const { data: { continents } } = await api.get(`continents`)

    if (continents) {
      setContinent(continents.find(continent => continent.slug === slug))
    }
  }

  return (
    <Container>
      <Head>
        <title>{continent.name ? continent.name : 'Continente'} - World Trip</title>
      </Head>
      <Header />

      <ContinentHero banner={continent.banner} title={continent.name} />

      <Section>
        <SimpleGrid columns={2} spacing={14}>
          {continent.description ? (
            <Text textAlign="justify" fontSize="lg">
              {continent.description}
            </Text>
          ) : (
            <SkeletonText startColor="gray.300" endColor="gray.400" textAlign="left" noOfLines={4} spacing='4' />
          )}

          <ContinentInfo>
            <InfoItem count={continent.country_count}>
              países
            </InfoItem>
            <InfoItem count={continent.language_count}>
              línguas
            </InfoItem>
            <InfoItem count={continent.city_count}>
              cidades +100
              <Tooltip label={`${continent.cities.length} cidades`} aria-label={`${continent.cities.length} cidades`}>
                <InfoIcon color="gray.400" fontSize="md" ml="2" />
              </Tooltip>
            </InfoItem>
          </ContinentInfo>
        </SimpleGrid>
      </Section>

      <Section direction="column" align="start" pb="10">
        <Heading fontWeight="medium" color="gray.500">Cidades +100</Heading>

        <Stack spacing="10" mt="10">
          {continent.cities?.length > 0 ? continent.cities.map(city => (
            <CityCard
              city={city.name}
              country={city.country}
              city_banner={city.image}
              country_flag={city.country_flag}
            />
          )) : (
            <Text>Não há cidades</Text>
          )}

        </Stack>
      </Section>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.params

  return {
    props: {
      slug
    }
  }
}