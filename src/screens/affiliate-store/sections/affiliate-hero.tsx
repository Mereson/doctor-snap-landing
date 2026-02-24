import { Link } from "@tanstack/react-router"
import { Typography } from "../../../ui/elements"
import { ProductCard } from "../../home/components"
import { products } from "../../../lib/mock-data/product-data"

export const AffiliateHero = () => {
	return (
		<section className="pb-29.5">
			<div className="flex justify-between mb-4">
				<Typography
					variant="h3"
					font="title"
					lineHeight="64"
					color={"primary1300"}
				>
					Our Affiliate Store
				</Typography>
				<Link to={"."}>
					<Typography
						fontWeight="medium"
						customClassName="underline"
						color={"primary1200"}
					>
						Visit Affliliate Store
					</Typography>
				</Link>
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

			<div className="mt-[4.478rem] flex gap-8 justify-center">
				{products.map((product, i) => (
					<ProductCard key={i} product={product} />
				))}
			</div>
		</section>
	)
}
