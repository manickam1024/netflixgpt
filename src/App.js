import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Login from './components/login'
import Header from './components/header'
import Footer from './components/footer'
import { Provider } from 'react-redux'
import store from './utils/appstore'
import Browse from './components/browse/browse'
// App component
const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  )
}

// Router setup
const router = createBrowserRouter([
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
      {
        path: '/browse',
        element: <Browse />,
      },
    ],
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router} />)
