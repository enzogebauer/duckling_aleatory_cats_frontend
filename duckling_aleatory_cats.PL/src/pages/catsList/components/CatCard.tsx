import { Cat } from "../../models/cat";

export function CatCard({ name, banner_url }: Cat) {
  return (
    <div>
      <img src={banner_url} alt={name} className="mb-2" />
      <label className="text-lg font-bold"> {name}</label>
    </div>
  )
}