import React from 'react'
import ReactDOM from 'react-dom/client'
import { Main } from './routes'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { store } from './store/index'
import { Provider } from 'react-redux'

import '@/index.scss'
import '@assets/styles/normalize.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace={true} />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
