import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './Pages/ErrorPage.tsx'
import { Home } from './Pages/Home.tsx'
import ClassMenu from './Pages/ClassMenu.tsx'
import { CharacterSheet } from './Pages/CharacterSheet.tsx'
import { ClassProvider } from './Context/ClassProvider.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/class-menu",
        element: <ClassMenu />
      },
      {
        path: "/character-sheet",
        element: <CharacterSheet />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClassProvider>
      <RouterProvider router={router} />
    </ClassProvider>
  </StrictMode>,
)
