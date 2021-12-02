import { GetServerSideProps, GetStaticProps } from "next";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";

export default function Continent() {
  return (
    <>
      <Header />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.params

  return {
    props: {

    }
  }
}