'use client';

import { Sidebar } from 'flowbite-react';
import MainSideBar from './sidebarComponent/mainSideBar';
import Explore from './sidebarComponent/exploreComponent';
import Library from './sidebarComponent/libraryComponent';
import Subscription from './sidebarComponent/subscriptionComponent';
import MoreAboutYT from './sidebarComponent/moreAboutYTComponent';
import SettingYT from './sidebarComponent/settingComponent';

export default function DefaultSidebar() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
         
            <MainSideBar />
            <hr />
            <Explore />
            <hr />
            <Library />
            <hr />
            <Subscription />
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


