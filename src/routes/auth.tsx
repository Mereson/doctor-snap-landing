import { createFileRoute } from "@tanstack/react-router"
import { AuthLayout } from "../screens/authentication"

export const Route = createFileRoute("/auth")({
	component: AuthLayout,
})
