import { Link } from "@tanstack/react-router"
import { Typography } from "../../../ui/elements"
import clsx from "clsx"
import type { ProductCardProps } from "../../../lib/types"

export const ProductCard = ({ product }: { product: ProductCardProps }) => {
	const { productName, productImg, productDesc, icon, productLink } = product
	return (
		<Link to={productLink} className="px-2 group">
			<figure className="w-fit grid place-items-center">
				<img
					src={productImg}
					className="object-contain size-76 relative group-hover:-translate-y-11.75 duration-450 ease-linear transition-all"
					alt="store image"
				/>
				<div className="w-[14.813rem] h-3.75 bg-neutral800 mt-7.5 blur-[10px] rounded-[50%] group-hover:w-[12.813rem] duration-450 ease-linear transition-all"></div>
			</figure>
			<div
				className={clsx(
					"mt-16.5 rounded-5 w-fit bg-primary1300 pt-6 pb-4.5 px-3 duration-400 ease-linear transition-all",
					"group-hover:[box-shadow:0px_1px_3px_1px_#00000026,0px_1px_2px_0px_#0000004D] ",
				)}
			>
				<div className="mb-2 flex gap-2">
					<figure className="rounded-3 bg-primary100 size-6 grid place-content-center">
						<img src={icon} alt="icon" />
					</figure>
					<Typography lineHeight="24" font="title" color={"neutral100"}>
						{productName}
					</Typography>
				</div>
				<Typography
					variant="body-s"
					fontWeight="light"
					color={"neutral100"}
					customClassName="leading-5.25! max-w-[16.25rem]"
				>
					{productDesc}
				</Typography>
			</div>
		</Link>
	)
}
