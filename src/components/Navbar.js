"use client"
import React, {useEffect, useState, useRef} from "react";
import Image from "next/image";
import Link from 'next/link';
import lottie from 'lottie-web';


export default function Navbar (){

    useEffect(() => {
        
        var prevScrollpos = window.pageYOffset;


        var prevScrollpos = window.scrollY;
        
                /* Get the header element and it's position */
                const headerDiv = document.querySelector("nav");
                const headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;
                
                const footerDiv = document.querySelector("#menu-secundario");
                
                window.onscroll = function() {
                var currentScrollPos = window.scrollY;
                
                /* if we're scrolling up, or we haven't passed the header,
                    show the header at the top */
                if (prevScrollpos > currentScrollPos  || currentScrollPos < headerBottom){  
                    headerDiv.style.top = "0";
                    footerDiv.style.bottom = "0";
                }
                else{
                    /* otherwise we're scrolling down & have passed the header so hide it */
                    headerDiv.style.top = "-7.2rem";
                    footerDiv.style.bottom = "-7.2rem";
                } 
                
                prevScrollpos = currentScrollPos;
                }
      
          }, []);

    return (
        <>
        
        <nav className="navbar">
           <div className="container nav w-container">
                <Link className='logo-wrap' href="/" onMouseEnter={() => lottie.play()} >

                    <Image src="/assets/imgs/logo.svg" alt="logo" width="62" height="32"/>
                </Link>
                <div>
                <a className='cta-contact-button glow-on-hover' href='#'>
                    <Image className='thumbnail' src="/assets/imgs/ivan-profile-thumb.png" alt="ivan thumbnail" width="40" height="40"/>
                    <span>Conctacta!</span>
                    <Image className='arrow-right' alt="arrow" src="/assets/imgs/arrow-right.svg" width="8" height="12"/>
                </a> 
                </div>
            </div> 
        </nav>
        </>
    )
}