'use client';

import { Navbar, TextInput, Dropdown} from 'flowbite-react';
import { HiMenu, HiVideoCamera, HiBell, HiOutlineMicrophone, HiOutlineSearch} from "react-icons/hi";
import DefaultAvatar from './avatar/avatar';
import Logo from './logo/logo';
import { Link } from 'react-router-dom';
import SignOut from './navbar/logout/Signout';

export default function NavbarWithCTAButton() {
  const imageSize = '40px';
  return (
    <Navbar
      fluid
      rounded
    >    
      <Navbar.Brand href=""> 
        <HiMenu size={imageSize}/>
        
        <Link to='/root'> 
          <Logo />
        </Link>
      </Navbar.Brand>
     
      <div className="flex md:order-2">
        <HiVideoCamera size={imageSize} />
        <HiBell size={imageSize} />
        <Dropdown
          inline
          label={<DefaultAvatar/>}
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
            <SignOut />
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


