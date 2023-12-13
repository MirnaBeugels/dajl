// This is a client component because it uses Client Side Rendering
'use client'

// Import the needed components, modules & styles
import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'

// The SvgAnimation component
const SvgAnimation = () => {

    // Declare 3 constants for the 3 circles in the illustration ro reference with
    const blueCircle = useRef();
    const pinkCircle = useRef();
    const purpleCircle = useRef();

    // With a useLayoutEffect we can make our animation
    useLayoutEffect(() => {
        
        // Create a GSAP timeline for each circle
        var blueCircleTl = gsap.timeline({repeat: -1})
        var pinkCircleTl = gsap.timeline({repeat: -1})
        var purpleCircleTl = gsap.timeline({repeat: -1})

        // The blue circle moves 100vw to the right and 20vh down from it's starting position in 8 seconds
        blueCircleTl.to(blueCircle.current, {
            rotation: 0, 
            x: '100vw',
            y: '20vh',
            duration: 8,
        })
        
        // Then the blue circle moves 0vw to horizontally and 80vh down from its previous position in 10 seconds
        blueCircleTl.to(blueCircle.current, {
            rotation: 0, 
            x: '0vw',
            y: '80vh',
            duration: 10,
        });
        
        // Then the blue circle moves 20vw to the right and 0vh down from its previous position in 8 seconds
        blueCircleTl.to(blueCircle.current, {
            rotation: 0, 
            x: '20vw',
            y: '0vh',
            duration: 8,
        });
        
        // Lastly the blue circle moves back to its starting point, so when the timeline keeps repeating it starts again in the right place
        blueCircleTl.to(blueCircle.current, {
            rotation: 0, 
            x: '0vw',
            y: '0vh',
            duration: 10,
        });

        // The pink circle (to know how it works, check the comments for the blue circle)
        pinkCircleTl.to(pinkCircle.current, {
            rotation: 0, 
            x: '-100vw',
            y: '-20vh',
            duration: 8,
        })

        pinkCircleTl.to(pinkCircle.current, {
            rotation: 0, 
            x: '-0vw',
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

        // The purple circle (to know how it works, check the comments for the blue circle)
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
    
    // Return the visible part of the component, the illustration
    return (

        <svg xmlns="http://www.w3.org/2000/svg" width="100vw" height="100vh" fill="none">
        <g filter="url(#blue)">
            {/* The blue circle */}
            <circle cx="0vw" cy="0vh" r="125" fill="#106285" ref={blueCircle}/>
        </g>
        <g filter="url(#pink)">
            {/* The pink circle */}
            <circle cx="100vw" cy="50vh" r="125" fill="#891184" ref={pinkCircle}/>
        </g>
        <g filter="url(#purple)">
            {/* The purple circle */}
            <circle cx="0vw" cy="100vh" r="125" fill="#5B1189" ref={purpleCircle}/>
        </g>
        <defs>
            {/* The filters to create the blurred edges on the circles */}
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

    );

};

export default SvgAnimation;

