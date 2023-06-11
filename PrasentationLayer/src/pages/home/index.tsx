import { useState } from "react";
import { Cat } from "./components/Cat";
import axios from "axios";
interface Cat {
  id?: number;
  name: string;
  banner_url: string;
  temperament: string;
}
export function Home(){
  
  const [cat, setCat] = useState()
  return(
    <section className="bg-orange-600 flex flex-col justify-center items-center w-full h-fit min-h-[1000px]">
      <header className="w-fit h-fit bg-white font-extrabold text-4xl flex justify-center items-center">
        <h1 className="mt-4">Duckling Aleatory Cats</h1>
      </header>
      <Cat img="https://cdna.artstation.com/p/assets/images/images/055/312/872/original/alexandra-lydsdottir-cattycatcat-animation.gif?1666649487"/>
    </section>
  )
}