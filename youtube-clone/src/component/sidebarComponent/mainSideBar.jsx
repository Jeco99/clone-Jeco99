'use client';

import { Sidebar } from 'flowbite-react';
// TODO: insert sidebar item at the top

export default function MainSideBar() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="#"
       
          >
            <p>
              Dashboard
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
          
            label="Pro"
            labelColor="dark"
          >
            <p>
              Kanban
            </p>
          </Sidebar.Item>
       
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}


