import { createFileRoute } from "@tanstack/react-router"
import { Home } from "../screens/home"

export const Route = createFileRoute("/_layout/")({
	component: Home,
})
