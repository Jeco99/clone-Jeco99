'use client';

import { Sidebar } from 'flowbite-react';
import moreAbout_data from './moreAbout_data';

export default function MoreAboutYoutube() {
  return (
    <>
        <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
            <Sidebar.ItemGroup>
            {moreAbout_data.map( ( {icon, name} ) => (
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


