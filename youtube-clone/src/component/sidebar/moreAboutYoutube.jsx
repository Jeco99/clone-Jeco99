'use client';

import { Sidebar } from 'flowbite-react';
import { HiChartPie } from 'react-icons/hi';

export default function MoreAboutYoutube() {
  return (
    <>
        <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
            <Sidebar.ItemGroup>
            <Sidebar.Item
                href="#"
                icon={HiChartPie}
            >
                <p>
                Youtube Premium
                </p>
            </Sidebar.Item>

            <Sidebar.Item
                href="#"
                icon={HiChartPie}
            >
                <p>
                Youtube Music
                </p>
            </Sidebar.Item>

            <Sidebar.Item
                href="#"
                icon={HiChartPie}
            >
                <p>
                Youtube Kids
                </p>
            </Sidebar.Item>

            </Sidebar.ItemGroup>
        </Sidebar.Items>
        </Sidebar>
    </>
  )
}


