import React,{useState} from "react";

let BalloonImages = (props: any) => {
    
    let basecolor = props.basecolor
    let subsurface = props.subsurface

    let count = props.count
    return (


<>
<svg className="balloon-float" width="50" height="70" viewBox="0 0 88 134" fill={basecolor} xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_3_31)">
        <g filter="url(#filter1_i_3_31)">
            <path d="M88 25.4737C88 39.5424 67.6084 60.5 54.5 60.5C41.3916 60.5 21 39.5424 21 25.4737C21 11.405 35.9985 0 54.5 0C73.0015 0 88 11.405 88 25.4737Z" fill={subsurface} />
        </g>
        <path d="M54.9573 60.5L54.0427 87.0242" stroke="black" />
    </g>
        <text fill="black" x="59%" y="20%" dominantBaseline="middle" textAnchor="middle">
            <tspan fontSize="30" fontFamily="Irish Grover">{count}</tspan>

        </text>
    <defs>
        <filter id="filter0_d_3_31" x="0" y="0" width="88" height="149" filterUnits="userSpaceOnUse" colorInterpolationFilters="linearRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="-17" dy="11" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_31" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_31" result="shape" />
        </filter>
            
        <filter id="filter1_i_3_31" x="21" y="0" width="71" height="64.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="linearRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dx="19" dy="10" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.41 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_31" />
        </filter>

    </defs>

</svg>
    
</>

        
    )

}

export default BalloonImages