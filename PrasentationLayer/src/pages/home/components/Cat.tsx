import * as Form from "../../components/index";
import axios from "axios";
import { Cat } from "../../models/cat";
import { useState } from "react";

interface CatsProps {
  img?: string;
}

export function GetCat({ img }: CatsProps) {
  const defaultImg =
    "https://cdna.artstation.com/p/assets/images/images/055/312/872/original/alexandra-lydsdottir-cattycatcat-animation.gif?1666649487";
  const [catImg, setCatImg] = useState<string>(defaultImg);
  const [cat, setCat] = useState<Cat | undefined>(undefined);

  async function BuscaGato(): Promise<Cat | undefined> {
    try {
      const response = await axios.get(`/gatos/gatoaleatorio`);
      const catData: Cat = response.data;
      return catData;
    } catch (error) {
      console.error("Error fetching cat data:", error);
      return undefined;
    }
  }

  const handleBuscarClick = async () => {
    const result = await BuscaGato();
    if (result) {
      setCatImg(result.banner_url);
      setCat(result);
    }
  };

  async function CadastrarGato(cat: Cat): Promise<void> {
    try {
      await axios.post("/gatos/cadastrar", cat);
      console.log("Cat cadastrado:", cat);
    } catch (error) {
      console.error("Error while saving cat:", error);
    }
  }

  const handleCadastrarGatoClick = async () => {
    if (cat) {
      await CadastrarGato(cat);
    }
  };

  return (
    <div className="h-fit w-fit border-transparent rounded-md mt-20 px-4 py-4 bg-white flex flex-col justify-center items-center">
      <div className="h-fit w-fit flex max-w-[500px] max-h-[500px]">
        <img src={img ? catImg : defaultImg} alt="" />
      </div>
      <div className="flex justify-center items-center px-4 py-4">
        <Form.Button name="Buscar Gato Aleatório" onClick={handleBuscarClick} />
        <Form.Button name="Salvar gato" className="ml-6" onClick={handleCadastrarGatoClick}></Form.Button>
      </div>
    </div>
  );
}