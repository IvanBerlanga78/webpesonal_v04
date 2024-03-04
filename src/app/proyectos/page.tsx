import { Project, MoreProjects } from "@/components/Project";
import Contact from "@/components/Contact";


export default function Page() {
  return (
    <>
      <section className="section hp-hero">
        <h1>Algunos <br className="hide-on-mobile"/> de mis trabajos</h1>
      </section>
      <section className="section">
            <div className="bcg-dots"></div>
            <div className="container">
              <div className="proj-heading-container">
                <h2 className="project-heading"><b>Cornellà Cuida</b><br/>"I tu, a qui cuides?"</h2>
              </div>
              <div className="case-study__item-grid">       
                    <Project
                    ProjectFirstImage= {"/assets/imgs/imgs-projects/cornella-1.jpg"}
                    ProjectSecondImage= {"/assets/imgs/imgs-projects/cornella-2.jpg" }
                    ProjectThirdImage= {"/assets/imgs/imgs-projects/cornella-3.jpg" }
                    ProjectFourthImage= {"/assets/imgs/imgs-projects/cornella-4.jpg" }
                    ProjectLabelText1={'Diseño Web'}
                    ProjectLabelText2={'Wordpress'}
                    ProjectHeading={"\"I tu, a qui cuides?\""}
                    ProjectText={"Un programa de ayuda y soporte a personas que cuidan de otras personas. Cornellà Cuida es una iniciativa tan maravillosa y necesaria como su página web. En ella, además de transmitir sus valores, se muestra un repositorio de consejos según el perfil de la persona que es cuidada. También una agenda con los eventos que la asociación organiza periódicamente. Una sólida experiencia visual realizada en colaboración con la agencia TambienNo."}
                    ProjectExternalLink={"https://cornellacuida.cat/"}
                  />
              </div>
              <div className="proj-heading-container">
                <h2 className="project-heading"><b>Elia</b><br/>"Improving people's live through space"</h2>
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
              <div className="proj-heading-container">
                <h2 className="project-heading"><b>Natalia Sanchidrian</b><br/>"¿Crees que tu equipo ha logrado su máximo potencial?"</h2>
              </div>
              <div className="case-study__item-grid">       
                <Project
                    ProjectFirstImage= {"/assets/imgs/imgs-projects/natalia-1.jpg"}
                    ProjectSecondImage= {"/assets/imgs/imgs-projects/natalia-2.jpg" }
                    ProjectThirdImage= {"/assets/imgs/imgs-projects/natalia-3.jpg" }
                    ProjectFourthImage= {"/assets/imgs/imgs-projects/natalia-4.jpg" }
                    ProjectLabelText1={'Diseño Web'}
                    ProjectLabelText2={'Wordpress'}
                    ProjectHeading={"\"¿Crees que tu equipo ha logrado su máximo potencial?\""}
                    ProjectText={"Natalia Sanchidrian es una experta ponente y escritora sobre Inteligencia Emocional. El reto de esta web personal era transmitir todo potencial y personalidad magnética que tiene Natalia. La web, muy visual y elegante, logra su objetivo."}
                    ProjectExternalLink={"https://eli-a.com"}
                  />
              </div>
              <div className="proj-heading-container">
                <h2 className="project-heading"><b>Matteo Pugliese</b><br/>"Tradition and classicism of form and Michelangelesque bodies"</h2>
              </div>
              <div className="case-study__item-grid">       
                <Project
                    ProjectFirstImage= {"/assets/imgs/imgs-projects/pugliese-1.jpg"}
                    ProjectSecondImage= {"/assets/imgs/imgs-projects/pugliese-2.jpg" }
                    ProjectThirdImage= {"/assets/imgs/imgs-projects/pugliese-3.jpg" }
                    ProjectFourthImage= {"/assets/imgs/imgs-projects/pugliese-4.jpg" }
                    ProjectLabelText1={'Diseño Web'}
                    ProjectLabelText2={'Wordpress'}
                    ProjectHeading={"\"Tradition and classicism of form and Michelangelesque bodies \""}
                    ProjectText={"Matteo Pugliese es un escultor milanés, casi autodidacta, amante del arte. En 2001, annimado por amigos, organizó su primera exposición individual.Hoy sus obras se exhiben de forma permanente en galerías de Italia y de las principales ciudades artísticas del mundo, como Nueva York, Roma o Londres.El objetivo de la web era hacer llegar la obra del autor a su público de una manera muy visual, donde las fotografías de las esculturas fueran las protagonistas."}
                    ProjectExternalLink={"https://matteopugliese.com/"}
                  />
              </div>
              <div className="proj-heading-container">
                <h2 className="project-heading"><b>Fundació Malalts Mentals de Catalunya</b><br/>"Mira’m sempre."</h2>
              </div>
              <div className="case-study__item-grid">       
                <Project
                    ProjectFirstImage= {"/assets/imgs/imgs-projects/fmmc-1.jpg"}
                    ProjectSecondImage= {"/assets/imgs/imgs-projects/fmmc-2.jpg" }
                    ProjectThirdImage= {"/assets/imgs/imgs-projects/fmmc-3.jpg" }
                    ProjectFourthImage= {"/assets/imgs/imgs-projects/fmmc-4.jpg" }
                    ProjectLabelText1={'Diseño Web'}
                    ProjectLabelText2={'Wordpress'}
                    ProjectHeading={"\"Mira’m sempre. \""}
                    ProjectText={"Fundació de Malalts Mentals de Catalunya es una entidad sostenible que, colaborando con la administración, orienta la vida de las personas con problemas de salud mental para que, ejerciendo sus derechos, alcancen el mayor nivel de autonomía y de independencia posible, contribuyendo a crear una sociedad inclusiva y justa"}
                    ProjectExternalLink={"https://fmmc.cat/"}
                  />
              </div>
            </div>  
        </section>
        <section className="section">
          <div className="container">
              <MoreProjects/>
          </div>
        </section>
        <Contact/>

    </>
  )
}