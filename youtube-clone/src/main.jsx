import React from 'react'
import ReactDOM from 'react-dom/client'
import NavbarWithCTAButton from './component/Navbar'
import DefaultSidebar from './component/SideBar'
import DisplayVideo from './component/displayVideo'

import './style/index.css'

ReactDOM.createRoot(document.getElementById('navbar')).render(
  <React.StrictMode>
    <NavbarWithCTAButton />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('sidebar')).render(
  <React.StrictMode>
    <DefaultSidebar />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('MainContent')).render(
  <React.StrictMode>
   <DisplayVideo />
  </React.StrictMode>,
)

