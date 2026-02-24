import { Typography } from "../../../ui/elements"
import {
	CoreValues,
	WhatWeWantCards,
	type WhatWeWantCardProps,
} from "../components"

export const WhatWeWant = () => {
	return (
		<section className="max-w-[1440px] mx-auto pl-16.75 pr-15.5 py-[2.938rem] grid gap-16">
			<article className="grid gap-4 w-full max-w-143">
				<Typography
					variant="h4"
					font="title"
					color={"primary1300"}
					customClassName="text-[54px] max-w-[31.5rem] leading-[67.5px]"
				>
					What we want
				</Typography>
				<Typography variant="body-l" color={"tertiary600"}>
					Our guiding principles shape every decision we make and every life we
					touch through Doctor Snap.
				</Typography>
			</article>
			<div className="px-2.5 grid grid-cols-3 gap-12.5">
				{principlesList.map((principles, i) => (
					<WhatWeWantCards key={i} props={principles} />
				))}
			</div>
			<div className="flex justify-center items-center gap-4">
				<CoreValues value="Compassion" />
				<CoreValues value="Accessibility" />
				<CoreValues value="Education" />
				<CoreValues value="Integrity" />
			</div>
		</section>
	)
}

const principlesList: WhatWeWantCardProps[] = [
	{
		title: "Our Vision",
		text: "A world where every individual, regardless of their background, financial status, or location, has seamless access to quality healthcare and the guidance they need to live a healthy life.",
		type: "Vision",
	},
	{
		title: "Our Mission",
		text: "To break down the barriers that prevent people from accessing quality healthcare by leveraging technology, compassion, and medical expertise to deliver accessible, affordable, and culturally sensitive care to all.",
		type: "Mission",
	},
	{
		title: "Core Values",
		text: "Compassion at the heart of everything we do. Accessibility for all without exception. Innovation to improve health outcomes. Education to empower patients on their health journey.",
		type: "Values",
	},
]
