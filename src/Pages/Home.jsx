import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { PostsContext } from '../Context/PostsContext'
import PostCard from '../Components/PostCard'
import MotionWrapper from '../Animation/MotionWrapper'

const Home = () => {
  
  const { apiPosts, localPosts } = useContext(PostsContext)
  const [search, setSearch] = useState('')
  // const [apiPosts, setApiPosts] = useState([])

  //Merge local & api posts
  const allPosts = [...apiPosts, ...localPosts]
   
  // // Filter Posts
  const filteredPosts = allPosts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <MotionWrapper >
      <main className='bg-white dark:bg-gray-700 '>

         <section className='max-w-5xl mx-auto px-4 pb-8 pt-24'>
        <h1 className='text-3xl font-bold dark:text-white mb-6'>
          Latest Posts
        </h1>
        {/* SEARCH */} 
        <input 
        type="text"
        placeholder='Search Posts...'
        value={search}
        className='w-full p-3 mb-6 rounded-md border dark:bg-gray-800 dark:border-gray-700 dark:text-white'
        onChange={(e) => setSearch(e.target.value)}
        />

        {/* POSTS GRID */}
        {/* <div className='grid md:grid-cols-3 gap-6'>
          {allPosts.map((post) => (
             <PostCard post={post} key={post.id}/>
          ))}
        </div> */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))
          ) : (
            <p className="dark:text-white">No posts found.</p>
          )}
        </div>
        
      </section>
      </main>

    
    </MotionWrapper>
  )
}

export default Home