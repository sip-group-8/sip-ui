
import { Heading, VStack, StackDivider } from "@chakra-ui/react"
import Head from "next/head"
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Sip Grupo 8</title>
        <meta name="description" content="MVP app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack spacing="4">
        <Heading as="h3">Hola, esto es una web de prueba</Heading>
        <Heading as="h4">Espero que se puedan guiar</Heading>
      </VStack>
    </div>
  )
}
