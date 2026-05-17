import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { routeTree } from './routeTree.gen' 


// 1. Initialize the router instance
const queryClient = new QueryClient()
const router = createRouter({ routeTree, context: { queryClient } })

// 2. Register the router type contexts
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// 3. Select the #root element and physically append the application view
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}