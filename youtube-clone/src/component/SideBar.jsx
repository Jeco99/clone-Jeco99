'use client';

import { Sidebar } from 'flowbite-react';

import Home from './sidebar/home/home';
import Library from './sidebar/library/library';
import Subscription from './sidebar/subscription/subscriptions';
import Explore from './sidebar/explore/explore';
import MoreAboutYoutube from './sidebar/more_about/moreAboutYoutube';
import Setting from './sidebar/setting/setting';

export default function DefaultSidebar() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Home />
          <hr />
          <Library />
          <hr />
          <Subscription />
          <hr />
          <Explore />
          <hr />
          <MoreAboutYoutube />
          <hr />
          <Setting />
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}


