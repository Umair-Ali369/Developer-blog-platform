import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const PostsContext = createContext()

export const PostsProvider = ({children}) => {
    // fake api posts 
    const [apiPosts, setApiPosts] = useState([])
    // local CRUD posts
    const [localPosts, setLocalPosts] = useState(() => {
        const saved = localStorage.getItem('local-Posts')
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem('local-Posts', JSON.stringify(localPosts))
    },[localPosts])

    const fetchFakePosts = async () => {
        const res = await axios.get('https://dummyjson.com/posts')
        setApiPosts(res.data.posts) 
    }

    useEffect(() => {
       fetchFakePosts()
    },[])

    // CRUD functions
    const createPost = (post) => {
        const newPost =  {
            id : Date.now(),
            ...post,
            date : new Date().toLocaleDateString()
        };

        setLocalPosts([newPost, ...localPosts])
    }

    const editPost = (id, updatePost) => {
        setLocalPosts(
            localPosts.map((p) => (p.id === id ? {...p, ...updatePost} : p))
        )
    }

    const deletePost = (id) => {
        setLocalPosts(localPosts.filter((p) => p.id !== id))
    }

  return (
    <PostsContext.Provider value={{apiPosts, localPosts, createPost, editPost, deletePost}}>
        {children}
    </PostsContext.Provider>
  )
}

