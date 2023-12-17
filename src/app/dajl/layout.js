'use client'

import styles from '../styles.module.css'
import { Josefin_Sans } from 'next/font/google'
import SignOut from './signout'
import CheckUser from './checkuser'

const josefin = Josefin_Sans({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })

export default function Denkaanjou({ children }) {

    return (
        <>
            <CheckUser />
            <SignOut />
            <section className={styles.page}>
                {children}
            </section>
        </>
    )
};