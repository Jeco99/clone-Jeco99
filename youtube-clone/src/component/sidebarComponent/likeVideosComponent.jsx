'use client';

import { Sidebar } from 'flowbite-react';
// TODO: insert sidebar item under library
import { MdVideoLibrary } from "react-icons/md";

export default function LikedVideos() {
  return (
    <Sidebar aria-label="Default sidebar example">
      
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          
          <Sidebar.Item
            href="#"
           
          >
          <h6> <MdVideoLibrary/> Liked videos</h6>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
