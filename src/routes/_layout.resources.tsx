import { createFileRoute, HeadContent } from "@tanstack/react-router"
import { ResourcesPage } from "../screens/resources"

export const Route = createFileRoute("/_layout/resources")({
	head: () => ({
		meta: [
			{
				title: "Resources | Doctor Snap",
			},
			{
				name: "description",
				content: "Browse helpful resources and tools.",
			},
		],
	}),

	component: () => {
		return (
			<>
				<HeadContent />
				<ResourcesPage />
			</>
		)
	},

	
})
