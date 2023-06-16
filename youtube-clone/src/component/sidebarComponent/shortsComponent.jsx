'use client';

import { Sidebar } from 'flowbite-react';
// TODO: insert sidebar item under explore

export default function Shorts() {
  return (
    <Sidebar aria-label="Default sidebar example">
      
      <Sidebar.Items>
        <Sidebar.ItemGroup>

          <Sidebar.Item
            href="#"
           
          >
            <h6>Shorts</h6>
          </Sidebar.Item>

        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
