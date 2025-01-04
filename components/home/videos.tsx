'use client'

import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { PlayCircleIcon } from 'lucide-react';

interface VideoItem {
  id: number;
  locale: string;
  name: string;
  video: string;
  image: string;
  created_at: string;
  updated_at: string;
}

export default function Videos({ data }: { data: VideoItem[] }) {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const handleVideoClick = (id: number) => {
    if (playingVideo === id) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(id);
    }
  };

  return (
    <div className="container lg:max-w-[85vw] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 w-full gap-4 px-4 md:px-0">
        {data.map((item) => (
          <div key={item.id}>
            <Card className="bg-[#F5F7F9] rounded-xl border-none text-center shadow-none w-full">
              <CardHeader className="rounded-xl overflow-hidden p-2 relative">
                {playingVideo === item.id ? (
                  <video
                    src={item.video}
                    controls
                    autoPlay
                    className="w-full h-56 rounded-xl object-cover"
                    onEnded={() => setPlayingVideo(null)}
                  />
                ) : (
                  <div 
                    className="relative cursor-pointer" 
                    onClick={() => handleVideoClick(item.id)}
                  >
                    <Image
                      src={item.image}
                      width={400}
                      height={400}
                      className="w-full h-56 rounded-xl object-cover"
                      alt={item.name}
                    />
                    <PlayCircleIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-20 text-white" />
                  </div>
                )}
              </CardHeader>
              <CardContent className="p-0 py-3">
                <span className="text-3xl text-primary">{item.name}</span>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

