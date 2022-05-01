import Head from 'next/head'
import Link from 'next/link';
import React from 'react'
import Header from '../../components/Header'
import { Post } from '../../styles/typings';

interface Props {
    wilayah: [Post];
}

export default function index({wilayah}: Props) {
  return (
    <div className='max-w-7xl mx-auto'>
      <Head>
        <title>Rinaldi's</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className='flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-10'>
        <div className='px-10 space-y-5'>
            {wilayah.map(blog => (
                <Link href={'/sholat/' + blog.id} key={blog.id}>
                <a>
                    <h3 className='text-white-bg bg-green-600 px-4 py-1 rounded-full mt-4'>{blog.lokasi}</h3>
                </a>
                </Link>
            ))}
        </div>
        
        <div className='hidden md:inline-flex h-32 lg:h-full'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBEelmnv7lh5KotTcteNu15v5ixDDQVr3XTA&usqp=CAU" alt="" />
        </div>
      </div>

      {/* posts */}
      
    </div>
  )
}

export const getStaticProps = async () => {
    const res = await fetch('https://api.myquran.com/v1/sholat/kota/semua')
    const data = await res.json()
  
    return{
      props: {wilayah: data}
    }
}