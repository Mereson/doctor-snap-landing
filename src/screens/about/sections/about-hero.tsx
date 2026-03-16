import clsx from "clsx"
import { Button, Image, Typography } from "../../../ui/elements"
import { useNavigate } from "@tanstack/react-router"
import { ApplicationRoutes } from "../../../routes"

export const AboutHero = () => {
	const navigate = useNavigate()
	return (
		<section className="max-w-[1440px] w-screen mx-auto pl-18 pr-16.5 pt-46 pb-[6.158rem] flex gap-[4.438rem] items-center">
			<article className="grid gap-6 max-w-[41.563rem]">
				<Typography
					variant="h2"
					font="title"
					color={"primary1300"}
					customClassName="leading-[79.2px] max-w-[39.625rem]"
				>
					Curious About <i>Doctor Snap?</i>
				</Typography>
				<Typography variant="body-l" color={"primary1300"}>
					Discover the fascinating world of Doctor Snap and learn more about the
					innovative Doctor Ikeme behind this remarkable service.
				</Typography>

				<Button
					onClick={() =>
						navigate({ to: ApplicationRoutes.ABOUT, hash: "#creation-story" })
					}
					text="Our Story"
					negative
				/>
			</article>
			<figure className="max-w-137.5 w-screen relative max-h-[45.967rem] h-screen rounded-9 bg-primary1200">
				<Image
					avif="/images/about-img.avif"
					webp="/images/about-img.webp"
					img="/images/about-img.png"
					desc="about image"
					imgClass="max-w-130 h-full rounded-9 w-full object-cover object-top"
					priority
				/>
				<div
					className={clsx(
						"absolute bottom-[2.684rem] right-2 rounded-7 border-[1.11px] border-[#C0B9B9] px-5.25 py-4.25",
						"[box-shadow:0px_1px_3px_0px_#58D2F7330px_4px_8px_6px_#82E1FF33] bg-[#FFFFFFE5]",
					)}
				>
					<Typography
						variant="h9"
						font="title"
						lineHeight="28"
						color={"primary1400"}
					>
						Doctor Arinze Ikeme.
					</Typography>
					<Typography
						font="title"
						color={"primary1200"}
						customClassName="leading-[22.4px]!"
					>
						Head Doctor.
					</Typography>
				</div>
			</figure>
		</section>
	)
}
