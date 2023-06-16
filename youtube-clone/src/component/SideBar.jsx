'use client';

import { Sidebar } from 'flowbite-react';

import Library from './sidebarComponent/libraryComponent';
import Subscription from './sidebarComponent/subscriptionComponent';
import Home from './sidebarComponent/homeComponent';
import Shorts from './sidebarComponent/shortsComponent';
import History from './sidebarComponent/historyComponent';
import YourVideos from './sidebarComponent/yourVideosComponent';
import WatchLater from './sidebarComponent/watchLaterComponent';
import LikedVideos from './sidebarComponent/likeVideosComponent';

export default function DefaultSidebar() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
        
            <Home />
            <Shorts />
            <Subscription />
            <hr />

            <Library />
            <History />
            <YourVideos />
            <WatchLater />           
            <LikedVideos />
            <hr />

        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}


