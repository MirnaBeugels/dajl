'use client'

import './global.css'
import styles from './styles.module.css'
import Link from "next/link"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'

export default function Denkaanjou({ children }) {

    const blueCircle = useRef();
    const pinkCircle = useRef();
    const purpleCircle = useRef();

    useLayoutEffect(() => {
        
        console.log(blueCircle)
        
        var blueCircleTl = gsap.timeline({repeat: -1})
        var pinkCircleTl = gsap.timeline({repeat: -1})
        var purpleCircleTl = gsap.timeline({repeat: -1})
        
        blueCircleTl.to(blueCircle.current, {
            rotation: 0, 
            x: '100vw',
            y: '20vh',
            duration: 8,
        })
        
        blueCircleTl.to(blueCircle.current, {
            rotation: 0, 
            x: '0vw',
            y: '80vh',
            duration: 10,
        });
        
        blueCircleTl.to(blueCircle.current, {
            rotation: 0, 
            x: '20vw',
            y: '0vh',
            duration: 8,
        });
        
        blueCircleTl.to(blueCircle.current, {
            rotation: 0, 
            x: '0vw',
            y: '0vh',
            duration: 10,
        });

        pinkCircleTl.to(pinkCircle.current, {
            rotation: 0, 
            x: '-80vw',
            y: '-20vh',
            duration: 8,
        })

        pinkCircleTl.to(pinkCircle.current, {
            rotation: 0, 
            x: '-20vw',
            y: '-40vh',
            duration: 10,
        })

        pinkCircleTl.to(pinkCircle.current, {
            rotation: 0, 
            x: '0vw',
            y: '50vh',
            duration: 8,
        })

        pinkCircleTl.to(pinkCircle.current, {
            rotation: 0, 
            x: '0vw',
            y: '0vh',
            duration: 10,
        })

        purpleCircleTl.to(purpleCircle.current, {
            rotation: 0, 
            x: '100vw',
            y: '0vh',
            duration: 10,
        })

        purpleCircleTl.to(purpleCircle.current, {
            rotation: 0, 
            x: '80vw',
            y: '0vh',
            duration: 8,
        })

        purpleCircleTl.to(purpleCircle.current, {
            rotation: 0, 
            x: '0vw',
            y: '0vh',
            duration: 8,
        })

        purpleCircleTl.to(purpleCircle.current, {
            rotation: 0, 
            x: '0vw',
            y: '0vh',
            duration: 10,
        })
        
        return () => { 
        // Cleanup code (optional)
        }
    }, []);

    return (
        <html lang="en">
        <body className={styles.body}>
        <section className={styles.background}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100vw" height="100vh" fill="none">
            <g filter="url(#blue)">
                <circle cx="0vw" cy="0vh" r="125" fill="#106285" ref={blueCircle}/>
            </g>
            <g filter="url(#pink)">
                <circle cx="100vw" cy="50vh" r="125" fill="#891184" ref={pinkCircle}/>
            </g>
            <g filter="url(#purple)">
                <circle cx="0vw" cy="100vh" r="125" fill="#5B1189" ref={purpleCircle}/>
            </g>
            <defs>
                <filter id="blue" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur result="effect1_foregroundBlur_60_2259" stdDeviation="50"/>
                </filter>
                <filter id="pink" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur result="effect1_foregroundBlur_60_2259" stdDeviation="50"/>
                </filter>
                <filter id="purple"colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur result="effect1_foregroundBlur_60_2259" stdDeviation="50"/>
                </filter>
            </defs>
        </svg>
        
        </section>
        <section className={styles.contentContainer}>
            <section className={styles.content}>
                <nav className={styles.logout}><Link href="/">Uitloggen</Link> <FontAwesomeIcon icon={faArrowRightFromBracket} className={styles.icon} /></nav>
                {children}
            </section>
        </section>
        </body>
        </html>
    )
}