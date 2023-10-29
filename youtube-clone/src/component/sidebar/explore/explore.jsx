'use client';

import { Sidebar } from 'flowbite-react';
import exploreData from './exploreData';
import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <>
        <h1>Explore</h1>
        <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
            <Sidebar.ItemGroup>
            {exploreData.map( ( {icon, name} ) => (
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


