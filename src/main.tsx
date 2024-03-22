import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import { SideBar } from './components/sidebar';
import { generateRoutingForDB } from './pages/db/routing';
import { HomePage } from './pages/home';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <SideBar/>,
    children: [
      { 
        path: "/table", 
        children: generateRoutingForDB()
      },
      { 
        path: "/home", 
        element: <HomePage />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')
  