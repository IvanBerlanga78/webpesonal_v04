'use client'
import React from "react";
import Image from "next/image";
import Link from 'next/link'

function SolutionPanel (props){
    
return (
    <div className="solution-panel">
    <Image src={props.imageSrc} width="328" height="244" alt={props.imageAlt}/>
    <h3 className="solution-heading">{props.heading}</h3>
    <p>{props.text}</p>
    <Link className="details-button wide" href="#">
    <div className="details-button-wrap">
        <div className="details-button-icon-wrap">
        <Image className="icon" src="/assets/imgs/icon-plus_icon-plus.svg" width="21" height="21" alt="icon plus"/>
    </div>
    <p>Ver Planes</p>
    </div>
    </Link>
    </div>
)
}

function ReasonsPanel (props){
    return (
        <div className="reason-wrap">
            <div className="reason-image-wrap">
                <Image src={props.imageSrc} width="345" height="256" alt={props.imageAlt}/>
            </div>
            <h3 className="reason-heading">{props.heading}</h3>
            <p>{props.text}</p>
        </div>
    )
    }

function PlansPanel (props){
    return (
        <div className="single-plan">
            <h3 className="single-plan-heading">{props.heading}</h3>
            <div className="single-plan-price">{props.price}</div>
            <div className="single-plan-features">
                <ul>
                    <li><Image src="/assets/imgs/icono-check_icon-check-white.svg" width={20} height={20} alt="icon check"/>{props.feature1}</li>
                    <li><Image src="/assets/imgs/icono-check_icon-check-white.svg" width={20} height={20} alt="icon check"/>{props.feature2}</li>
                    <li><Image src="/assets/imgs/icono-check_icon-check-white.svg" width={20} height={20} alt="icon check"/>{props.feature3}</li>
                    <li><Image src="/assets/imgs/icono-check_icon-check-white.svg" width={20} height={20} alt="icon check"/>{props.feature4}</li>
                    <li><Image src="/assets/imgs/icono-check_icon-check-white.svg" width={20} height={20} alt="icon check"/>{props.feature5}</li>
                    <li><Image src="/assets/imgs/icono-check_icon-check-white.svg" width={20} height={20} alt="icon check"/>{props.feature6}</li>
                </ul>
            </div>
        </div>
    )
    }


export  {SolutionPanel, ReasonsPanel, PlansPanel};