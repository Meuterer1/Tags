import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from 'react-query'
import App from './app'

const rootElement = document.getElementById('root')

const queryClient = new QueryClient()

if (rootElement != null) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <Router>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Router>
    </React.StrictMode>
  )
} else {
  console.error("Element with ID 'root' not found in the document.")
}
