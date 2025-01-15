import Image from "next/image";
import { Heading, Text } from "@ignite-ui/react";
import { Container, Hero, Preview } from "./styles";

import calendarImg from '../../assets/calendar.png'
import { ClaimUsernameForm } from "./components/ClaimUsernameForm";

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">Conecte seu calendário e permita que as pessoas agendem no seu tempo livre.</Text>

        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image alt="Calendar" src={calendarImg} height={400} quality={100} priority />
      </Preview>
    </Container>
  )
}
