"use client"
import React, {useEffect, useRef} from "react";
import Link from 'next/link';
import { Player } from '@lottiefiles/react-lottie-player';


export default function Footer ()
{ 
    return (

        <aside id="menu-secundario">
            <div className="container nav w-container">
                    <ul className="secundario-nav__list">
                        <li><Link href="/">
                            <Player 
                                autoplay={true}
                                loop={true}
                                controls={false}
                                src="/assets/animated-eye.json"
                                style={{ height: '40px', width: '100%' }}
                            />
                            Inicio
                            </Link>
                        </li>
                        <li>
                            <Link href="/proyectos">
                            <Player 
                                autoplay={true}
                                loop={true}
                                controls={false}
                                src="/assets/animated-circles.json"
                                style={{ height: '40px', width: '100%' }}
                            />
                            Proyectos</Link>
                        </li>
                        <li><Link href="/sobre-mi">
                            <Player 
                                autoplay={true}
                                loop={true}
                                controls={false}
                                src="/assets/animated-circles-2.json"
                                style={{ height: '40px', width: '100%' }}
                            />
                            Sobre mi</Link>
                        </li>
                        <li><Link href="/contacto">
                            <Player 
                                autoplay={true}
                                loop={true}
                                controls={false}
                                src="/assets/animated-plane.json"
                                style={{ height: '40px', width: '100%' }}
                            />
                            Contacto</Link>
                        </li>
                    </ul>
            </div> 
        </aside>
    )

}