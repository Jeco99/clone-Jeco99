'use client';

import { Sidebar } from 'flowbite-react';
import { MdVideoLibrary } from "react-icons/md";

export default function Library() {
  const iconSize = '30px';
  return (
    <Sidebar aria-label="Default sidebar example">
      
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          
          <Sidebar.Item
            href="#"
          >
            <div id='content--icon'>
              <MdVideoLibrary size={iconSize}/> 
              <h6 id='sidebarItems'>Library</h6>
            </div>   
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}


