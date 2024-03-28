import React from 'react'
import ReactDOM from 'react-dom/client'

import { QueryClient, QueryClientProvider } from 'react-query'
import App from './app'

import './app.css'

const rootElement = document.getElementById('root')

const queryClient = new QueryClient()

if (rootElement != null) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  )
} else {
  console.error("Element with ID 'root' not found in the document.")
}
