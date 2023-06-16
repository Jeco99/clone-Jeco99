'use client';

import { Sidebar } from 'flowbite-react';
// TODO: insert sidebar item under more about YT

export default function MoreAboutYT() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <h6>More from Youtube</h6>
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


