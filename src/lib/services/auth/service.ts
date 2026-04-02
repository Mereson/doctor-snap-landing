import { createAuthClient } from "better-auth/react"

const BASE_URL = import.meta.env.VITE_BACKEND_URL
const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL

export const authClient = createAuthClient({
	baseURL: BASE_URL,
})

export const handleGoogleCall = async () => {
	await authClient.signIn.social({
		provider: "google",
		callbackURL: FRONTEND_URL,
	})
}

export const socialSignIn = async () => {
	try {
		const res = await fetch(`${BASE_URL}/auth/social-sign-in`, {
			method: "POST",
			credentials: "include",
		})

		const result = await res.json()

		if (!result.success) {
			throw new Error(result.message || "Error signing up")
		}

		return result.data
	} catch (error) {
		console.error(error)
	}
}

export const userSignOut = async () => {
	try {
		await authClient.signOut()

		const res = await fetch(`${BASE_URL}/auth/logout`, {
			method: "POST",
			credentials: "include",
		})

		const result = await res.json()

		if (!result.success) {
			throw new Error(result.message || "Error logging out")
		}

		return result
	} catch (error) {
		console.error(error)
	}
}
