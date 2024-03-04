import React from "react";
import Image from "next/image";
import Link from 'next/link'

export default function Contact (){


    return (
        

<section className="section contact">
<div className="container">
  <div className="contact_container">
    <div className="contact_text-wrapper">
      <div className="contact_image__wrapper">
        <Image src="/assets/imgs/sketch-flexibilidad.svg" width={320} height={198} alt="flexibilidad"/>
      </div>
      <h2 className="contact_heading">Contacta!</h2>
      <p className="contact_text">Tanto si tu proyecto es <span className="highlight-small">sencillo</span> como si es más <span className="highlight-small">complejo</span>, soy la persona indicada para alcanzar tus objetivos. Contacta conmigo y <span className="highlight-small">hablemos</span>.</p>
    </div>
    <div className="contact-icons-outer">
      <div className="contact-icon-wrapper">
        <a href="https://www.instagram.com/iberlanga.design/" className="glow-on-hover">
            <Image src="/assets/imgs/iconos_icon-instagram.svg" width={110} height={110} alt="instagram"/>
        </a>
      </div>
      <div className="contact-icon-wrapper">
      <a href="https://www.linkedin.com/in/ivanberlanga/" className="glow-on-hover">
        <Image src="/assets/imgs/iconos_icon-linkedin.svg" width={110} height={110} alt="linkedin"/>
        </a>
      </div>
      <div className="contact-icon-wrapper">
      <a href="https://wa.me/34607604633" className="glow-on-hover">
        <Image src="/assets/imgs/iconos_icon-whatsapp.svg" width={110} height={110} alt="whatsapp"/>
        </a>
      </div>
      <div className="contact-icon-wrapper">
        <a href="mailto:iberlanga78@gmail.com" className="glow-on-hover">
        <Image src="/assets/imgs/iconos_icon-mail.svg" width={110} height={110} alt="email"/>
        </a>
      </div>
    </div>
  </div>
</div>
</section>

)
}