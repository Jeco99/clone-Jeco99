'use client';

import { Sidebar } from 'flowbite-react';
import subscriptionsData from './subscriptionData';


export default function Subscription() {
  return (
    <>
        <h1>Subscription</h1>
        
        <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
            {subscriptionsData.map( ( {icons, name} ) => (
                  <Sidebar.Item
                  href={`/${name}`}
                  icon={icons}
                  key={name}
                >
                  <p>
                   {name}
                  </p>
                </Sidebar.Item>
            ))}
        
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </>
 
  )
}


