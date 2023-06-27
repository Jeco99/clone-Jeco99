'use client';

import { Sidebar } from 'flowbite-react';
import settingData from './settingData';

export default function Setting() {
  return (
    <>
        <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
            <Sidebar.ItemGroup>
            {settingData.map( ( {icon, name} ) => (
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


