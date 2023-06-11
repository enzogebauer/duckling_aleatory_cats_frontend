import * as Form from "../../components/index"
import axios from "axios"
import { useState, useEffect } from "react";
interface Cat {
  id?: number;
  name: string;
  banner_url: string;
}



export function CatsList() {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    // Fetch cats data from an API
    axios.get("/api/cats").then((response) => {
      setCats(response.data);
    });
  }, []);

  return (
    <div className="w-full flex flex-wrap mt-40 lg:mt-16">
      {cats.map((cat, index) => (
        <div
          key={index}
          className="w-1/3 p-4"
        // A classe "w-1/3" define que cada elemento ocupará 1/3 do container
        >
          <img src={cat.banner_url} alt={cat.name} className="mb-2" />
          <h2 className="text-lg font-bold">{cat.name}</h2>
        </div>
      ))}
      <a href="home">  <Form.Button name="Voltar" /></a>

    </div>
  )
}