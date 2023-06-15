'use client';

import { Button, Navbar } from 'flowbite-react';
import DefaultSidebar from './SideBar';

import youtubeLogo from '../assets/images/youtube-logo-hd-8.png'

export default function NavbarWithCTAButton() {
  return (
    <Navbar
      fluid
      rounded
    >

      <Navbar.Brand href="">
        {/*TODO:  Some hamburger button 
            Use navbar-collapse????? */}
        <img className="w-10" src={youtubeLogo} alt="Youtube Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
         Youtube <sup>PH</sup>
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>
          Get started
        </Button>
      </div>
     
    </Navbar>
  )
}


