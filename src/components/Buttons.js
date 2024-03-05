import React from "react";
import Image from 'next/image';
import { useSpring, animated } from "react-spring";

function DetailsButton ({ButtonLink, ButtonText}){

    const [{x, y, rotation,scale }, set] = useSpring(() => ({ x: 0, y : 0, rotation : 0 , scale : 0}));
    
    return (
        <>
          <a className="details-button wide"
                        onMouseEnter={() => set({ y: 0, color: "#000" })}
                        onMouseLeave={() => set({ y: 100, color: "#fff" })}
            href={ButtonLink}>
            <div className='details-button-wrap'>
                <div className='details-button-icon-wrap'>
                    <animated.span style={{ transform: y.to(v => `translateY(${v}%`) }}>
                    <Image src="/assets/imgs/icon-plane_icon-plane.svg" alt="icon plane" width="30" height="30"/>
                    </animated.span>
                </div>
                <p>
                {ButtonText}
                </p>
                </div>   
            </a>  
        </>
    )
}

function LabelSmall(props) {
    let labelText = props.labelText
    return (
        <>
        <div className="label small dashed">
            <p>
            {labelText}
            </p>
        </div>
        </>
    )
}

export {LabelSmall, DetailsButton}