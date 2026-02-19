import { Link } from "@tanstack/react-router"
import { Button, Typography } from "../../ui/elements"
import { ProductCard } from "../home/components"
import { products } from "./product-data"
import clsx from "clsx"

export const AffiliateStorePage = () => {
	return (
		<section className="pt-[12.029rem] grid place-content-center">
			<section className="max-w-[1440px] w-screen mx-auto px-16">
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
						easier. You'll complete purchases on trusted partner sites, and
						every order supports our mission to make healthcare accessible.
					</Typography>

					<div className="mt-[4.478rem] flex gap-8 justify-center">
						{products.map((product, i) => (
							<ProductCard key={i} product={product} />
						))}
					</div>
				</section>
				<section className="pt-25 pb-16.5">
					<div
						className={clsx(
							"rounded-9 w-screen max-w-327.5 pt-[3.986rem] pb-[4.204rem] grid gap-8",
							"place-content-center relative",
							"bg-linear-[180deg,#0D2329_0%,#122F37_50%,#1D4D5A_100%]",
						)}
					>
						<img
							src="/svgs/dots.svg"
							className="absolute top-6 left-[67px]"
							alt="dots"
						/>
						<article className="grid gap-5 max-w-142.5">
							<Typography
								variant="h5"
								font="title"
								align="center"
								customClassName="text-[42px]! leading-[50px]"
								color={"neutral100"}
							>
								Ready to explore products that {""}
								<i className="text-primary300">support your health?</i>
							</Typography>
							<Typography lineHeight="28" align="center" color={"primary200"}>
								Browse our curated selection of doctor-recommended health
								devices and wellness products. Every purchase supports
								accessible healthcare.
							</Typography>
						</article>
						<div className="w-full flex justify-center">
							<Button text="Visit Affiliate Store" neutral />
						</div>
						<div className="flex items-center gap-2.5 justify-center">
							<img src="/svgs/verified-badge-Icon.svg" alt="disclaimer icon" />
							<Typography
								variant="body-xs"
								lineHeight="20"
								customClassName="text-[#8aabb5]! max-w-[28.813rem]"
							>
								Clicking the button above will redirect you to a trusted
								external partner platform where you can securely complete your
								purchase. Doctor Snap does not process payments directly.
							</Typography>
						</div>
					</div>
				</section>
				<section className="py-9.5">
					<div className="w-full bg-[#EDFBFF] border-[#D8E8ED] border-[1.11px] rounded-7 pt-[1.493rem] pb-[1.743rem] px-10 items-center flex gap-4">
						<div className="flex gap-3 items-center">
							<figure className="p-2.5 bg-primary100 rounded-5">
								<img
									src="/public/svgs/Info-icon.svg"
									className="size-5"
									alt="info-icon"
								/>
							</figure>
							<Typography
								fontWeight="semi-bold"
								lineHeight="32"
								color={"primary1300"}
							>
								Affiliate Disclaimer
							</Typography>
						</div>
						<div className="h-8 w-[0.99px] bg-[#D8E8ED]"></div>
						<Typography
							variant="body-s"
							lineHeight="20"
							color={"tertiary600"}
							customClassName="max-w-[62.125rem]"
						>
							Doctor Snap participates in affiliate programs. When you purchase
							through the links on our store page, we may earn a small
							commission at no additional cost to you. All products are
							independently selected and recommended by our medical team. We
							only recommend products we trust and believe will benefit your
							health journey.
						</Typography>
					</div>
				</section>
			</section>
		</section>
	)
}
