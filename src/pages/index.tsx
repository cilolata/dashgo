import { Button, Flex, Stack } from "@chakra-ui/react"
import { get, SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../components/Form/Input"

type SignInFormData = {
  email: string
  password: string
}

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

  return (
    <Flex
      width={'100vw'}
      height={'100vh'}
      align='center'
      justify='center'
    >
      <Flex
        as={'form'}
        minWidth={'368px'}
        bg={'gray.800'}
        p={'8'}
        borderRadius={8}
        flexDir={'column'}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={'4'}>
          <Input
            {...register('email', {
              required: 'E-mail obrigatório'
            })}
            name={"email"}
            type={'email'}
            label={'E-mail'}
            error={get(formState.errors.message, 'email')}
          />
          {get(formState.errors, 'email') && <p>{get(formState.errors, 'email')?.message}</p>}
          <Input
            {...register('password', {
              required: 'Senha obrigatória'
            })}
            name={"password"}
            type={'password'}
            label={'Senha'}
            error={get(formState.errors.message, 'password')}
          />
          {get(formState.errors, 'password') && <p>{get(formState.errors, 'password')?.message}</p>}
          <Button
            type="submit"
            mt={'6'}
            colorScheme='pink'
            size={'lg'}
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  )
}
