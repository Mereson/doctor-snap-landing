import * as z from "zod"

export const loginSchema = z.object({
	email: z.email("Invalid email"),
	password: z
		.string("Password is required")
		.min(8, "Password must be greater than 8 characters"),
	remember: z.boolean(),
})

export type LoginSchemaType = z.infer<typeof loginSchema>
