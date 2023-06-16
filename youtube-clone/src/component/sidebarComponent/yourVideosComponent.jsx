'use client';

import { Sidebar } from 'flowbite-react';
// TODO: insert sidebar item under explore
import { AiOutlinePlaySquare } from "react-icons/ai";

export default function YourVideos() {
  return (
    <Sidebar aria-label="Default sidebar example">
      
      <Sidebar.Items>
        <Sidebar.ItemGroup>

          <Sidebar.Item
            href="#"
           
          >
        <h6> < AiOutlinePlaySquare/> Your videos</h6>
          </Sidebar.Item>

        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}