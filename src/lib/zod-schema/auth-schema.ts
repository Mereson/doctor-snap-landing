import * as z from "zod"

export const loginSchema = z.object({
	email: z.email("Invalid email"),
	password: z
		.string("Password is required")
		.min(8, "Password must be more than 8 characters"),
	remember: z.boolean(),
})

export type LoginSchemaType = z.infer<typeof loginSchema>

export const signupSchema = z.object({
	firstName: z
		.string("First name is required")
		.min(1, "First name must be more than 3 characters"),
	lastName: z
		.string("Last name is required")
		.min(1, "Last name must be more than 3 characters"),
	email: z.email("Invalid email"),
	password: z
		.string("Password is required")
		.min(8, "Password must be more than 8 characters"),
})

export type SignupSchemaType = z.infer<typeof signupSchema>
