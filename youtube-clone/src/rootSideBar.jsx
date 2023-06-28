import NavbarWithCTAButton from './component/NavBar'
import DefaultSidebar from './component/SideBar'
import { Outlet } from 'react-router-dom'

export default function SideBar_Root(){
    return(
        <>
        <nav id="navbar"> <NavbarWithCTAButton /> </nav>
        <div id="displayContent">
            <aside id="sidebar" > <DefaultSidebar /> </aside>
            <main id="MainContent"><Outlet /></main>
        </div> 
        </>
    )
}