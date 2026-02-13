import { Typography } from "../../../ui/elements"


export const UnderConstruction = () => {
	return (
		<div className="w-full h-[95vh] grid place-content-center">
			<figure className="grid place-items-center gap-10 pt-10">
				<img src="/svgs/construction.svg" alt="work in progress" />
				<Typography
					variant="h4"
					font="title"
					fontWeight="semi-bold"
					align="center"
					lineHeight="full"
				>
					Under Construction
				</Typography>
			</figure>
		</div>
	)
}
