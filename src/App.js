import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Browse from './components/browse'
import Login from './components/login'
import Header from './components/header'
import Footer from './components/footer'

var App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const approuter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Browse />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
])

var Root = ReactDOM.createRoot(document.getElementById('root'))

Root.render(<RouterProvider router={approuter} />)
