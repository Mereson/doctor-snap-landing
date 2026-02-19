import { Link } from "@tanstack/react-router"
import { Typography } from "../../../ui/elements"
import { ApplicationRoutes } from "../../../routes"
import { ProductCard } from "../components"
import { products } from "../../affiliate-store"

export interface ProductCardProps {
	productImg: string
	productName: string
	icon: string
	productDesc: string
	productLink: string
}

export const AffiliateSection = () => {
	return (
		<section className="pt-12.5 pb-31.5 grid place-content-center">
			<section className="max-w-[1440px] w-screen mx-auto px-16">
				<div className="flex justify-between">
					<Typography
						variant="h4"
						font="title"
						lineHeight="72"
						color={"primary1300"}
					>
						Our Affiliate Store
					</Typography>
					<Link to={ApplicationRoutes.AFFILIATE_STORE}>
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
					customClassName="max-w-[54.063rem]"
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
		</section>
	)
}

