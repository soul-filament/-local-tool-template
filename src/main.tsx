import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import { SideBar } from './components/sidebar';
import { HomePage } from './pages/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <a href={`/test/a/b`}>Your Name123</a>,
  },
  {
    path: "/test/a/b",
    element: <HomePage/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SideBar>
      <RouterProvider router={router} />
    </SideBar>
  </React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')
  