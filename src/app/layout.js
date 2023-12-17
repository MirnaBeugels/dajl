// This is the main layout in the root folder it wraps all pages, also those in subfolders & contains the HTML & BODY tags

// Import the needed components, modules & styles
import './global.css'
import styles from './styles.module.css'
import { Josefin_Sans } from 'next/font/google'
import React from 'react'
import SvgAnimation from './animation'

// Configure Google Fonts
const josefin = Josefin_Sans({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-josefin'
  })

export default function Denkaanjou({ children }) {

    return (
        <>

        <html lang="en" className={josefin.className}>
        <body>
        <section className={styles.backgroundContainer}>
            {/* Import the GSAP animation */}
            <SvgAnimation />
        </section>
        <section className={styles.contentContainer}>
            <section className={styles.content}>
                {children}
            </section>
        </section>
        </body>
        </html>
        </>
    )
};