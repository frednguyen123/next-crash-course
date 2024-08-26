import React from 'react';
import styles from "../styles/Navbar.module.css"
import Link from 'next/link';


const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <Link href="/">
                    <li>Home</li>
                </Link>
                <Link href="/posts">
                    <li>Posts</li>
                </Link>
                <Link href="/users">
                    <li>Users</li>
                </Link>
                <input placeholder='Search...' type="text" ></input>
            </ul>
        </nav>
    );
}

export default Navbar;
