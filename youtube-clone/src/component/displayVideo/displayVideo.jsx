"use client";
import { Card } from "flowbite-react";
import SimpleTabs from "../tabs/tab";
// import videoData from "./videoData";
import videoData from './videoAPI';

function DisplayVideo() {
  return (
    <>
        <SimpleTabs />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-5">
        {videoData.map( ({ snippet }) => (
          <Card key={`${snippet.channelId}`}>
          <img src={snippet.thumbnails.default.url} alt={snippet.liveBroadcastContent} height={snippet.thumbnails.high.height} width={snippet.thumbnails.high.width}/>
          <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            {snippet.title}
          </h5>
          <div>
            <p>{snippet.channelTitle}</p>
          </div>
        </Card>
        ))}

      </div>
    </>
  
  );
}

export default DisplayVideo;
