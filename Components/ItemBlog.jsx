import { assets, blog_data } from '@/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ItemBlog = ({image,title,description,category,id}) => {
  return (
  <div className="w-[300px] flex-shrink-0 bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]">    <Link href={`/blog/${id}`}>
    <Image src={image} alt='' width={400} height={400} className='border-b border-black'/>
    </Link>
    <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
    <div className='p-5'>
     <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
    <p className='mb-3 text-sm tracking-tight
      text-gray-700' dangerouslySetInnerHTML={{__html:description.slice(0,120)}}></p>
    <Link href={`/blog/${id}`}>
    <div className='inline-flex items-center py-2 font-semibold text-center'>
    Read more <Image src={assets.arrow} alt='' width={12} className='ml-2'/>
    </div>
    </Link>
    </div>
    </div>
  )
}

export default ItemBlog;