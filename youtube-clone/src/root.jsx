import NavbarWithCTAButton from './component/NavBar'
import DefaultSidebar from './component/SideBar'
import DisplayVideo from './component/displayVideo/displayVideo'
// import LogInPage from './pages/logInPage'



export default function Root(){
    return(
        <>
        <nav id="navbar"> <NavbarWithCTAButton /> </nav>
        <div id="displayContent">
            <aside id="sidebar" > <DefaultSidebar /> </aside>
            <main id="MainContent"> <DisplayVideo /> </main>
        </div> 
        </>
    )
}