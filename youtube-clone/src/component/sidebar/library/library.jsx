'use client';

import { Sidebar } from 'flowbite-react';
import libraryData from './libraryData'

export default function Library() {
  return (
    <>
        <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
            <Sidebar.ItemGroup>
            {libraryData.map( ( {icon, name} ) => (
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


