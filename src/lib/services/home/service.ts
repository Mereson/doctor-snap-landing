import { useQuery } from "@tanstack/react-query"

const BASE_URL = import.meta.env.VITE_BACKEND_URL

const getAllPackages = async () => {
	try {
		const res = await fetch(`${BASE_URL}/package`)

		const result = await res.json()

		if (!result.success) {
			throw new Error(result.message || "Error fetching packages")
		}

		return result.data
	} catch (error) {
		console.error(error)
	}
}

export const useGetAllPackages = () =>
	useQuery({
		queryKey: ["All Packages"],
		queryFn: async () => {
			return await getAllPackages()
		},
	})
