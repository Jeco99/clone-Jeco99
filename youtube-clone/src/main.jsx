import React from 'react'
import ReactDOM from 'react-dom/client'
import DefaultNavbar from './component/NavBar'
import DefaultSidebar from './component/SideBar'

import './style/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DefaultNavbar />
    {/* <DefaultSidebar /> */}
  </React.StrictMode>,
)
