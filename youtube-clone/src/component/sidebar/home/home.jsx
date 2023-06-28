'use client';

import { Sidebar } from 'flowbite-react';
import homeData from './homeData';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
        <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
            <Sidebar.ItemGroup>
            {homeData.map( ( {icon, name} ) => (
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

