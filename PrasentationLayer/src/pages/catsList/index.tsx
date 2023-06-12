import { Navbar } from "../components/navbar"
import { CatsList } from "./components/CatsList"



export function Cats() {
  return (
    <>
      <Navbar />
      <section className="bg-orange-600 flex flex-col justify-center items-center w-full h-fit min-h-[1000px]">
        <CatsList />
      </section></>

  )
}