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
            {subscriptionsData.map( ( {icons, subscriptionName} ) => (
                  <Sidebar.Item
                  href="#"
                  icon={icons}
                  key={subscriptionName}
                >
                  <p>
                   {subscriptionName}
                  </p>
                </Sidebar.Item>
            ))}
        
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </>
 
  )
}


