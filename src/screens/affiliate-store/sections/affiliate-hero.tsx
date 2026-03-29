import { Link } from "@tanstack/react-router"
import { Typography } from "../../../ui/elements"
import { ProductCard } from "../../home/components"
import { products } from "../../../lib/mock-data/product-data"
import { useMediaQuery } from "usehooks-ts"

export const AffiliateHero = () => {
	const sm = useMediaQuery("(max-width: 640px)")

	return (
		<section className="pb-16 lg:pb-29.5">
			<div className="flex justify-between mb-4">
				<Typography
					variant="h3"
					font="title"
					lineHeight="64"
					color={"primary1300"}
				>
					Our Affiliate Store
				</Typography>
				{!sm && (
					<Link to={"."}>
						<Typography
							fontWeight="medium"
							customClassName="underline"
							color={"primary1200"}
						>
							Visit Affliliate Store
						</Typography>
					</Link>
				)}
			</div>
			<Typography
				variant="body-l"
				color={"tertiary700"}
				customClassName="max-w-[43.313rem]"
			>
				Explore our affiliate store for products that make healthy living
				easier. You'll complete purchases on trusted partner sites, and every
				order supports our mission to make healthcare accessible.
			</Typography>

			{sm && (
					<Link to={"."}>
						<Typography
							fontWeight="medium"
							customClassName="underline mt-8"
							color={"primary1200"}
						>
							Visit Affliliate Store
						</Typography>
					</Link>
				)}

			<div className="mt-[4.478rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
				{products.map((product, i) => (
					<ProductCard key={i} product={product} />
				))}
			</div>
		</section>
	)
}
