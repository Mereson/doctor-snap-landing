import { createFileRoute, HeadContent } from "@tanstack/react-router"
import { AffiliateStorePage } from "../screens/affiliate-store"

export const Route = createFileRoute("/_layout/affiliate-store")({
	head: () => ({
		meta: [
			{
				title: "Affiliate Store | Doctor Snap",
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
			<AffiliateStorePage />
		</>
	),
})
