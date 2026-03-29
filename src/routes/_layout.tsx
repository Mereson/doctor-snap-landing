import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '../screens/layout'

export const Route = createFileRoute('/_layout')({
  component: Layout
})
