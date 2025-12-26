import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PostsContext } from '../Context/PostsContext'
import { number } from 'framer-motion'
import Navbar from '../Components/Navbar'
import MotionWrapper from '../Animation/MotionWrapper'

const SinglePost = () => {
  const { id } = useParams()
  const { apiPosts, localPosts } = useContext(PostsContext)

  // Find from local first
  let post = localPosts.find((p) => p.id === Number(id))

  // If not found, then api posts
  if(!post) {
    post = apiPosts.find((p) => p.id === Number(id))
  }
  return (
    <MotionWrapper className='bg-white dark:bg-gray-700 h-screen'>

         <div className='max-w-4xl mx-auto px-4 pb-8 pt-24'>
        {post ? (
          <div>
            <h1 className='text-3xl dark:text-white font-bold mb-4'> 
              {post.title} 
            </h1>
            <p className='text-gray-500 mb-2'> 
              {post.date ? post.date : ""} 
            </p>
            <p className='text-lg leading-7 dark:text-gray-300 text-gray-600'>
              {post.body}
            </p>

            <Link to='/' className='inline-block mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md'> Back to Home </Link>
          </div>
        ) : (
          <p> Post Not found </p>
        )}
      </div>
    </MotionWrapper>
  )
}

export default SinglePost