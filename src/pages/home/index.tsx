import Image from "next/image";
import { Heading, Text } from "@ignite-ui/react";
import { Container, Hero, Preview } from "./styles";

import calendarImg from '../../assets/calendar.png'
import { ClaimUsernameForm } from "./components/ClaimUsernameForm";

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">Easy schedule</Heading>
        <Text size="xl">Connect your calendar and allow people to schedule in your free time.</Text>

        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image alt="Calendar" src={calendarImg} height={400} quality={100} priority />
      </Preview>
    </Container>
  )
}
