import styles from './styles.module.css'
import Link from "next/link"

export default function Denkaanjou({ children }) {
    return (
        <html lang="en">
        <body className={styles.body}>
        <section className={styles.background}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100vw" height="100vh" fill="none">
            <g filter="url(#blue)">
                <circle cx="0vw" cy="0vh" r="125" fill="#106285"/>
            </g>
            <g filter="url(#pink)">
                <circle cx="100vw" cy="50vh" r="125" fill="#891184"/>
            </g>
            <g filter="url(#purple)">
                <circle cx="0vw" cy="100vh" r="125" fill="#5B1189"/>
            </g>
            <defs>
                <filter id="blue" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur result="effect1_foregroundBlur_60_2259" stdDeviation="50"/>
                </filter>
                <filter id="pink" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur result="effect1_foregroundBlur_60_2259" stdDeviation="50"/>
                </filter>
                <filter id="purple"color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur result="effect1_foregroundBlur_60_2259" stdDeviation="50"/>
                </filter>
            </defs>
        </svg>
        </section>
        <section className={styles.contentContainer}>
            <section className={styles.content}>
                <nav>Hier komt de <Link href="/">uitlog</Link> functie</nav>
                {children}
            </section>
        </section>
        </body>
        </html>
    )
}