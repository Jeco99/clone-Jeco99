"use client";
import { Card } from "flowbite-react";
import SimpleTabs from "../tabs/tab";
import videoData from "./videoData";

function DisplayVideo() {
  return (
    <>
        <SimpleTabs />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-5">
        {videoData.map( ({video, title, accountName, noOfViews, numberofDays}) => (
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
