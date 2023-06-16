'use client';

import { Sidebar } from 'flowbite-react';
import MainSideBar from './sidebarComponent/mainSideBar';
import Explore from './sidebarComponent/exploreComponent';
import Library from './sidebarComponent/libraryComponent';
import Subscription from './sidebarComponent/subscriptionComponent';
import MoreAboutYT from './sidebarComponent/moreAboutYTComponent';
import SettingYT from './sidebarComponent/settingComponent';
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
            <hr />
            <Shorts />
            <hr />
            <Subscription />
            <hr />
            <Library />
            <hr />
            <History />
            <hr />
            <YourVideos />
            <hr />
            <WatchLater />
            <hr />
            <LikedVideos />
            <hr />
            <MainSideBar />
            <hr />
            <Explore />
            <hr />           
            <MoreAboutYT />
            <hr />
            <SettingYT />
            <hr />
            


        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}


