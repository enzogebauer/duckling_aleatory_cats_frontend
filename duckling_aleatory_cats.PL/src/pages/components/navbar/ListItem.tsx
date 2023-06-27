import { ReactNode, HTMLAttributes } from "react"
interface ListItemProps extends HTMLAttributes<HTMLAnchorElement> {
	children: ReactNode
	href: string
	className?: string
	isButton?: boolean
}

export function ListItem({
	children,
	...props
}: ListItemProps) {
	return (
		<li className="cursor-pointer">
			<a
				{...props}
				className={`text-md font-bold 
						 text-white lg:text-white 
							relative after:content-[''] after:w-[0%] after:h-[2px] 
							after:bg-orange-600 lg:after:bg-white 
							after:absolute after:left-0 after:-bottom-2 
							hover:after:w-[100%] after:transition-[width] after:duration-[600ms]`
				}
			>
				{children}
			</a>
		</li>
	)
}