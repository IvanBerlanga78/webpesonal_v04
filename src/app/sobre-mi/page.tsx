
import Image from "next/image";
import Contact from "@/components/Contact";

export default function Page() {
    return (
      <>
      <section className="section hp-hero">
        <h1>Diseñador web <br className="hide-on-mobile"/> freelance</h1>
      </section>
      <section className='sobre-mi__content-grid section'>
        <div className='sobre-mi_image-wrap graffiti-imagenbh'>
          <Image src="/assets/imgs/graffiti-photo.jpg" alt="skills" width={500} height = {350}/>
        </div>
        <div className='sobre-mi__text-wrap'>
            <Image className='hp-hero_icon' src="/assets/imgs/icon-profile.svg" alt="perfil" width={30} height = {30}/>
            <p>Soy Iván, Diseñador Web Freelance y puedo ayudarte a crear tu página web. Tengo más de 8 años de experiencia y he trabajado para grandes empresas y también para pequeños emprendedores. Mi objetivo es usar mi creatividad y mi experiencia para crear propuestas de valor. ¿Necesitas una web o quieres que te ayude a crearla? Contacta conmigo.</p>
        </div>
        <div className='sobre-mi__text-wrap'>
            <Image className='hp-hero_icon' src="/assets/imgs/icon-tools.svg" alt="tool" width={30} height = {30}/>
            <p>Me especializo en la construcción de aplicaciones web, tanto en Wordpress como en HTML + CSS + JavaScript y también en React. Disfruto creando una experiencia de usuario fácil y cómoda y diseñando productos digitales agradables. Y me gusta el trato cercano con mis clientes. </p>
        </div>

        </section>
        <section className='sobre-mi__content-grid section'>
        <div className='sobre-mi__text-wrap'>
            <Image className='hp-hero_icon' src="/assets/imgs/icon-tools.svg" alt="tool" width={30} height = {30}/>
            <p>Tanto si necesitas una web sencilla como si quieres incluir animaciones u otros efectos o funcionalidades más complejas, soy la persona indicada para alcanzar tus objetivos. Mis conocimientos y experiencia me permiten adaptarme a proyectos sencillos o más complicados.</p>
        </div>
        <div className='hp-hero__text-wrap'>
          <Image src="/assets/imgs/skills-image.svg" alt="skills" width={200} height = {300}/>
        </div>

        <div className='hp-hero__skills-wrap'>
          <div className='skills-section-container'>
            <div className='skills-section-container-inner'>
              <div className='skills-section-wrap'>
                <span className="skill-item skills-section-title">Graphic</span>
                <span className='skill-item'>Illustrator</span>
                <span className='skill-item'>Photoshop</span>
                <span className='skill-item'>Indesign</span>
                <span className='skill-item'>Figma</span>
              </div>
              <div className='skills-section-wrap'>
                <span className="skill-item skills-section-title">Web</span>
                <span className='skill-item'>Wordpress</span>
                <span className='skill-item'>Woocommerce</span>
                <span className='skill-item'>Elementor</span>
                <span className='skill-item'>HTML</span>
                <span className='skill-item'>CSS</span>
                <span className='skill-item'>JavaScript</span>
                <span className='skill-item'>React</span>
                <span className='skill-item'>Git</span>
              </div>
              <div className='skills-section-wrap'>
                <span className="skill-item skills-section-title">Motion Graphics</span>
                <span className='skill-item'>Premiere</span>
                <span className='skill-item'>AfterEffects</span>
                <span className='skill-item'>Lottie</span>
              </div>
            </div>
          </div>
        </div>
        </section>
        <Contact/>
        </>
        )
        }