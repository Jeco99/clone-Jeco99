'use client';

import { Sidebar } from 'flowbite-react';
// TODO: insert sidebar item under explore
import { MdVideoLibrary } from "react-icons/md";

export default function History() {
  return (
    <Sidebar aria-label="Default sidebar example">
      
      <Sidebar.Items>
        <Sidebar.ItemGroup>

          <Sidebar.Item
            href="#"
           
          >
        <h6> < MdVideoLibrary/> History</h6>
          </Sidebar.Item>

        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}