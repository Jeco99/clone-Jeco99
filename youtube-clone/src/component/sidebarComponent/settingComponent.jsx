'use client';

import { Sidebar } from 'flowbite-react';
// TODO: insert sidebar item under setting

export default function SettingYT() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          
          <Sidebar.Item
            href="#"
           
          >
            <p>
              Sign Up
            </p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}


