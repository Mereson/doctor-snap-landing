import clsx from "clsx"
import { Typography } from "../typography"
import { type AnyFieldApi } from "@tanstack/react-form"

interface InputProps {
	label?: string
	placeholder?: string
	field: AnyFieldApi
	emailList?: boolean
	emailListCustomClass?: string
}

export const Input: React.FC<InputProps> = (props) => {
	const { label, placeholder, field, emailList, emailListCustomClass } = props

	return (
		<>
			{emailList ? (
				<>
					<input
						name={field.name}
						placeholder={placeholder && placeholder}
						value={field.state.value}
						onChange={(e) => field.handleChange(e.target.value)}
						className={clsx(
							"pl-[2.938rem] pr-7 py-6.25 rounded-full font-roboto-flex outline-0 w-full max-w-160 bg-white placeholder:text-tertiary700 text-primary1300",
							emailListCustomClass,
						)}
					/>
				</>
			) : (
				<div className="col-span-1 w-full">
					{label && (
						<label htmlFor={field.name}>
							<Typography
								variant="body-s"
								lineHeight="20"
								color={"tertiary500"}
							>
								{label}
							</Typography>
						</label>
					)}

					<input
						type="text"
						name={field.name}
						placeholder={placeholder}
						value={field.state.value}
						onChange={(e) => field.handleChange(e.target.value)}
						className={clsx(
							"border-[0.5px] border-neutral300 rounded-7 mt-2 w-full h-18 text-primary1400 px-4 font-roboto-flex",
							"bg-[#F9F8F8] [box-shadow:0px_4px_4px_-1px_#0C0C0D0D_inset] outline-0 placeholder:text-neutral700",
						)}
					/>
				</div>
			)}
		</>
	)
}
