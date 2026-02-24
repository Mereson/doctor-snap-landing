import {
	AboutCTA,
	AboutHero,
	CreationStory,
	Welcome,
	WhatWeWant,
} from "./sections"

export const AboutPage = () => {
	return (
		<>
			<AboutHero />
			<Welcome />
			<CreationStory />
			<WhatWeWant />
			<AboutCTA />
		</>
	)
}
