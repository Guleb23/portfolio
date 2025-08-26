import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainFrontend from './Partisions/MainFrontend.jsx'
import MainBackend from './Partisions/MainBackend.jsx'
import AboutProject from './Partisions/AboutProject.jsx'
import NotFoundPage from './Components/NotFoundPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainFrontend />,
      },
    ],
  },
  {
    path: "/about",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainBackend />,
      },
    ],
  },
  {
    path: "/project/:id",
    element: <AboutProject />,
    errorElement: <NotFoundPage />

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
