import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css' //重置css
import "@/styles/index.scss"
import { BrowserRouter } from "react-router-dom"
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
