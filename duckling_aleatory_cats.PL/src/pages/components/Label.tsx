import { LabelHTMLAttributes } from "react"

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>){
  return(
    <label {...props} className=" font-semibold"></label>
  )
}