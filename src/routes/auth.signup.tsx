import { createFileRoute } from '@tanstack/react-router'
import { SignupPage } from '../screens/authentication'

export const Route = createFileRoute('/auth/signup')({
  component: SignupPage,
})
