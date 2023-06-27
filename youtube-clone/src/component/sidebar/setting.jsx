'use client';

import { Sidebar } from 'flowbite-react';
import { HiChartPie } from 'react-icons/hi';

export default function Setting() {
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
                Setting
                </p>
            </Sidebar.Item>

            <Sidebar.Item
                href="#"
                icon={HiChartPie}
            >
                <p>
                Report history
                </p>
            </Sidebar.Item>

            <Sidebar.Item
                href="#"
                icon={HiChartPie}
            >
                <p>
                Help
                </p>
            </Sidebar.Item>

            <Sidebar.Item
                href="#"
                icon={HiChartPie}
            >
                <p>
                Send feedback
                </p>
            </Sidebar.Item>

            </Sidebar.ItemGroup>
        </Sidebar.Items>
        </Sidebar>
    </>
  )
}


