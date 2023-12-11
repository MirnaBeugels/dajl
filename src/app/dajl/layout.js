'use client'

import styles from '../styles.module.css'
import { Josefin_Sans } from 'next/font/google'
import SignOut from './signout'

const josefin = Josefin_Sans({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })

export default function Denkaanjou({ children }) {

    return (
        <>
            <SignOut />
            <section className={styles.page}>
                {children}
            </section>
        </>
    )
};