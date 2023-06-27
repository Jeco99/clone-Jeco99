import React from 'react'
import ReactDOM from 'react-dom/client'
import NavbarWithCTAButton from './component/Navbar'
import DefaultSidebar from './component/SideBar'
import DisplayVideo from './component/displayVideo/displayVideo'

import './style/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <nav id="navbar"> <NavbarWithCTAButton /> </nav>
    <div id="displayContent">
      <aside id="sidebar" > <DefaultSidebar /> </aside>
      <main id="MainContent"> <DisplayVideo /> </main>
    </div> 
  </React.StrictMode>,
)



