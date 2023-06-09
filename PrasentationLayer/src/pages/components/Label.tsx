import { LabelHTMLAttributes } from "react"

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>){
  return(
    <label {...props} className="px-5 font-semibold text-white"></label>
  )
}