import { Typography } from "../../../ui/elements"
import type { ProductCardProps } from "../sections"

export const ProductCard = ({ product }: { product: ProductCardProps }) => {
	const { productName, productImg, productDesc, icon } = product
	return (
		<div className="px-2">
			<figure className="w-fit cursor-pointer grid place-items-center group">
				<img
					src={productImg}
					className="object-contain size-76 relative group-hover:-translate-y-11.75 duration-450 ease-linear transition-all"
					alt="store image"
				/>
				<div className="w-[14.813rem] h-3.75 bg-neutral800 mt-7.5 blur-[10px] rounded-[50%] group-hover:w-[12.813rem] duration-450 ease-linear transition-all"></div>
			</figure>
			<div className="mt-16.5 rounded-5 w-fit bg-primary1300 pt-6 pb-4.5 px-3">
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
		</div>
	)
}
