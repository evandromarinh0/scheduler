import { Button, TextInput } from "@ignite-ui/react";
import { Form } from "./styles";
import { ArrowRight } from "phosphor-react";


export function ClaimUsernameForm(){
  return (
    <Form as="form">
      <TextInput size="sm" prefix="scheduler.com/" placeholder="Username" />
      <Button size="sm" type="submit">
        Appointment
        <ArrowRight />
      </Button>
    </Form>
  )
}