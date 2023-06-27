'use client';

import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiInbox, HiViewBoards } from 'react-icons/hi';

export default function Explore() {
  return (
    <>
        <h1>Explore</h1>
        <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
            <Sidebar.ItemGroup>
            <Sidebar.Item
                href="#"
                icon={HiChartPie}
            >
                <p>
                Trending
                </p>
            </Sidebar.Item>
            <Sidebar.Item
                href="#"
                icon={HiViewBoards}
            >
                <p>
                Music
                </p>
            </Sidebar.Item>
            <Sidebar.Item
                href="#"
                icon={HiInbox}
            >
                <p>
                Movies
                </p>
            </Sidebar.Item>
            <Sidebar.Item
                href="#"
                icon={HiChartPie}
            >
                <p>
                Gaming
                </p>
            </Sidebar.Item>
            <Sidebar.Item
                href="#"
                icon={HiViewBoards}
            >
                <p>
                News
                </p>
            </Sidebar.Item>
            <Sidebar.Item
                href="#"
                icon={HiInbox}
            >
                <p>
                Sports
                </p>
            </Sidebar.Item>
            <Sidebar.Item
                href="#"
                icon={HiInbox}
            >
                <p>
                Fashion & Beauty
                </p>
            </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
        </Sidebar>
    </>
  )
}


