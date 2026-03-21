import { Link } from "@tanstack/react-router"
import { Typography } from "../../ui/elements"
import { Logo } from "./logo"
import { ApplicationRoutes } from "../../routes"
import clsx from "clsx"

const currentYear = new Date().getFullYear()

export const Footer = () => {
	return (
		<footer className="max-w-[1440px] mx-auto p-2 sm:p-8 ">
			<section className="rounded-8 bg-primary1300 max-sm:px-4.25 p-8">
				<div className="grid grid-cols-5 max-sm:gap-[2.563rem] gap-15  lg:gap-0 pb-[2.563rem] sm:pb-16 border-b-2 border-b-[#B5DDE73D]">
					<div className="col-span-full md:col-span-2 grid gap-6">
						<figure className="flex items-center gap-2">
							<Logo fill="fill-primary1200" />
							<Typography
								variant="h8"
								lineHeight="full"
								fontWeight="medium"
								color={"neutral100"}
							>
								Doctor Snap
							</Typography>
						</figure>
						<Typography
							variant="body-m"
							color={"tertiary100"}
							customClassName="max-w-[22.375rem]"
						>
							Reimagining healthcare through accessible online care—removing
							barriers and bringing quality support closer to everyone.
						</Typography>
					</div>

					<div
						className={clsx(
							"col-span-full md:col-span-3 lg:col-span-2 flex flex-col sm:flex-row items-start md:justify-between lg:justify-normal ",
							"md:pl-10 lg:pl-0 gap-[2.563rem] max-md:gap-x-43.5 lg:gap-35 xl:gap-43.5",
						)}
					>
						<div className="grid gap-6">
							<Typography
								variant="body-m"
								fontWeight="medium"
								color={"neutral100"}
							>
								Navigation
							</Typography>
							<Typography
								tag="ul"
								color={"tertiary100"}
								lineHeight="32"
								customClassName="grid gap-4"
							>
								<li>
									<Link to={ApplicationRoutes.HOME}>Home</Link>
								</li>
								<li>
									<Link to={ApplicationRoutes.ABOUT}>About</Link>
								</li>
								<li>
									<Link to={ApplicationRoutes.AFFILIATE_STORE}>
										Affiliate Store
									</Link>
								</li>
								<li>
									<Link to={ApplicationRoutes.RESOURCES}>Resources</Link>
								</li>
							</Typography>
						</div>
						<div className="grid gap-6 ">
							<Typography
								variant="body-m"
								fontWeight="medium"
								color={"neutral100"}
							>
								Legal
							</Typography>
							<Typography
								tag="ul"
								color={"tertiary100"}
								lineHeight="32"
								customClassName="grid gap-4"
							>
								<li>
									<Link to={"/"}>Privacy Policy</Link>
								</li>
								<li>
									<Link to={"/"}>Terms of Service</Link>
								</li>
								<li>
									<Link to={"/"}>Affiliate Disclaimer</Link>
								</li>
							</Typography>
						</div>
					</div>

					<div className="max-sm:grid col-span-full lg:col-span-1">
						<Typography
							variant="body-m"
							fontWeight="medium"
							color={"neutral100"}
						>
							Connect
						</Typography>
						<div className="flex gap-2 xl:gap-4 mt-6">
							<figure className="size-12 rounded-3 items-center justify-center flex bg-primary1100">
								<img src="/svgs/linkedin.svg" alt="linkedin logo" />
							</figure>
							<figure className="size-12 rounded-3 items-center justify-center flex bg-primary1100">
								<img src="/svgs/facebook.svg" alt="facebook logo" />
							</figure>
							<figure className="size-12 rounded-3 items-center justify-center flex bg-primary1100">
								<img src="/svgs/instagram.svg" alt="instagram logo" />
							</figure>
							<figure className="size-12 rounded-3 items-center justify-center flex bg-primary1100">
								<img src="/svgs/twitter.svg" alt="twitter logo" />
							</figure>
						</div>
					</div>
				</div>
				<div className="pt-3 sm:pt-[2.063rem] flex flex-col sm:flex-row items-center justify-between max-sm:gap-y-2">
					<Typography variant="body-xs" color={"tertiary100"} lineHeight="18">
						© {currentYear} Doctor Snap Inc. All rights reserved.
					</Typography>
					<Typography variant="body-xs" color={"tertiary100"} lineHeight="18">
						Designed for better health.
					</Typography>
				</div>
			</section>
		</footer>
	)
}
