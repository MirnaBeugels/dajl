import './global.css'
import styles from './styles.module.css'
import { Josefin_Sans } from 'next/font/google'
import React from 'react'
import SvgAnimation from './animation'

const josefin = Josefin_Sans({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })

export default function Denkaanjou({ children }) {

    return (
        <html lang="en" className={josefin.className}>
        <body>
        <section className={styles.backgroundContainer}>
            <SvgAnimation />
        </section>
        <section className={styles.contentContainer}>
            <section className={styles.content}>
                {children}
            </section>
        </section>
        </body>
        </html>
    )
};