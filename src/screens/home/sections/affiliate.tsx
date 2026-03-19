import { Link } from "@tanstack/react-router"
import { Typography } from "../../../ui/elements"
import { ApplicationRoutes } from "../../../routes"
import { ProductCard } from "../components"
import { products } from "../../../lib/mock-data"
import { useMediaQuery } from "usehooks-ts"

export const AffiliateSection = () => {
	const sm = useMediaQuery("(max-width: 425px)")
	return (
		<section className="pt-12.5 pb-17 sm:pb-31.5 max-w-[1440px] w-screen mx-auto px-7.5 sm:px-10 lg:px-16">
			<div className="flex justify-between">
				<Typography
					variant="h4"
					font="title"
					lineHeight="72"
					color={"primary1300"}
					customClassName="max-sm:text-[32px] "
				>
					Our Affiliate Store
				</Typography>
				{!sm && (
					<Link to={ApplicationRoutes.AFFILIATE_STORE}>
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
				customClassName="max-w-[54.063rem] max-sm:leading-[32px]"
			>
				Explore our affiliate store for products that make healthy living
				easier. You'll complete purchases on trusted partner sites, and every
				order supports our mission to make healthcare accessible.
			</Typography>

			{sm && (
				<div className="flex justify-end">
					<Link to={ApplicationRoutes.AFFILIATE_STORE}>
						<Typography
							fontWeight="medium"
							customClassName="underline mt-6 w-fit"
							color={"primary1200"}
						>
							Visit Affliliate Store
						</Typography>
					</Link>
				</div>
			)}
			<div className="mt-[4.478rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-20 place-items-center">
				{products.map((product, i) => (
					<ProductCard key={i} product={product} />
				))}
			</div>
		</section>
	)
}
