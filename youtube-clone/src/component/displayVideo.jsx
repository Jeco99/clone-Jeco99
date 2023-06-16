"use client";
import { Card } from "flowbite-react";
import PillsTabs from "./carousel";

const cardItems = [
  {
      video: 'https://www.youtube.com/watch?v=9Ns8DztSfwo',
      title: 'SB19 \'ILAW\' Lyric Video',
      accountName: 'SB19 Official', 
      noOfViews: '335K views',
      numberofDays: '6 days ago'
  }, 
  {
      video: 'https://www.youtube.com/watch?v=9Ns8DztSfwo',
      title: 'SB19 \'ILAW\' Lyric Video',
      accountName: 'SB19 Official', 
      noOfViews: '335K views',
      numberofDays: '6 days ago'
  },
  {
    video: 'https://www.youtube.com/watch?v=9Ns8DztSfwo',
    title: 'SB19 \'ILAW\' Lyric Video',
    accountName: 'SB19 Official', 
    noOfViews: '335K views',
    numberofDays: '6 days ago'
  },
  {
    video: 'https://www.youtube.com/watch?v=9Ns8DztSfwo',
    title: 'SB19 \'ILAW\' Lyric Video',
    accountName: 'SB19 Official', 
    noOfViews: '335K views',
    numberofDays: '6 days ago'
  },
  {
    video: 'https://www.youtube.com/watch?v=9Ns8DztSfwo',
    title: 'SB19 \'ILAW\' Lyric Video',
    accountName: 'SB19 Official', 
    noOfViews: '335K views',
    numberofDays: '6 days ago'
  },
  {
    video: 'https://www.youtube.com/watch?v=9Ns8DztSfwo',
    title: 'SB19 \'ILAW\' Lyric Video',
    accountName: 'SB19 Official', 
    noOfViews: '335K views',
    numberofDays: '6 days ago'
  },
  {
    video: 'https://www.youtube.com/watch?v=9Ns8DztSfwo',
    title: 'SB19 \'ILAW\' Lyric Video',
    accountName: 'SB19 Official', 
    noOfViews: '335K views',
    numberofDays: '6 days ago'
  },
  {
    video: 'https://www.youtube.com/watch?v=9Ns8DztSfwo',
    title: 'SB19 \'ILAW\' Lyric Video',
    accountName: 'SB19 Official', 
    noOfViews: '335K views',
    numberofDays: '6 days ago'
  },
  {
    video: 'https://www.youtube.com/watch?v=9Ns8DztSfwo',
    title: 'SB19 \'ILAW\' Lyric Video',
    accountName: 'SB19 Official', 
    noOfViews: '335K views',
    numberofDays: '6 days ago'
  },
  {
    video: 'https://www.youtube.com/watch?v=9Ns8DztSfwo',
    title: 'SB19 \'ILAW\' Lyric Video',
    accountName: 'SB19 Official', 
    noOfViews: '335K views',
    numberofDays: '6 days ago'
  },
  {
    video: 'https://www.youtube.com/watch?v=9Ns8DztSfwo',
    title: 'SB19 \'ILAW\' Lyric Video',
    accountName: 'SB19 Official', 
    noOfViews: '335K views',
    numberofDays: '6 days ago'
  },
  {
    video: 'https://www.youtube.com/watch?v=9Ns8DztSfwo',
    title: 'SB19 \'ILAW\' Lyric Video',
    accountName: 'SB19 Official', 
    noOfViews: '335K views',
    numberofDays: '6 days ago'
  }
];


function DisplayVideo() {
  const videoWidth = '250'
  return (
    <>
        <PillsTabs />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cardItems.map( ({video, title, accountName, noOfViews, numberofDays}) => (
          <Card key={title}>
          <video controls width={videoWidth}>
            <source src={video} type="" />
          </video>
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            {title}
          </h5>
          <div>
            <p>{accountName}</p>
            <p>{noOfViews}</p>
            <p>{numberofDays}</p>
          </div>
        </Card>
        ))}

      </div>
    </>
  
  );
}

export default DisplayVideo;
