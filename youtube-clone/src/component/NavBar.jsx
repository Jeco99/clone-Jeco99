'use client';

import { Navbar, TextInput, Dropdown, Avatar } from 'flowbite-react';
import { HiMenu, HiVideoCamera, HiBell, HiOutlineMicrophone, HiOutlineSearch} from "react-icons/hi";
import UserImage from '../assets/images/user-image.jpg'

import youtubeLogo from '../assets/images/youtube-logo-hd-8.png'

export default function NavbarWithCTAButton() {
  const imageSize = '40px';
  return (
    <Navbar
      fluid
      rounded
    >    
      <Navbar.Brand href=""> 
        <HiMenu size={imageSize}/>     
        <img className="w-10" src={youtubeLogo} alt="Youtube Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
         Youtube <sup>PH</sup>
        </span>
      </Navbar.Brand>
     
      <div className="flex md:order-2">
        <HiVideoCamera size={imageSize} />
        <HiBell size={imageSize} />
        <Dropdown
          inline
          label={<Avatar alt="User settings" img={UserImage} rounded/>}
        >

          <Dropdown.Header>
            <span className="block text-sm">
              Emeroe Neñeria
            </span>
            <span className="block truncate text-sm font-medium">
              iam.emeroe@gmail.com
            </span>
            <span className="block truncate text-sm font-small">
              Manage your Google Account
            </span>
          </Dropdown.Header>

          <Dropdown.Item>
            Your Channel
          </Dropdown.Item>
          <Dropdown.Item>
            Youtube Studio
          </Dropdown.Item>
          <Dropdown.Item>
            Switch Account
          </Dropdown.Item>
          <Dropdown.Item>
            Sign Out
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            Purchases and memberships
          </Dropdown.Item>
          <Dropdown.Item>
            Your data in Youtube
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            Appearance: Device Theme
          </Dropdown.Item>
          <Dropdown.Item>
            Language: English
          </Dropdown.Item>
          <Dropdown.Item>
            Restricted Mode: Off
          </Dropdown.Item>
          <Dropdown.Item>
            Location: Philippines
          </Dropdown.Item>
          <Dropdown.Item>
            Keyboard Shortcuts
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            Settings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            Help
          </Dropdown.Item>
          <Dropdown.Item>
            Send Feedback
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
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


