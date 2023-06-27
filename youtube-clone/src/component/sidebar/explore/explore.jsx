'use client';

import { Sidebar } from 'flowbite-react';
import exploreData from './exploreData';

export default function Explore() {
  return (
    <>
        <h1>Explore</h1>
        <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
            <Sidebar.ItemGroup>
            {exploreData.map( ( {icon, name} ) => (
                  <Sidebar.Item
                  href={`/${name}`}
                  icon={icon}
                  key={name}
                >
                  <p>
                   {name}
                  </p>
                </Sidebar.Item>
            ))}
            </Sidebar.ItemGroup>
        </Sidebar.Items>
        </Sidebar>
    </>
  )
}


