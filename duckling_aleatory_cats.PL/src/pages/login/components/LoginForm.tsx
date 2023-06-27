
import * as Form from "../../components/index"
import { z } from "zod"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useState } from "react"

const sendFormSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "O e-mail é obrigatório" })
    .email({ message: "Formato de e-mail inválido" }),
  password: z
    .string()
    .nonempty({ message: "A mensagem não pode ser vazia" }),

})

type formData = z.infer<typeof sendFormSchema>
export function LoginForm() {
  const [loginError, setLoginError] = useState("");
  const createForm = useForm<formData>({
    resolver: zodResolver(sendFormSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = createForm

  async function sendForm(data: formData) {
    const apiData = {
      ...data,
    }

    try {
      const response = await axios.post(
        "https://localhost:7057/User/CheckLogin", // Altere a URL da rota de login
        apiData
      );
      console.log(response.data)
      // Verifique a resposta do servidor e tome a ação apropriada
      if (response.data == true) {
        // Login bem-sucedido, redirecione para a página principal, por exemplo
        window.location.href = "/home";
      } else {
        // Login falhou, exiba uma mensagem de erro
        setLoginError(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <section className="bg-orange-600 flex flex-col justify-center items-center w-full h-fit min-h-[1000px]">
      <div className="bg-white rounded-2xl border-none ring-0 mb-16 w-fit h-[65px]">
        <h1 className=" font-sans text-5xl px-3">Login</h1>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="p-10 flex- justify-center items-center mr-24 max-w-[500px] max-h-[500px]">
          <img src="https://cdna.artstation.com/p/assets/images/images/055/312/872/original/alexandra-lydsdottir-cattycatcat-animation.gif?1666649487" alt="" className="scale-200"/>
        </div>
        <FormProvider {...createForm}>
          <form
            onSubmit={handleSubmit(sendForm)}
            className="flex flex-col gap-5 sm:max-w-md lg:max-w-none "
          >
            <Form.Label htmlFor="email" className="text-white px-5">E-mail</Form.Label>
            <Form.Input
              placeholder="nome@exemplo.com"
              type="email"
              name="email"
            />
            <Form.ErrorMessage field="email" />
            <Form.Label htmlFor="password" className="text-white px-5">Senha</Form.Label>
            <Form.Input
              placeholder="Digite sua senha"
              type="password"
              name="password"
            />
            <Form.ErrorMessage field="password" />
            <span className="font-semibold"> Não possui cadastro ? <mark className="text-blue-500 font-semibold bg-transparent cursor-pointer underline font-sans"> <a href="/register" >cadastre-se</a></mark></span>

            <Form.Button name="Login"
              disabled={isSubmitting}
            ></Form.Button>
            
            {loginError && <p>{loginError}</p>}
          </form>
        </FormProvider>

      </div>
    </section>
  )
}