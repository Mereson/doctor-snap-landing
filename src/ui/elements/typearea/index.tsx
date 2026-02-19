import clsx from "clsx"
import { Typography } from "../typography"
import type { AnyFieldApi } from "@tanstack/react-form"

interface TextAreaProps {
	label?: string
	placeholder?: string
	field: AnyFieldApi
}

export const TextArea: React.FC<TextAreaProps> = (props) => {
	const { label, placeholder, field } = props
	return (
		<div className="col-span-1 w-full">
			{label && (
				<label htmlFor={field.name}>
					<Typography variant="body-s" lineHeight="20" color={"tertiary500"}>
						{label}
					</Typography>
				</label>
			)}
			<textarea
				name={field.name}
				placeholder={placeholder && placeholder}
				value={field.state.value}
				onChange={(e) => field.handleChange(e.target.value)}
				className={clsx(
					"border-[0.5px] border-neutral300 rounded-7 mt-2 w-full h-46.5 text-primary1400 px-4 py-3 font-roboto-flex",
					"bg-[#F9F8F8] [box-shadow:0px_4px_4px_-1px_#0C0C0D0D_inset] outline-0 placeholder:text-neutral700",
				)}
			/>
		</div>
	)
}
