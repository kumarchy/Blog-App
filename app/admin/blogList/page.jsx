'use client'
import React from 'react'

const page = () => {
  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
    <h1>All blogs</h1>
    <div className='relative h-[80vh]max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'></div>
    </div>
  )
}

export default page