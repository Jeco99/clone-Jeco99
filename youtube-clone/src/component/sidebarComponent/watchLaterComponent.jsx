'use client';

import { Sidebar } from 'flowbite-react';
// TODO: insert sidebar item under explore
import { AiOutlineClockCircle } from "react-icons/ai";

export default function WatchLater() {
  return (
    <Sidebar aria-label="Default sidebar example">
      
      <Sidebar.Items>
        <Sidebar.ItemGroup>

          <Sidebar.Item
            href="#"
           
          >
            <h6> < AiOutlineClockCircle/> Watch later</h6>
          </Sidebar.Item>

        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
