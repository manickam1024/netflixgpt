import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
var App = () => (
  <h1 className="text-red-500 text-2xl flex justify-center">hello world!! </h1>
)
var Root = ReactDOM.createRoot(document.getElementById('root'))

Root.render(<App />)
