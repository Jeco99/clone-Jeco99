"use client";
import { Card } from "flowbite-react";
import PillsTabs from "./carousel";

import thumbNail from '../assets/images/lightboxexample1.png'

const cardItems = [
  {
      video:  thumbNail,
      title: 'SB19 \'ILAW\' Lyric Video',
      accountName: 'SB19 Official', 
      noOfViews: '335K views',
      numberofDays: '6 days ago'
  }, 
  {
    video:  thumbNail,
      title: 'SB19 \'ILAW\' Lyric Video',
      accountName: 'SB19 Official', 
      noOfViews: '335K views',
      numberofDays: '6 days ago'
  },
  {
    video:  thumbNail,
    title: 'SB19 \'ILAW\' Lyric Video',
    accountName: 'SB19 Official', 
    noOfViews: '335K views',
    numberofDays: '6 days ago'
  },
  {
    video:  thumbNail,
    title: 'SB19 \'ILAW\' Lyric Video',
    accountName: 'SB19 Official', 
    noOfViews: '335K views',
    numberofDays: '6 days ago'
  },
  {
    video:  thumbNail,
    title: 'SB19 \'ILAW\' Lyric Video',
    accountName: 'SB19 Official', 
    noOfViews: '335K views',
    numberofDays: '6 days ago'
  },
  {
    video:  thumbNail,
    title: 'SB19 \'ILAW\' Lyric Video',
    accountName: 'SB19 Official', 
    noOfViews: '335K views',
    numberofDays: '6 days ago'
  },
  {
    video:  thumbNail,
    title: 'SB19 \'ILAW\' Lyric Video',
    accountName: 'SB19 Official', 
    noOfViews: '335K views',
    numberofDays: '6 days ago'
  },
  {
    video:  thumbNail,
    title: 'SB19 \'ILAW\' Lyric Video',
    accountName: 'SB19 Official', 
    noOfViews: '335K views',
    numberofDays: '6 days ago'
  },
  {
    video:  thumbNail,
    title: 'SB19 \'ILAW\' Lyric Video',
    accountName: 'SB19 Official', 
    noOfViews: '335K views',
    numberofDays: '6 days ago'
  },
  {
    video:  thumbNail,
    title: 'SB19 \'ILAW\' Lyric Video',
    accountName: 'SB19 Official', 
    noOfViews: '335K views',
    numberofDays: '6 days ago'
  },
  {
    video:  thumbNail,
    title: 'SB19 \'ILAW\' Lyric Video',
    accountName: 'SB19 Official', 
    noOfViews: '335K views',
    numberofDays: '6 days ago'
  },
  {
    video:  thumbNail,
    title: 'SB19 \'ILAW\' Lyric Video',
    accountName: 'SB19 Official', 
    noOfViews: '335K views',
    numberofDays: '6 days ago'
  }
];


function DisplayVideo() {
  

  return (
    <>
        <PillsTabs />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-5">
        {cardItems.map( ({video, title, accountName, noOfViews, numberofDays}) => (
          <Card key={title}>
          <img src={video} alt={title} />
          <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h5>
          <div>
            <p>{accountName}</p>
            <p>{noOfViews} &#x2022; {numberofDays}</p>
          </div>
        </Card>
        ))}

      </div>
    </>
  
  );
}

export default DisplayVideo;
