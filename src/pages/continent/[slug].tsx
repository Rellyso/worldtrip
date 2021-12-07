import { GetServerSideProps, GetStaticProps } from "next";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";

export default function Continent() {
  return (
    <Container>
      <Header />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.params

  return {
    props: {

    }
  }
}