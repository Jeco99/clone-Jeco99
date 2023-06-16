'use client';

import { Tabs } from 'flowbite-react';

export default function PillsTabs() {
  return (
    <Tabs.Group
      aria-label="Pills"
      style="pills"
    >
      <Tabs.Item
        active
        title="Tab 1"
      >
     
      </Tabs.Item>

      <Tabs.Item title="Tab 2">
     
      </Tabs.Item>

      <Tabs.Item title="Tab 3">
      
      </Tabs.Item>

      <Tabs.Item title="Tab 4">
       
      </Tabs.Item>

      <Tabs.Item
        disabled
        title="Tab 5"
      >
       
      </Tabs.Item>
      
    </Tabs.Group>
  )
}




