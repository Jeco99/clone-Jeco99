'use client';

import { Sidebar } from 'flowbite-react';
import libraryData from './libraryData'
import { Link } from "react-router-dom";

export default function Library() {
  return (
    <>
        <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
            <Sidebar.ItemGroup>
            {libraryData.map( ( {icon, name} ) => (
                  <Sidebar.Item
                  icon={icon}
                  key={name}
                >
                   <Link to={`/pages/${name}`}>  {name} </Link>
                </Sidebar.Item>
            ))}
            </Sidebar.ItemGroup>
        </Sidebar.Items>
        </Sidebar>
    </>
  )
}


