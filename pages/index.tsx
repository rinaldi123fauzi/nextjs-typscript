import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Head>
        <title>Rinaldi's</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className='flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-10'>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif'> <span className='underline decoration-black decoration-4'>Medium</span> is place awesome</h1>
          <h2 className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, placeat, perferendis error sunt itaque pariatur commodi repellendus eos fugiat aliquam veritatis. Accusamus mollitia illo assumenda labore molestias vel modi error!</h2>
        </div>
        
        <div className='hidden md:inline-flex h-32 lg:h-full'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBEelmnv7lh5KotTcteNu15v5ixDDQVr3XTA&usqp=CAU" alt="" />
        </div>
      </div>

      {/* posts */}
      
    </div>
  )
}

export default Home
