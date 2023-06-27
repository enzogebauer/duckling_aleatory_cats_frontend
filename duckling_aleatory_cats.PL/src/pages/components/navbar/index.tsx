import { useState } from "react"
import { List, X } from "phosphor-react"
import { ListItem } from "./ListItem"


export function Navbar() {
  const [isTheMenuOpen, setIsTheMenuOpen] = useState(false)

  function handleUserClick() {
    setIsTheMenuOpen((prev) => !prev)
  }

  return (
    <header className="z-40 fixed left-0 top-0 flex w-full bg-primary-blue py-4 lg:py-3">
      <nav className="flex w-full items-center justify-between px-8 sm:m-auto lg:w-[920px] lg:px-0 z-40  ">
        <a href="/home">
          <img src="https://cdna.artstation.com/p/assets/images/images/055/312/872/original/alexandra-lydsdottir-cattycatcat-animation.gif?1666649487" alt="Logo Canindé" className="h-11 md:z-0 rounded-full scale-200" />
        </a>
        <div
          className="absolute right-8 top-[1.5rem] cursor-pointer text-white lg:hidden"
          onClick={handleUserClick}
        >
          {isTheMenuOpen ? <X size={32} /> : <List size={32} />}
        </div>
        <ul
          className={`absolute left-0 lg:static lg:translate-y-0 ${isTheMenuOpen ? "translate-y-[11.8rem] " : "-translate-y-52"
            } flex w-full flex-col items-center gap-8 bg-white py-5 transition-transform duration-500 ease-in-out  lg:mr-0
							lg:w-fit lg:flex-row lg:bg-transparent
						`}
        >
          <ListItem href="/cats-list">Lista de Gatos</ListItem>
        </ul>
      </nav>
    </header>
  )
}