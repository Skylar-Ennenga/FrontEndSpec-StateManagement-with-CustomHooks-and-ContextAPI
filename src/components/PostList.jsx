import React from 'react'
import { usePosts } from '../hooks/usePosts'

const PostList = () => {
    const {posts} = usePosts();

  return (
    <div>
      <ul>
        <li>{posts.id}</li>
        <li>{posts.title}</li>
        <li>{posts.body}</li>
        <li>{posts.userId}</li>

      </ul>
    </div>
  )
}

export default PostList
