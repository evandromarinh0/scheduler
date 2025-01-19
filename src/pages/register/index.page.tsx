import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react"
import { Containter, Form, FormError, Header } from "./styles"
import { ArrowRight } from "phosphor-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/router"
import { useEffect } from "react"

const registerFormSchema = z.object({
  username: z
  .string()
  .min(3, { message: 'Digite um nome de usuário válido' })
  .regex(/^([a-z\\\\-]+)$/i, { message: 'Usuário pode conter apenas letras e hifen' })
  .transform(username => username.toLocaleLowerCase()),
  name: z
  .string()
  .min(3, { message: 'Digite um nome válido' })
}) 

type registerFormData = z.infer<typeof registerFormSchema>

export default function Register(){
  const { register, handleSubmit, setValue ,formState: { errors, isSubmitting } } = useForm<registerFormData>({
    resolver: zodResolver(registerFormSchema),
  })
  const router = useRouter()

  console.log(router.query.username)

  useEffect(() => {
    if(router.query.username){
      setValue('username', router.query.username[0])
    }
  }, [router.query.username, setValue])


  async function handleRegister(data: registerFormData) {
    console.log(data)
  }

  return(
    <Containter>
      <Header>
        <Heading as="strong">
          Bem-vindo ao Call.er!
        </Heading>
        <Text>Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois.</Text>

        <MultiStep currentStep={1} size={4} />
      </Header>

      <Form as="form" onSubmit={handleSubmit(handleRegister)}>
        <label>
          <Text size="sm">Nome de usuário</Text>
          <TextInput prefix="" placeholder="seu-usuário" {...register('username')} />

          {errors.username && <FormError size="sm">{errors.username.message}</FormError>}
        </label>

        <label>
          <Text size="sm">Nome completo</Text>
          <TextInput placeholder="Seu nome" {...register('name')} />

          {errors.name && <FormError size="sm">{errors.name.message}</FormError>}
        </label>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </Form>
    </Containter>
  )
}