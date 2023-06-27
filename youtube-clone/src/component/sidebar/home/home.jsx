'use client';

import { Sidebar } from 'flowbite-react';
import homeData from './homeData';

export default function Home() {
  return (
    <>
        <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
            <Sidebar.ItemGroup>
            {homeData.map( ( {icon, name} ) => (
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

