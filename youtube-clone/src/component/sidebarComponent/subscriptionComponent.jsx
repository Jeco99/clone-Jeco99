'use client';

import { Sidebar } from 'flowbite-react';
// TODO: insert sidebar item under subscription
import { MdSubscriptions } from "react-icons/md";

export default function Subscription() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          
          <Sidebar.Item
            href="#"
           
          >
            
            <h6> <MdSubscriptions /> Subscriptions</h6>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}


