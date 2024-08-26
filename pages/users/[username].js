import { useRouter } from 'next/router';
import React from 'react';

const User = () => {
    const router = useRouter()
    console.log(router.query)
    const {username} = router.query
    return (
        <h1>This is user: {username}</h1>
    );
}

export default User;
