import clsx from "clsx"

interface ButtonProps {
	primary?: boolean
	secondary?: boolean
	neutral?: boolean
	text: string
	customClassname?: string
	type?: "button" | "submit" | undefined
	loading?: boolean
	onClick?: () => unknown
}

const Button: React.FC<ButtonProps> = (props) => {
	const {
		primary,
		secondary,
		neutral,
		text,
		customClassname,
		type = "button",
		onClick,
		loading,
		...rest
	} = props
	return (
		<button
			type={type}
			onClick={onClick}
			className={clsx(
				"w-fit cursor-pointer rounded-full bg-primary500! py-4 px-6.25 font-semibold  font-roboto-flex ",
				"transition-colors duration-200 ease-linear flex gap-2.5 items-center",
				primary && "bg-primary1300! text-white",
				secondary && "bg-secondary900 text-white",
				neutral && "bg-white text-primary1300s",
				loading && "bg-gray-300 cursor-not-allowed!",
				customClassname,
			)}
			disabled={loading}
			{...rest}
		>
			{text}
		</button>
	)
}

export { Button }
