"use client"
import Image from "next/image";
import "./page.css";
import Contact from "@/components/Contact";
import { AnimatedDesk } from "@/components/Animations";
import { ReasonsPanel, SolutionPanel, PlansPanel } from "@/components/Panels";
import { Project, MoreProjects } from "@/components/Project";

// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination  } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';


export default function Home() {
  return (
    <main id="main">

      <section className='section hp-hero'>
          <div className="bcg-dots hp-hero"></div>
          <div className='container'>
          <div className='hp-hero__heading-grid'>
              <div className='hp-hero__ib-wrap'>
                <h1>¿Creamos<br/>tu página<br/>web?</h1>
                <h2 className="hp-hero__ib">¿Te gustaría crear tu página web? <br className="hide-on-mobile"/> ¿Mejorarla o darle un toque diferente?<br className="hide-on-mobile"/>  ¿Vender más o conseguir más clientes?<br className="hide-on-mobile"/> </h2>      
              </div>
              <div className='hp-hero__ib-wrap'>
                 <AnimatedDesk/> 
              </div>
          </div>
          </div>
        </section>
        <section className="section">
          <div className="solutions-container">
              <h2 className="middle-section__heading">Soluciones digitales<br/><span className="red">flexibles y adaptables</span>
              </h2>
              <div className="solutions-section-grid">
                <SolutionPanel
                  imageSrc = "/assets/imgs/servicios_pagina-web.svg"
                  imageAlt = "Servicios: Páginas Web"
                  heading = "Páginas Web"
                  text = "Creo páginas web creativas e innovadoras para tu negocio. Utilizo herramientas modernas para que tu cliente se sienta a gusto en tu página y me aseguro de que transmita tu imagen y tu mensaje."
                />
                <SolutionPanel
                  imageSrc = "/assets/imgs/servicios_tienda-online.svg"
                  imageAlt = "Servicios: Tiendas Online"
                  heading = "Tiendas Online"
                  text = "Ofrece tus productos a tus clientes, donde quieras y cuando quieras con una tienda online abierta las 24h. El comercio online no para de crecer. Esta es tu oportunidad de crecer también."
                />
              </div>
           </div> 
        </section>
        <section className="section">
          <div className="bcg-dots short"></div>
          <div className="container">
            <div className="reasons-section-grid">
              <ReasonsPanel
                imageSrc = "/assets/imgs/razones_credibilidad.svg"
                imageAlt = "Más credibilidad para tu negocio"
                heading = "Más credibilidad para tu negocio"
                text = "Las personas suelen fiarse más de las marcas conocidas. En internet podrás aumentar tu reconocimiento de marca."/>
              <ReasonsPanel
                imageSrc ="/assets/imgs/razones_clientes.svg"
                imageAlt ="Aumento de clientes"
                heading ="Aumento de clientes"
                text ="Una página o tienda online te da acceso a una comunidad global. Tu negocio puede estar visible en todo el mundo."
              />
              <ReasonsPanel
                imageSrc ="/assets/imgs/razones_accesibilidad.svg"
                imageAlt ="Mayor accesibilidad"
                heading ="Mayor accesibilidad"
                text ="Tu mensaje, tus productos, tus servicios estarán disponibles a cualquier hora, todos los días del año."
              />
              <ReasonsPanel
                imageSrc ="/assets/imgs/razones_relacion.svg"
                imageAlt ="Mejor relación con tus clientes"
                heading ="Mejor relación con tus clientes"
                text ="Podrás ofrecerles contenidos, enviarles notificaciones por correo y avisarles de novedades, promociones..."/>
            </div>
          </div>
        </section>
        <section className="section">
            <div className="bcg-dots"></div>
            <div className="container">
            <h2 className="middle-section__heading">Páginas web <br/><span className="red">100% profesionales</span></h2>
            <div className="proj-heading-container">
                  <h2 className="project-heading"><b>Elia</b>"Improving people's live through space"</h2>
                </div>
              <div className="case-study__item-grid">
                
                  <Project
                    ProjectFirstImage= {"/assets/imgs/imgs-projects/elia-1.jpg"}
                    ProjectSecondImage= {"/assets/imgs/imgs-projects/elia-2.jpg" }
                    ProjectThirdImage= {"/assets/imgs/imgs-projects/elia-3.jpg" }
                    ProjectFourthImage= {"/assets/imgs/imgs-projects/elia-4.jpg" }
                    ProjectLabelText1={'Diseño Web'}
                    ProjectLabelText2={'Wordpress'}
                    ProjectHeading={"\"Improving people's live through space\""}
                    ProjectText={"Eli-a es un estudio de arquitectura con gran proyección internacional. Sus proyectos se encuentran repartidos por los cinco continentes y el prestigio de sus obras es reconocido.El objetivo de la web era mostrar un portfolio de los proyectos de la firma de una forma muy intuitiva. Con el uso de fichas de proyecto, conseguí que cada trabajo tuviera una personalidad y entidad propias."}
                    ProjectExternalLink={"https://eli-a.com"}
                  />
                 </div>
            </div>  
        </section>
        <section className="section">
          <div className="container">
              <MoreProjects/>
          </div>
        </section>
        <section className="section">
          <div className="middle-container">
            <h2 className="middle-section__heading">Desde lo más sencillo <span className="red">a lo más complejo</span></h2>
          <div className="middle-section__text-wrap"><p>Tanto si necesitas una web sencilla como si quieres incluir animaciones u otros efectos o funcionalidades más complejas, soy la persona indicada para alcanzar tus objetivos. Mis conocimientos y experiencia me permiten adaptarme a proyectos sencillos o más complicados.</p></div>
          <Image src="/assets/imgs/sobre-mi.svg" width={640} height={400} alt="sobre mi"/>
          </div>
        </section>
        <section className="section">
          <div className="middle-container">
          <h2 className="middle-section__heading"><span className="highlight-big">Diseñador web</span> freelance <span className="red">enfocado en  tus objetivos</span></h2>
          </div>
        </section>
        <section className="section reviews">
          <div className="container">
            <Swiper
            spaceBetween = {30}
            slidesPerView={1}
            breakpoints={{
              // when window width is >= 768px
              991: {
                slidesPerView: 4,
              }
            }}
            modules={[EffectFade, Autoplay, Pagination]}
            >
               <SwiperSlide>
                    <Image className="icon-talk" src ="/assets/imgs/icon-talk_icon-talk.svg" width={30} height={30} alt="talk icon"/>
                    <p className='review-text'>Iván es un profesional con el que da gusto trabajar. Siempre proactivo, predispuesto a mejorar lo que sea necesario y haciendo que las cosas sean fáciles. Llevo varios años trabajando con él y espero que continuemos colaborando mucho tiempo más.</p>
                    <p className='reviewer'>Guadalupe González / Art Director & Graphic Designer at Open Design Studio BCN</p>
                </SwiperSlide>
                <SwiperSlide>
                <Image className="icon-talk" src ="/assets/imgs/icon-talk_icon-talk.svg" width={30} height={30} alt="talk icon"/>
                    <p className='review-text'>Iván es una gran persona y muy buen profesional. He trabajado con él durante un largo periodo y es trabajador, creativo y tiene muy buenas ideas. Y lo más importante es que a nivel de carácter es muy fácil trabajar con él.</p>
                    <p className='reviewer'>Leyre Suárez / Responsable de Marketing y Comunicación</p>
                </SwiperSlide>
                <SwiperSlide>
                <Image className="icon-talk" src ="/assets/imgs/icon-talk_icon-talk.svg" width={30} height={30} alt="talk icon"/>
                    <p className='review-text'>Trabajo con Iván desde hace muchos años. Es parte del equipo. Somos referencia en nuestro sector, y una web de esas características está en constante movimiento: renovación de diseño, hacer páginas para cursos, banners, documentos… todo eso nos lo resuelve Iván con eficacia, rapidez y diseño profesional.</p>
                    <p className='reviewer'>Carlos A. Gutiérrez / nutricionistadeperrros.com</p>
                </SwiperSlide>
                <SwiperSlide>
                <Image className="icon-talk" src ="/assets/imgs/icon-talk_icon-talk.svg" width={30} height={30} alt="talk icon"/>  
                    <p className='review-text'>Ivan es uno de los mejores desarrolladores y diseñadores web con los que trabajé. Recuerdo que cuando comenzó con nosotros, lo incorporaron directamente a un proyecto con un plazo muy ajustado pero estricto y no solo pudo realizar la entrega a tiempo, sino que la calidad superó nuestras expectativas. Sin duda recomiendo ampliamente a Iván por su creatividad y capacidad para superar las expectativas.</p>
                    <p className='reviewer'>Abdelrahman Haroun / Founder and Managing Director at Digiturnal</p>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="icon-talk" src ="/assets/imgs/icon-talk_icon-talk.svg" width={30} height={30} alt="talk icon"/> 
                    <p className='review-text'>He trabajado en algunos proyectos con Ivan y fue una experiencia increíble. Entendió y tradujo el concepto al diseño y luego a un prototipo funcional en un plazo menor al esperado. Recomiendo a Ivan como diseñador creativo.</p>
                    <p className='reviewer'>Rahid Kader / Empowering Museum Retail Through Digital Commerce Expertise | Elevating Cultural Experiences Online</p>
                 </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className="section" id="solutions">
           <div className="container-plans">
            <h2 className="middle-section__heading">Planes <span className="red">flexibles y adaptables</span><br/> a tus necesidades</h2>
            <div className="grid-plans">
                <PlansPanel
                  heading={"Basic"}
                  price = {"500€"}
                  feature1 = {"1 pestaña"}
                  feature2 = {"Adaptado a móviles"}
                  feature3 = {"100% autogestionable"}
                  feature4 = {"SEO Friendly"}
                  feature5 = {"1 idioma"}
                  feature6 = {"Integración de Blog"}
                />
                <PlansPanel
                  heading={"Avanzado"}
                  price = {"800€"}
                  feature1 = {"5 pestañas"}
                  feature2 = {"Adaptado a móviles"}
                  feature3 = {"100% autogestionable"}
                  feature4 = {"SEO Friendly"}
                  feature5 = {"2 idiomas"}
                  feature6 = {"Integración de Blog"}
                />
                <PlansPanel
                  heading={"Business"}
                  price = {"1200€"}
                  feature1 = {"10 pestañas"}
                  feature2 = {"Adaptado a móviles"}
                  feature3 = {"100% autogestionable"}
                  feature4 = {"SEO Friendly"}
                  feature5 = {"3 idiomas"}
                  feature6 = {"Integración de Blog"}
                />
            </div>
           </div>
        </section>
        <Contact/>
    </main>
  );
}
