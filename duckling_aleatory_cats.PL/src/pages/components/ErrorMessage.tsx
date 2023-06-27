import { useFormContext } from "react-hook-form"

interface ErrorMessageProps {
  field: string
}

export function ErrorMessage({ field }: ErrorMessageProps) {
	const { formState: { errors } } = useFormContext()

	const fieldError = errors[field]
    
	if (!fieldError) {
		return null
	}

	return (
		<span className="text-sm font-semibold text-error">{fieldError.message?.toString()}</span>
	)
}