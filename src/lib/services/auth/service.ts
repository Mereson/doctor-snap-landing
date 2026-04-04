import { useMutation } from "@tanstack/react-query"
import { createAuthClient } from "better-auth/react"
import type { LoginSchemaType, SignupSchemaType } from "../../zod-schema"

const BASE_URL = import.meta.env.VITE_BACKEND_URL
const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL

export const authClient = createAuthClient({
	baseURL: BASE_URL,
})

/**
 * ----------------
 * ---- SIGNUP ----
 * ----------------
 * @description Create user account
 */
const signup = async (data: SignupSchemaType) => {
	try {
		const res = await fetch(`${BASE_URL}/auth/signup`, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(data),
		})

		const result = await res.json()

		if (!result.success) {
			throw new Error(result.error || "Error Siging up")
		}

		return result.data
	} catch (error) {
		console.error(error)
	}
}

/**
 * ---------------
 * ---- LOGIN ----
 * ---------------
 * @description Email and Password login
 */
const login = async (data: LoginSchemaType) => {
	try {
		const res = await fetch(`${BASE_URL}/auth/login`, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(data),
		})

		const result = await res.json()

		if (!result.success) {
			throw new Error(result.error || "Error logging in")
		}

		return result.data
	} catch (error) {
		console.error(error)
	}
}

/**
 * ----------------------------
 * ---- HANDLE GOOGLE CALL ----
 * ----------------------------
 * @description Get user google credentials
 */
export const handleGoogleCall = async () => {
	await authClient.signIn.social({
		provider: "google",
		callbackURL: FRONTEND_URL,
	})
}

/**
 * ------------------------
 * ---- SOCIAL SIGN IN ----
 * ------------------------
 * @description Google credentials signin
 */
const socialSignIn = async () => {
	try {
		const res = await fetch(`${BASE_URL}/auth/social-sign-in`, {
			method: "POST",
			credentials: "include",
		})

		const result = await res.json()

		if (!result.success) {
			throw new Error(result.error || "Error signing up")
		}

		return result.data
	} catch (error) {
		console.error(error)
	}
}

/**
 * -----------------------
 * ---- USER SIGN OUT ----
 * -----------------------
 * @description Log user out
 */
const userSignOut = async () => {
	try {
		await authClient.signOut()

		const res = await fetch(`${BASE_URL}/auth/logout`, {
			method: "POST",
			credentials: "include",
		})

		const result = await res.json()

		if (!result.success) {
			throw new Error(result.error || "Error logging out")
		}

		return result
	} catch (error) {
		console.error(error)
	}
}

/**
 * --------------------------
 * ---- USE USER SIGN UP ----
 * --------------------------
 * @description User sign up hook
 */
export const useUserSignUp = () => {
	return useMutation({
		mutationKey: ["Sign up"],
		mutationFn: async (data: SignupSchemaType) => {
			return await signup(data)
		},
	})
}

/**
 * ------------------------
 * ---- USE USER LOGIN ----
 * ------------------------
 * @description Login hook
 */
export const useUserLogin = () => {
	return useMutation({
		mutationKey: ["Login"],
		mutationFn: async (data: LoginSchemaType) => {
			return await login(data)
		},
	})
}

/**
 * ----------------------------
 * ---- USE SOCIAL SIGN IN ----
 * ----------------------------
 * @description Social sigin hook
 */
export const useSocialSignIn = () => {
	return useMutation({
		mutationKey: ["Social Sign In"],
		mutationFn: async () => {
			return await socialSignIn()
		},
	})
}

/**
 * ---------------------------
 * ---- USE USER SIGN OUT ----
 * ---------------------------
 * @description Signout hook
 */
export const useUserSignOut = () => {
	return useMutation({
		mutationKey: ["User Sign Out"],
		mutationFn: async () => {
			return await userSignOut()
		},
	})
}
