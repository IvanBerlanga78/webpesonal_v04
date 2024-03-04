"use client"
import React, {useEffect, useRef} from "react";
import Link from 'next/link';


export default function Footer ()
{ 
    return (

        <aside id="menu-secundario">
            <div className="container nav w-container">
                    <ul className="secundario-nav__list">
                        <li>
                            <Link href="/">Inicio</Link>
                        </li>
                        <li>
                            <Link href="/proyectos">Proyectos</Link>
                        </li>
                        <li>
                            <Link href="/sobre-mi">Sobre mi</Link>
                        </li>
                        <li>
                            <Link href="/contacto">Contacto</Link>
                        </li>
                    </ul>
            </div> 
        </aside>
    )

}