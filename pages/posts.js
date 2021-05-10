import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { MainLayout } from '../components/MainLayout'

const Posts = ({ posts: serverPosts }) => {

    const [posts, setPosts] = useState(serverPosts)

    useEffect(() => {
        const load = async () => {
            const response = await fetch('http://localhost:4200/posts')
            const data = await response.json()
            setPosts(data)
        }
        if (!serverPosts) {
            load()
        }
    }, [])
    if (!posts) {
        return <MainLayout>
            <p>Loading ...</p>
        </MainLayout>
    }

    return (
        <MainLayout title={'Posts Page'}>
            <h1>Posts-Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <div>

                {/* <pre>
                    {JSON.stringify(props.posts, null, 2)}
                </pre> */}
                <ul>
                    {
                        posts.map(post => {
                            return (
                                <li key={post.id}>
                                    <Link href={`/post/[id]`} as={`/post/${post.id}`}><a>{post.title}</a></Link>
                                </li>
                            )
                        })

                    }
                </ul>

            </div>
        </MainLayout>
    )
}

Posts.getInitialProps = async ({ req }) => {
    if (!req) {
        return { posts: null }
    }
    const response = await fetch('http://localhost:4200/posts')
    const posts = await response.json()
    return {
        posts
    }
}

// export async function getServerSideProps({ req }) {
//     // if (!req) {
//     //     return { posts: null }
//     // }                                                        Лишнее т.к эта функция вызывается 
//     //                                                          исключительно на Серверной стороне 
//     const response = await fetch('http://localhost:4200/posts')
//     const posts = await response.json()
//     return {
//         props: { posts }
//     }
// }

export default Posts