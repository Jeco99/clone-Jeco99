'use client';

import { Sidebar } from 'flowbite-react';
import { AiOutlinePlaySquare } from "react-icons/ai";

export default function YourVideos() {
  const iconSize = '30px';
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>

          <Sidebar.Item
            href="#"
          >
            <div id='contentIcon'>
               <AiOutlinePlaySquare size={iconSize}/> 
               <h6 id='sidebarItems'>Your videos</h6>
            </div>           
          </Sidebar.Item>

        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}