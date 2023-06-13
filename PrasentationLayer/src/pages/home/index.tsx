import { Navbar } from "../components/navbar";
import { GetCat } from "./components/Cat";
export function Home() {

  return (
    <>
      <Navbar />
      <section className="bg-orange-600 flex flex-col justify-center items-center w-full h-fit min-h-[1000px]">
        <header className="w-fit h-fit bg-white font-extrabold text-4xl flex justify-center items-center">
          <h1 className="mt-4">Duckling Aleatory Cats</h1>
        </header>
        {/* botarimagem do gato vindo do back */}
        <GetCat />
      </section>
    </>

  )
}