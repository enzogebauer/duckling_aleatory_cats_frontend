import axios from "axios";
import { Cat } from "../../models/cat";
import { useState } from "react";

export function GetCat() {
  const defaultImg =
    "https://cdna.artstation.com/p/assets/images/images/055/312/872/original/alexandra-lydsdottir-cattycatcat-animation.gif?1666649487";
  const [catImg, setCatImg] = useState<string |undefined>();
  // const [cat, setCat] = useState<Cat | undefined>(undefined);

  async function BuscaGato(): Promise<string> {
    try {
      const response = await axios.get("https://localhost:7057/Cat/GetRandCat");
      const img:string = response.data;
      console.log(img);
      return img;
    } catch (error) {
      console.error("Error fetching cat data:", error);
      throw error; // Rethrow the error to handle it further if needed
    }
  }

  const handleBuscarClick = async () => {
    const img = await BuscaGato();
    console.log(img)
    if (img) {
      setCatImg(img);
      console.log(img)
    }
  };

  // async function CadastrarGato(cat: Cat): Promise<void> {
  //   try {
  //     await axios.post("/gatos/cadastrar", cat);
  //     console.log("Cat cadastrado:", cat);
  //   } catch (error) {
  //     console.error("Error while saving cat:", error);
  //   }
  // }

  // const handleCadastrarGatoClick = async () => {
  //   if (cat) {
  //     await CadastrarGato(cat);
  //   }
  // };

  return (
    <div className="h-fit w-fit border-transparent rounded-md mt-20 px-4 py-4 bg-white flex flex-col justify-center items-center">
      <div className="h-fit w-fit flex max-w-[500px] max-h-[500px]">
        <img src={catImg != undefined ? catImg : defaultImg} alt="" />
      </div>
      <div className="flex justify-center items-center px-4 py-4">
        <button className= "w-fit text-white font-semibold text-xl bg-orange-800 rounded-full px-4 py-2 text-[16px] font-bold text-black shadow-button disabled:opacity-70" onClick={handleBuscarClick}> Buscar Gato Aleatório</button>
        {/* <Form.Button name="Salvar gato" className="ml-6" onClick={handleCadastrarGatoClick}></Form.Button> */}
      </div>
    </div>
  );
}