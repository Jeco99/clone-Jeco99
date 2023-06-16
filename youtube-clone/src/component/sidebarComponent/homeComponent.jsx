'use client';

import { Sidebar } from 'flowbite-react';
// TODO: insert sidebar item under explore
import { AiFillHome } from "react-icons/ai";

export default function Home() {
  return (
    <Sidebar aria-label="Default sidebar example">
      
      <Sidebar.Items>
        <Sidebar.ItemGroup>

          <Sidebar.Item
            href="#">
            <p>
                <h6><AiFillHome/>Home</h6>
            </p>
          </Sidebar.Item>

        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
