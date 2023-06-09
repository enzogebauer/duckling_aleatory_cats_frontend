import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form"
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}
export function Input({ name, ...props }: InputProps) {
  const { register } = useFormContext()
  return (
    <input 
      id={name}
      type="text"
      className=" rounded-full max-w-[300px] bg-white px-4 py-4 text-black outline-none ring-black placeholder:text-[16px] placeholder:font-semibold placeholder:text-black focus:ring-2 md:max-w-full" {...props}
      {...register(name)} />
  )
}