// This is a client component because it uses Client Side Rendering
'use client'

// Import the needed components, modules & styles
import styles from './styles.module.css';
import { useRef, useLayoutEffect, useState } from 'react'
import { gsap } from 'gsap'

// The SvgAnimation component
const SvgAnimation = () => {

    // Declare 3 constants for the 3 circles in the illustration ro reference with
    const blueCircle = useRef();
    const pinkCircle = useRef();
    const purpleCircle = useRef();

    const imageWidth = 400; // Set the width of your images

    const [initialPositions, setInitialPositions] = useState({});

    // With a useLayoutEffect we can make our animation
    useLayoutEffect(() => {

        const calculatePosition = (offsetX, offsetY) => {
            const vw = window.innerWidth / 100;
            const vh = window.innerHeight / 100;
            const x = offsetX * vw - imageWidth / 2;
            const y = offsetY * vh - imageWidth / 2;
            return { x, y };
          };
      
        setInitialPositions({
            blueCircle: calculatePosition(0, 0),
            pinkCircle: calculatePosition(100, 50),
            purpleCircle: calculatePosition(0, 100),
        });
        
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
            autoAlpha:1,
        })
        
        // Then the blue circle moves 0vw to horizontally and 80vh down from its previous position in 10 seconds
        blueCircleTl.to(blueCircle.current, {
            rotation: 0, 
            x: '0vw',
            y: '80vh',
            duration: 10,
            autoAlpha:1
        });
        
        // Then the blue circle moves 20vw to the right and 0vh down from its previous position in 8 seconds
        blueCircleTl.to(blueCircle.current, {
            rotation: 0, 
            x: '20vw',
            y: '0vh',
            duration: 8,
            autoAlpha:1,
        });
        
        // Lastly the blue circle moves back to its starting point, so when the timeline keeps repeating it starts again in the right place
        blueCircleTl.to(blueCircle.current, {
            rotation: 0, 
            x: '0vw',
            y: '0vh',
            duration: 10,
            autoAlpha:1,
        });

        // The pink circle (to know how it works, check the comments for the blue circle)
        pinkCircleTl.to(pinkCircle.current, {
            rotation: 0, 
            x: '-100vw',
            y: '-20vh',
            duration: 8,
            autoAlpha:1,
        })

        pinkCircleTl.to(pinkCircle.current, {
            rotation: 0, 
            x: '-0vw',
            y: '-40vh',
            duration: 10,
            autoAlpha:1,
        })

        pinkCircleTl.to(pinkCircle.current, {
            rotation: 0, 
            x: '0vw',
            y: '50vh',
            duration: 8,
            autoAlpha:1,
        })

        pinkCircleTl.to(pinkCircle.current, {
            rotation: 0, 
            x: '0vw',
            y: '0vh',
            duration: 10,
            autoAlpha:1,
        })

        // The purple circle (to know how it works, check the comments for the blue circle)
        purpleCircleTl.to(purpleCircle.current, {
            rotation: 0, 
            x: '100vw',
            y: '0vh',
            duration: 10,
            autoAlpha:1,
        })

        purpleCircleTl.to(purpleCircle.current, {
            rotation: 0, 
            x: '80vw',
            y: '0vh',
            duration: 8,
            autoAlpha:1,
        })

        purpleCircleTl.to(purpleCircle.current, {
            rotation: 0, 
            x: '0vw',
            y: '0vh',
            duration: 8,
            autoAlpha:1,
        })

        purpleCircleTl.to(purpleCircle.current, {
            rotation: 0, 
            x: '0vw',
            y: '0vh',
            duration: 10,
            autoAlpha:1,
        })
        
        return () => { 
        // Cleanup code (optional)
        }
    }, []);
    
    // Return the visible part of the component, the illustration
    return (

        <svg xmlns="http://www.w3.org/2000/svg" width="100vw" height="100vh" fill="none">
            <image
                href="/blue-circle.png"
                x={initialPositions.blueCircle?.x}
                y={initialPositions.blueCircle?.y}
                width={`${imageWidth}px`}
                height={`${imageWidth}px`}
                ref={blueCircle}
                className={styles.circles}
            />
            <image 
                href="/pink-circle.png"
                x={initialPositions.pinkCircle?.x}
                y={initialPositions.pinkCircle?.y}
                width={`${imageWidth}px`}
                height={`${imageWidth}px`}
                ref={pinkCircle}
                className={styles.circles}
            />
            <image 
                href="/purple-circle.png"
                x={initialPositions.purpleCircle?.x}
                y={initialPositions.purpleCircle?.y}
                width={`${imageWidth}px`}
                height={`${imageWidth}px`}
                ref={purpleCircle}
                className={styles.circles}
            />
        </svg>

    );

};

export default SvgAnimation;

