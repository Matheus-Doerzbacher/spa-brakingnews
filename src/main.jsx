import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Search from './pages/Search/Search.jsx'
import Home from './pages/Home/Home.jsx'
import { GlobalStyle } from './globalStyled.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'

const rauter = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={rauter} />
  </React.StrictMode>,
)
