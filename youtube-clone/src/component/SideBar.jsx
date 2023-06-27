'use client';

import { Sidebar } from 'flowbite-react';

import Home from './sidebar/home';
import Subscription from '/src/component/sidebar/subscription/subscriptions';
import Explore from './sidebar/explore';
import MoreAboutYoutube from './sidebar/moreAboutYoutube';
import Setting from './sidebar/setting';

export default function DefaultSidebar() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Home />
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


