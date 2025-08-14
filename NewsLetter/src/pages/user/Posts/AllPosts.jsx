import React, { useEffect, useState } from 'react'
import { usePosts } from '../../../context/PostsContext'
import PostCard from '../../../components/PostCard'

const AllPosts = () => {
    // const [posts, ] = useState
    // useEffect(() => {
    //     const { posts } = usePosts()
    // }, [])
    const { posts } = usePosts()
    
    return(
        <section className="py-12 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
                    All Posts
                </h2>

                <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post,idx) => (
                        <PostCard key={post.id} post={post} index={idx} />
                    ))}
                </div>
            </div>
        </section>

    )
}

export default AllPosts