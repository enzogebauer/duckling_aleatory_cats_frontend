import * as Form from "../../components/index"
interface CatsProps{
  img:string;
}
export function Cat({img}: CatsProps) {
  return(
    <div className="h-fit w-fit border-transparent rounded-md mt-20 px-4 py-4 bg-white flex flex-col justify-center items-center ">
        <div className="h-fit w-fit flex  max-w-[500px] max-h-[500px]">
          <img src={img} alt="" />
        </div>
        <div className="flex justify-center items-center px-4 py-4">
          <Form.Button name="Buscar Gato Aleatório"/>
          <Form.Button name="Salvar gato" className="ml-6"> </Form.Button>
        </div>
        <a href="/">
        <Form.Button name="Lista de gatos"> </Form.Button>
        </a>
        
    </div>
  )
}