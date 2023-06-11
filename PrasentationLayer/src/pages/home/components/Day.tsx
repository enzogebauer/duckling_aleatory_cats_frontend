import * as Form from "../../components/index"
interface DaysProps{
  img:string;
}
export function Days({img}: DaysProps) {
  return(
    <div className="h-fit w-fit border-transparent rounded-md mt-20 px-4 py-4 bg-white flex flex-col justify-center items-center ">
        <div className="h-fit w-fit flex ">
          <img src={img} alt="" />
        </div>
        <div className="flex justify-center items-center px-4 py-4">
          <Form.Label htmlFor="data" className="text-black " >Insira uma data</Form.Label>
          <input type="date" className="rounded-full max-w-[300px] bg-white px-4 py-4 mx-10 text-black outline-none ring-black placeholder:text-[16px] placeholder:font-semibold placeholder:text-black focus:ring-2 md:max-w-full" />
          <Form.Button name="Buscar"/>
          <Form.Button name="Salvar dia" className="ml-6"> </Form.Button>
        </div>
        <Form.Button name="Lista de dias"> </Form.Button>
    </div>
  )
}