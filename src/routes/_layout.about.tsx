import { createFileRoute, HeadContent } from "@tanstack/react-router"
import { AboutPage } from "../screens/about"

export const Route = createFileRoute("/_layout/about")({
	head: () => ({
		meta: [
			{
				title: "About | Doctor Snap",
			},
			{
				name: "description",
				content: "Find out more about Doctor Snap",
			},
		],
	}),
	component: () => (
		<>
			<HeadContent />
			<AboutPage />
		</>
	),
})
