import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { MainLayout } from '../../components/MainLayout'
import { useRouter } from 'next/router'

const Post = ({ post: serverPost }) => {
    const router = useRouter()
    const [post, setPost] = useState(serverPost)

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4200/posts/${router.query.postId}`)
            const data = await response.json()
            setPost(data)
        }

        if (!serverPost) {
            load()
        }
    }, [])

    if (!post) {
        return <MainLayout>
            <p>Loading ...</p>
        </MainLayout>
    }

    return (
        <MainLayout>
            <h2>{post.title}</h2>
            <hr />
            <img src={post.picture} width="200" alt="logo" />
            <p>{post.body}</p>
            <Link href="/posts"><a>Back to all Posts</a></Link>
        </MainLayout>
    )
}

Post.getInitialProps = async (ctx) => {
    if (!ctx.req) {
        return { post: null }
    }
    const response = await fetch('http://localhost:4200/posts/' + ctx.query.postId)
    const post = await response.json()
    return {
        post
    }
}

export default Post