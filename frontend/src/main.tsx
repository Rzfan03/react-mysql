import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import addUser from './components/addUser.tsx'
import editUser from './components/editUser.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: '/add',
    Component: addUser,
  },
  {
    path: '/edit/:id',
    Component: editUser
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}>
    <StrictMode>
      <App />
    </StrictMode>,
  </RouterProvider>
)
