'use client';

import { Sidebar } from 'flowbite-react';
import { AiFillHome } from "react-icons/ai";

export default function Shorts() {
  const iconSize = '30px';
  return (
    <Sidebar aria-label="Default sidebar example">
      
      <Sidebar.Items>
        <Sidebar.ItemGroup>

          <Sidebar.Item
            href="#"
          >
            <div id='content--icon'>
              <AiFillHome size={iconSize}/> 
              <h6 id='sidebarItems'>Shorts</h6>
            </div>
          </Sidebar.Item>

        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
