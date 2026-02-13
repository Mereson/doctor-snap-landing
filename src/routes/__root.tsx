import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { NotFound } from '../screens/layout'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound
})

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
      <TanStackRouterDevtools/>
    </React.Fragment>
  )
}
