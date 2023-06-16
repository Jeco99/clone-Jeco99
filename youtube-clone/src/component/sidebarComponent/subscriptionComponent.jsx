'use client';

import { Sidebar } from 'flowbite-react';
// TODO: insert sidebar item under subscription

export default function Subscription() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <h6>Subscriptions</h6>
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


