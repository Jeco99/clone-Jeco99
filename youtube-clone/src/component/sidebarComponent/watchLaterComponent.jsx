'use client';

import { Sidebar } from 'flowbite-react';
import { AiOutlineClockCircle } from "react-icons/ai";

export default function WatchLater() {
  const iconSize = '30px';
  return (
    <Sidebar aria-label="Default sidebar example">
      
      <Sidebar.Items>
        <Sidebar.ItemGroup>

          <Sidebar.Item
            href="#"
          >
             <div id='content--icon'>
              <AiOutlineClockCircle size={iconSize}/> 
              <h6 id='sidebarItems'>Watch Later</h6>
            </div>   
          </Sidebar.Item>

        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
