import { Button, Text, TextInput } from "@ignite-ui/react"
import { Form, FormError } from "./styles"
import { ArrowRight } from "phosphor-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const usernameSchema = z.object({
  username: z
  .string()
  .min(3, { message: 'Digite um nome de usuário' })
  .regex(/^([a-z\\\\-]+)$/i, { message: 'Usuário pode conter apenas letras e hifen' })
  .transform(username => username.toLocaleLowerCase())
})

type usernameFormData = z.infer<typeof usernameSchema>


export function ClaimUsernameForm(){
  const { register, handleSubmit, formState: { errors } } = useForm<usernameFormData>({
    resolver: zodResolver(usernameSchema)
  })
  
  async function handleRegister(data: usernameFormData){
    console.log(data)
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleRegister)}>
        <TextInput size="sm" prefix="call.er/" placeholder="seu-usuário" {...register('username')} />
        <Button size="sm" type="submit">
          Reservar
          <ArrowRight />
        </Button>

        

      </Form>
      <FormError>
        <Text size="sm">
          {errors.username ? errors.username.message : 'Digite o nome de usuário desejado'}
        </Text>
      </FormError>
    </>
  )
}