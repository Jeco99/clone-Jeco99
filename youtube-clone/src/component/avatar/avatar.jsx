'use client';

import { Avatar } from 'flowbite-react';
import UserImage from '/src/assets/images/user-image.jpg'

export default function DefaultAvatar() {
  return (
    <div className="flex flex-wrap gap-2">
      <Avatar
        alt="Avatar of User"
        img={UserImage}
        rounded
      />
    </div>
  )
}