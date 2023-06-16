'use client';

import { Navbar, TextInput } from 'flowbite-react';
import { HiMenu, HiVideoCamera, HiBell, HiUser, HiOutlineMicrophone, HiOutlineSearch} from "react-icons/hi";


import youtubeLogo from '../assets/images/youtube-logo-hd-8.png'

export default function NavbarWithCTAButton() {
  const imageSize = '40px';
  return (
    <Navbar
      fluid
      rounded
    >
    
      <Navbar.Brand href="">
        {/*TODO:  Some hamburger button 
            Use navbar-collapse????? */}
          <HiMenu size={imageSize}/>
        <img className="w-10" src={youtubeLogo} alt="Youtube Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
         Youtube <sup>PH</sup>
        </span>
      </Navbar.Brand>
     
      <div className="flex md:order-2">
        <HiVideoCamera size={imageSize} />
        <HiBell size={imageSize} />
        <HiUser size={imageSize} />
      </div>

      
       <div className='flex'>
        <TextInput 
          id='searchTopic'
          placeholder='Search'
          required
          rightIcon={HiOutlineSearch}
        />
        <HiOutlineMicrophone size={imageSize}/>
       </div>

      
     
    </Navbar>
  )
}


