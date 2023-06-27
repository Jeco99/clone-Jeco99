'use client';

import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiInbox, HiViewBoards } from 'react-icons/hi';

export default function Home() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="/home"
            icon={HiChartPie}
          >
            <p>
             Home
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/short"
            icon={HiViewBoards}
          >
            <p>
             Shorts
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/subscriptions"
            icon={HiInbox}
          >
            <p>
              Subscriptions
            </p>
          </Sidebar.Item>
          <hr />
          <Sidebar.Item
            href="/library"
            icon={HiChartPie}
          >
            <p>
             Library
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/history"
            icon={HiViewBoards}
          >
            <p>
            History
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/watchlater"
            icon={HiInbox}
          >
            <p>
            Watch Later
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/likedvideos"
            icon={HiInbox}
          >
            <p>
           Liked Videos
            </p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}


