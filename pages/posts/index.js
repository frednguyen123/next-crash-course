import Navbar from '@/components/Navbar';
import React, { useEffect, useState } from 'react';

export async function getServerSideProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return {
        props: {
            posts: data
        }
    }
}


const Posts = ({posts}) => {

    // const [posts, setPosts] = useState([])
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    //         const data = await res.json()
    //         setPosts(data)
    //         console.log(posts)
    //     }

    //     fetchData()
    // }, [])

    return (
        <>
            {/* <Navbar /> */}
            <h1>This is the Posts Page</h1>
            {posts?.map(post => {
                return <li key={post.id}>{post.title}</li>
            })}
        </>
    );
}

export default Posts;
