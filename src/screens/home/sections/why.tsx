import { Typography } from "../../../ui/elements"
import { WhyCard } from "../components"

export interface WhyListProps {
	id: string
	assetIcon: string
	title: string
	text: string
}

export const WhySection = () => {
	return (
		<section className="py-[11.313rem] grid place-content-center bg-[#FEFBFB]">
			<section className="max-w-[1440px] w-screen mx-auto">
				<div className="max-w-273 mb-8 grid gap-0.25 px-16">
					<Typography variant="h4" lineHeight="72" font="title">
						Why <i> Doctor Snap?</i>
					</Typography>
					<Typography variant="body-l" color={"tertiary700"}>
						We're here to make healthcare easier. Accessible, affordable, and
						private—delivered online so you get the care you need, when you need
						it.
					</Typography>
				</div>
				<div className="flex justify-center gap-8 items-start">
					{whyList.map((item) => (
						<WhyCard key={item.id} whyList={item} />
					))}
				</div>
			</section>
		</section>
	)
}

const whyList: WhyListProps[] = [
	{
		id: "1",
		assetIcon: "/svgs/Shield off.svg",
		title: "No Insurance Needed",
		text: "Skip the paperwork, get medical care online without insurance approvals, forms, or limitations. Pay transparently and receive care when you need it—simple, direct, and stress-free.",
	},
	{
		id: "2",
		assetIcon: "/svgs/Target.svg",
		title: "Specialized Care",
		text: "Connect with qualified medical professionals who focus on specific areas of care. Receive informed guidance tailored to your needs, all through a seamless online experience.",
	},
	{
		id: "3",
		assetIcon: "/svgs/Lock.svg",
		title: "Privacy Comes First",
		text: "All interactions and data are protected with strong privacy standards. Your personal information remains private, secure, and fully under your control.",
	},
	{
		id: "4",
		assetIcon: "/svgs/Dollar sign.svg",
		title: "Affordable Care Access",
		text: "Get clear, upfront pricing with no hidden costs. Access medical care online at rates designed to be fair, transparent, and accessible.",
	},
]
