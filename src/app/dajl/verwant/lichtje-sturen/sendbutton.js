import styles from './styles.module.css'

const VerstuurKnop = () => {

    return (
        
      <svg xmlns="http://www.w3.org/2000/svg" width="280" height="225" fill="none">
        <g filter="url(#filterOuterstroke)">
          <circle className={styles.buttonOutlineCircleFill} cx="139.5" cy="112.5" r="112.5" fill="none"/>
          <circle className={styles.buttonOutlineCircleStroke} cx="139.5" cy="112.5" r="112" stroke="url(#outerStroke)"/>
        </g>
        <g filter="url(#filterMainCircle)">
          <circle className={styles.buttonMainCircleFill} cx="139.5" cy="112.5" r="107.5" fill="url(#mainCircleFill)"/>
          <circle className={styles.buttonMainCircleStroke} cx="139.5" cy="112.5" r="107" stroke="url(#mainCircleStroke)"/>
        </g>
        <g filter="url(#filterTopHighlight)">
          <path className={styles.buttonTopHighlight} fill="url(#topHightlightFill)" d="M217 46.5C166.1-11.3 91.5 13.5 69.5 39c-52.3 51.9-25.3 103.8-9 83.5 16.3-20.3 139.7 36 165 6.5 27-31.5 3.5-68.9-8.5-82.5Z"/>
        </g>
        <g filter="url(#filterBottomLowlight)">
          <path className={styles.buttonBottomLowlight} fill="url(#bottomLowlightFill)" d="M63 180.3c50.8 57.7 124.2 30 147.5 7.4 52.2-51.8 25.3-103.7 9-83.4-16.3 20.2-139.7-36-165-6.5-27 31.5-3.5 68.8 8.5 82.5Z"/>
        </g>
        
        <ellipse className={styles.buttonHighlight} cx="163.5" cy="40" fill="url(#hightlightFill)" rx="40.5" ry="16" transform="rotate(18 163.5 40)"/>
        <path fill="#111315" d="M58.4 104.3H62v14.3h8.3v3.4H58.4v-17.7Zm14.8 7.2h3.4V122h-3.4v-10.5Zm0-3.7c0-.5.2-1 .5-1.2a2 2 0 0 1 1.3-.5c.5 0 .9.1 1.2.5.4.3.6.7.6 1.2s-.2.9-.6 1.2c-.3.3-.7.5-1.2.5a2 2 0 0 1-1.3-.5c-.3-.3-.5-.7-.5-1.2ZM89 121l-1.8.9-2 .3c-1.2 0-2.3-.2-3.2-.7a5 5 0 0 1-2-1.9 6 6 0 0 1-.8-3 5.2 5.2 0 0 1 2.9-4.9 6 6 0 0 1 2.7-.6c1 0 1.8.2 2.5.4a6 6 0 0 1 1.8 1l-1.7 2.2-1-.6a3 3 0 0 0-1.3-.2c-.4 0-.9 0-1.3.3l-.9 1a3 3 0 0 0-.3 1.4 2.9 2.9 0 0 0 1.3 2.5c.5.2 1 .4 1.6.4l1-.2.8-.4 1.7 2Zm2.5.9v-19h3.3v10.6-.4c.4-.6.9-1.2 1.6-1.6.6-.4 1.5-.6 2.4-.6 1 0 1.8.3 2.5.9.7.6 1 1.3 1 2.3v7.8H99v-6.6c0-.5-.2-.8-.4-1.1-.2-.3-.6-.4-1.2-.4a2 2 0 0 0-1.3.5c-.4.3-.7.8-.9 1.3-.2.6-.3 1.3-.3 2v4.3h-3.4Zm15.3-15.1h3.3v4.6h2.6v2.6H110v7.9h-3.3v-8H105v-2.5h1.7v-4.6Zm9.1 20.2-2-2.1c.6-.4 1-.8 1.2-1.3a4 4 0 0 0 .4-1.9v-10.3h3.4V122c0 1.2-.3 2.3-.7 3.1-.5.8-1.2 1.5-2.3 2Zm-.5-19.3c0-.5.2-1 .6-1.2a2 2 0 0 1 1.2-.5c.5 0 .9.1 1.2.5.4.3.6.7.6 1.2s-.2.9-.6 1.2c-.3.3-.7.5-1.2.5a2 2 0 0 1-1.2-.5c-.4-.3-.6-.7-.6-1.2Zm12 14.5c-1.2 0-2.3-.3-3.2-.7a5 5 0 0 1-2-2 6 6 0 0 1 .1-5.8c.6-.9 1.3-1.5 2.2-2 1-.5 2-.8 3-.8 1.5 0 2.8.4 3.7 1.3 1 .9 1.6 2.1 2 3.8l-8.2 2.6-.8-1.8 6-2-.8.3c0-.4-.3-.8-.7-1.1-.3-.3-.8-.5-1.4-.5-.5 0-1 .1-1.3.4-.4.2-.7.5-1 1l-.2 1.5c0 .6.1 1.2.4 1.6.2.4.5.8 1 1a3 3 0 0 0 2.4.1c.3 0 .7-.3 1-.5l1.5 2.5a8.4 8.4 0 0 1-3.6 1Zm19.4 0c-.9 0-1.7-.2-2.4-.5-.8-.3-1.4-.8-2-1.3l1.5-1.9c.5.5 1 .8 1.4 1a3.1 3.1 0 0 0 2 .3l.4-.3c.2-.1.2-.3.2-.5 0-.3 0-.5-.3-.6l-.8-.4-1-.3a4 4 0 0 1-2.2-1.4 3.3 3.3 0 0 1-.2-3.5c.3-.5.7-1 1.3-1.3.7-.4 1.5-.6 2.4-.6 1 0 1.7.1 2.3.3.6.2 1.2.5 1.7.9l-1.3 2-1-.7-1-.3-.8.1-.4.3-.2.5c0 .3.1.5.3.7l1 .4c.4 0 .8.2 1.1.3.5.2 1 .4 1.3.7.4.2.7.6.9 1 .2.3.3.8.3 1.3a3.6 3.6 0 0 1-2 3.2c-.6.3-1.5.5-2.5.5Zm8.3-15.4h3.4v4.6h2.5v2.6h-2.5v7.9H155v-8h-1.6v-2.5h1.6v-4.6Zm11.8 15.6c-.9 0-1.7-.3-2.3-.9-.7-.6-1-1.3-1-2.2v-7.9h3.3v6.6c0 .5.2.9.4 1.1.2.3.5.4 1 .4s1-.1 1.3-.5c.4-.3.7-.7.8-1.3a6 6 0 0 0 .4-2v-4.3h3.3V122h-3l-.3-2v.3c-.2.4-.5.8-.9 1.1-.3.4-.8.6-1.3.8-.5.2-1 .3-1.7.3Zm13.7-11 .3 2.9v-.4c.2-.7.7-1.2 1.2-1.6.5-.5 1-.8 1.5-1l1.2-.4-.1 3.3a3 3 0 0 0-2 .4 3.8 3.8 0 0 0-1.8 3.2v4.1h-3.3v-10.5h3Zm11.5 10.8c-1.3 0-2.4-.3-3.3-.7a5 5 0 0 1-2-2 6 6 0 0 1 .2-5.8c.5-.9 1.2-1.5 2.1-2 1-.5 2-.8 3-.8 1.6 0 2.8.4 3.8 1.3s1.6 2.1 1.9 3.8l-8.2 2.6-.7-1.8 5.9-2-.7.3c-.1-.4-.4-.8-.7-1.1-.3-.3-.8-.5-1.5-.5-.5 0-1 .1-1.3.4-.4.2-.7.5-.9 1-.2.4-.3.9-.3 1.5s.2 1.2.4 1.6c.2.4.6.8 1 1 .4.2.9.3 1.4.3.4 0 .7 0 1-.2.4 0 .7-.3 1-.5l1.6 2.5a8.4 8.4 0 0 1-3.7 1Zm11.2-10.8.2 1.9v-.2c.3-.6.9-1.2 1.5-1.6.7-.4 1.5-.6 2.5-.6s1.8.3 2.5.9c.7.6 1 1.3 1 2.3v7.8h-3.3v-6.6c0-.5-.2-.8-.4-1.1-.3-.3-.6-.4-1.2-.4a2 2 0 0 0-1.3.5c-.4.3-.7.8-1 1.3l-.2 2v4.3h-3.4v-10.5h3Zm12.8 5.8V116a5.2 5.2 0 0 1 1-3.4l1-1 1.2-1.2c.3-.4.5-1 .5-1.6 0-.3 0-.6-.2-.8-.2-.3-.4-.5-.7-.6l-.7-.2a2 2 0 0 0-1.2.3l-.8.8a8 8 0 0 0-.5 1.1l-2.7-1.3a7.5 7.5 0 0 1 1.5-2.4c.4-.5 1-.9 1.6-1.2.7-.3 1.5-.4 2.4-.4 1 0 1.8.1 2.5.5.7.3 1.3.7 1.7 1.4.5.6.7 1.5.7 2.5s-.1 1.6-.4 2.2a5 5 0 0 1-.9 1.4l-1 1a9 9 0 0 0-.8 1 4 4 0 0 0-.6 1.1 5 5 0 0 0-.2 1.6v.5h-3.4Zm1.7 5c-.6 0-1-.1-1.4-.4-.4-.3-.5-.8-.5-1.3s.1-.9.5-1.2a2 2 0 0 1 1.4-.5c.6 0 1 .1 1.4.5.4.3.5.7.5 1.2s-.1 1-.5 1.3a2 2 0 0 1-1.4.4Z"/>
       
        <defs>
          
          <linearGradient id="outerStroke" x1="139.5" x2="139.5" y1="0" y2="225" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3980EB" stopOpacity=".9"/>
            <stop offset="1" stopColor="#B163FF" stopOpacity=".3"/>
          </linearGradient>
          
          <linearGradient id="mainCircleFill" x1="32" x2="265.6" y1="5" y2="19.1" gradientUnits="userSpaceOnUse">
            <stop stopColor="#62A7F7"/>
            <stop offset="1" stopColor="#ECC9F5"/>
          </linearGradient>
          
          <linearGradient id="mainCircleStroke" x1="139.5" x2="139.5" y1="5" y2="220" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3980EB" stopOpacity=".9"/>
            <stop offset="1" stopColor="#B163FF" stopOpacity=".3"/>
          </linearGradient>
          
          <linearGradient id="topHightlightFill" x1="133.5" x2="149.9" y1="19" y2="188.1" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5EFEF"/>
            <stop offset=".6" stopColor="#D9D9D9" stopOpacity="0"/>
          </linearGradient>
          
          <linearGradient id="bottomLowlightFill" x1="174.5" x2="155.2" y1="199.5" y2="125.7" gradientUnits="userSpaceOnUse">
            <stop stopColor="#816BD9" stopOpacity=".8"/>
            <stop offset="1" stopColor="#B8ACFF" stopOpacity="0"/>
          </linearGradient>
          
          <linearGradient id="hightlightFill" x1="163.5" x2="168" y1="24" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F9F8F9"/>
            <stop offset=".6" stopColor="#F5F2F5" stopOpacity="0"/>
          </linearGradient>

          <filter id="filterOuterstroke" width="265" height="265" x="7" y="-20" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="10"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_93_189"/>
            <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_93_189" result="shape"/>
          </filter>

          <filter id="filterMainCircle" width="255" height="255" x="12" y="-15" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="10"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_93_189"/>
            <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_93_189" result="shape"/>
          </filter>

          <filter id="filterTopHighlight" width="203.1" height="130.5" x="36.9" y="9.2" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur result="effect1_foregroundBlur_93_189" stdDeviation="1"/>
          </filter>

          <filter id="filterBottomLowlight" width="207.1" height="133.5" x="38" y="85" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur result="effect1_foregroundBlur_93_189" stdDeviation="2"/>
          </filter>

        </defs>
      </svg>
    
    );

};

export default VerstuurKnop;