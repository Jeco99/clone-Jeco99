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
            {subscriptionsData.map( ( {icons, name}, index ) => (
                  <Sidebar.Item
                  href={`/${name}`}
                  icon={icons}
                  key={`${index}_${name}`}
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


