import * as Form from "../../components/index"
import axios from "axios"
import { useState, useEffect } from "react";
import { Cat } from "../../models/cat";
import { CatCard } from "./CatCard";



export function CatsList() {
  const [cats, setCats] = useState<Cat[]>([]);
  useEffect(() => {
    axios.get("/api/cats").then((response) => {
      setCats(response.data);
    });
  }, []);

  return (
    <div className="w-full flex flex-wrap mt-40 lg:mt-16 ">
      {cats.map((cat, index) => (
        <div
          key={index}
          className="w-1/3 p-4"
        // A classe "w-1/3" define que cada elemento ocupará 1/3 do container
        >
          <CatCard name={cat.name} banner_url={cat.banner_url}/>
        </div>
      ))}
      <a href="home">  <Form.Button name="Voltar" /></a>

    </div>
  )
}