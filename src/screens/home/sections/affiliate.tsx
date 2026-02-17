import { Link } from "@tanstack/react-router"
import { Typography } from "../../../ui/elements"
import { ApplicationRoutes } from "../../../routes"
import { ProductCard } from "../components"

export interface ProductCardProps {
	productImg: string
	productName: string
	icon: string
	productDesc: string
}

export const AffiliateSection = () => {
	return (
		<section className="pt-12.5 pb-31.5 grid place-content-center">
			<section className="max-w-[1440px] w-screen mx-auto ">
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

				<div className="mt-[4.478rem] flex gap-8">
					{products.map((product, i) => (
						<ProductCard key={i} product={product} />
					))}
				</div>
			</section>
		</section>
	)
}

const products: ProductCardProps[] = [
	{
		productImg: "/images/watch-product.png",
		productName: "Health Sensor Watch",
		icon: "/svgs/Activity.svg",
		productDesc:
			"Track your wellness in real time with actionable insights, all from your wrist.",
	},
	{
		productImg: "/images/glucose-monitor-product.png",
		productName: "Continuous Glucose Monitor.",
		icon: "/svgs/Trending up.svg",
		productDesc: "Tracks blood sugar in real time—no finger pricks needed.",
	},
	{
		productImg: "/images/oximeter-product.png",
		productName: "Pulse Oximeter",
		icon: "/svgs/Thermometer.svg",
		productDesc: "Measures oxygen levels and pulse quickly and easily.",
	},
	{
		productImg: "/images/ecg-monitor-product.png",
		productName: "ECG monitor",
		icon: "/svgs/Heart.svg",
		productDesc: "Monitors heart rhythm anytime for ongoing heart health.",
	},
]
