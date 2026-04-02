import { createFileRoute } from '@tanstack/react-router'
import { LoginPage } from '../screens/authentication'

export const Route = createFileRoute('/login')({
  component: LoginPage,
})

