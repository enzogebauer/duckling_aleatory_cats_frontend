import { ButtonHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
export function Button({className, ...props}: ButtonProps) {
  return (
    <button
      type="submit"
      className={`${className} w-fit text-white font-semibold text-xl bg-orange-800 rounded-full px-4 py-2 text-[16px] font-bold text-black shadow-button disabled:opacity-70`}
    > {props.name}
    </button>
  )
}