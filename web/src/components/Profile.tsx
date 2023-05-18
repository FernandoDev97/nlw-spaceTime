import { getUser } from '@/lib/auth'
import Image from 'next/image'
import React from 'react'

export const Profile = () => {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left transition-colors hover:text-gray-50">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
        <Image
          src={avatarUrl}
          width={40}
          height={40}
          alt=""
          className="h-10 w-10 rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <p className="max-w-[140px] text-sm leading-snug">{name}</p>
        <a href="" className="block text-red-400 hover:text-red-300">
          Sair
        </a>
      </div>
    </div>
  )
}
