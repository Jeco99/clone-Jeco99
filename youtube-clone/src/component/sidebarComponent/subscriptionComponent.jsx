'use client';

import { Sidebar } from 'flowbite-react';
import { MdSubscriptions } from "react-icons/md";

export default function Subscription() {
  const iconSize = '30px';
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          
          <Sidebar.Item
            href="#"
           
          >
             <div id='contentIcon'>
              <MdSubscriptions size={iconSize}/> 
              <h6 id='sidebarItems'>Subscriptions</h6>
            </div>    
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}


