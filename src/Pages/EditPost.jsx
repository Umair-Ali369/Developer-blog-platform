import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { PostsContext } from '../Context/PostsContext'
import MotionWrapper from '../Animation/MotionWrapper'

const EditPost = () => {
  const { id } = useParams()
  const { localPosts, editPost } = useContext(PostsContext)
  const navigate = useNavigate()

  const post = localPosts.find((p) => p.id === Number(id))

  const [formData, setFormData] = useState({
    title : "",
    body : ""
  })

  useEffect(() => {
    if(post) {
      setFormData({
        title : post.title,
        body : post.body
      })
    }
  },[post])

  const handleSubmit = (e) => {
    e.preventDefault()

    editPost(post.id, formData)
    navigate('/admin')
  }
  return (
    <MotionWrapper  className='bg-white dark:bg-gray-700'>


      <div className='max-w-4xl mx-auto px-4 pb-8 pt-24 h-screen'>

      <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-900 shadow-md p-6 rounded-lg mb-10 border "
        >
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            Edit Post
          </h2>

          <input
            type="text"
            placeholder="Post title...."
            value={formData.title}
            className="w-full p-4 mb-4 border rounded dark:bg-gray-800 dark:text-white"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />

          <textarea
            placeholder="Post Content..."
            rows={5}
            value={formData.body}
            className="w-full p-4 mb-4 border rounded dark:bg-gray-800 dark:text-white"
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          ></textarea>

         <div className="flex gap-4">
                  <button type='submit' className="px-3 py-1 bg-green-600 text-white rounded"> Update </button>
                  <Link to={`/admin`} className="px-3 py-1 bg-gray-400 hover:bg-gray-500 text-white rounded">Cancel</Link>
          </div>
        </form>
      </div>


    </MotionWrapper>
  )
}

export default EditPost