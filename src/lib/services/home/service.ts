import { useMutation, useQuery } from "@tanstack/react-query"

const BASE_URL = import.meta.env.VITE_BACKEND_URL

/**
 * --------------------------
 * ---- GET ALL PACKAGES ----
 * --------------------------
 * @description Fetch all packages
 */
const getAllPackages = async () => {
	try {
		const res = await fetch(`${BASE_URL}/package`)

		const result = await res.json()

		if (!result.success) {
			throw new Error(result.error || "Error fetching packages")
		}

		return result.data
	} catch (error) {
		console.error(error)
	}
}

/**
 * -----------------------
 * ---- PURCHASE PACKAGE ----
 * -----------------------
 * @description Purchase a package
 */
const purchasePackage = async (packageId: string) => {
	try {
		const res = await fetch(`${BASE_URL}/purchase/create-checkout-session`, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({ packageId }),
		})

		const result = await res.json()

		if (!result.success) {
			throw new Error(result.error || "Error completing purchase")
		}

		window.location = result.data.url
	} catch (error) {
		console.error(error)
	}
}

/**
 * -------------------------------
 * ---- USE GET ALL PACKAGAES ----
 * -------------------------------
 * @description Get all packages hook
 */
export const useGetAllPackages = () =>
	useQuery({
		queryKey: ["All Packages"],
		queryFn: async () => {
			return await getAllPackages()
		},
	})

/**
 * -------------------------------
 * ---- USE PURCHASE PACKAGAE ----
 * -------------------------------
 * @description Purchase package hook
 */
export const usePurchasePackage = () =>
	useMutation({
		mutationKey: ["Purchase Package"],
		mutationFn: async (packageId: string) => {
			return await purchasePackage(packageId)
		},
	})
