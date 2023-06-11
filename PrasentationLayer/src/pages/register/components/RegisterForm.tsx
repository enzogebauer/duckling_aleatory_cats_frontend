
import { z } from "zod"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import * as Form from "../../components/index"
const sendFormSchema = z.object({
  nome: z
    .string()
    .nonempty({ message: "O nome é obrigatório" }),
  email: z
    .string()
    .nonempty({ message: "O e-mail é obrigatório" })
    .email({ message: "Formato de e-mail inválido" }),
  senha: z
    .string()
    .nonempty({ message: "A mensagem não pode ser vazia" }),

})

type formData = z.infer<typeof sendFormSchema>
export function RegisterForm() {
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
      const response = await axios.post(import.meta.env.VITE_MAIL_SEND, apiData)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <section className="bg-orange-600 flex flex-col justify-center items-center w-full h-fit min-h-[1000px]">
      <div className="bg-white rounded-2xl border-none ring-0 mb-16 w-fit h-[65px]">
        <h1 className=" font-sans text-5xl px-3">Cadastre-se</h1>
      </div>
      <div className="flex flex-row justify-center items-center">
        <FormProvider {...createForm}>
          <form
            onSubmit={handleSubmit(sendForm)}
            className="flex flex-col gap-5 sm:max-w-md lg:max-w-none "
          >
            <Form.Label htmlFor="nome" className="text-white px-5">Nome</Form.Label>
            <Form.Input
              placeholder="Digite seu nome"
              type="nome"
              name="nome"
            />
            <Form.ErrorMessage field="nome" />
            <Form.Label htmlFor="email" className="text-white px-5">E-mail</Form.Label>
            <Form.Input
              placeholder="nome@exemplo.com"
              type="email"
              name="email"
            />
            <Form.ErrorMessage field="email" />
            <Form.Label htmlFor="name" className="text-white px-5">Senha</Form.Label>
            <Form.Input
              placeholder="Digite sua senha"
              type="password"
              name="senha"
            />
            <Form.ErrorMessage field="senha" />
            <Form.Button
              name="Cadastre-se"
              disabled={isSubmitting}
            >
              Cadatrar
            </Form.Button>
          </form>
        </FormProvider>
        <div className="p-10 flex- justify-center items-center ml-24">
          <img src="https://cdn.discordapp.com/attachments/848394422215245885/1117510024340709376/sun-removebg-preview.png" alt="" />
        </div>
      </div>
    </section>
  )
}