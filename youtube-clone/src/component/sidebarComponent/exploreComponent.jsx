'use client';

import { Sidebar } from 'flowbite-react';
// TODO: insert sidebar item under explore

export default function Explore() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <h6>Explore</h6>
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


