import { Days } from "./components/Day";

export function Home(){
  return(
    <section className="bg-orange-600 flex flex-col justify-center items-center w-full h-fit min-h-[1000px]">
      <header className="w-fit h-fit bg-white font-extrabold text-4xl flex justify-center items-center">
        <h1 className="mt-4">Duckling Days</h1>
      </header>
      <Days img="https://cdn.discordapp.com/attachments/848394422215245885/1117510024340709376/sun-removebg-preview.png"/>
    </section>
  )
}