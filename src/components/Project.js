'use client'
import React, {useState, useEffect} from "react";
import { LabelSmall } from "./Buttons";
import { DetailsButton } from './Buttons';
import slice from "lodash.slice";
import Image from 'next/image';

// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination  } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';



function Project ({ProjectFirstImage, ProjectSecondImage, ProjectThirdImage, ProjectFourthImage, ProjectLabelText1, ProjectLabelText2, ProjectText, ProjectHeading, ProjectExternalLink}) {
      const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      }
    return (
        <>
    <div className="case_study__image-wrap">
        <div className='slider-container'>
            <div className='slider-mask'>
                <Swiper
                    effect={"fade"}
                  
                    autoplay=
                      {true}
                  
                    pagination={pagination}
                    
                    fadeEffect={{
                      crossFade: true // enables slides to cross fade
                    }}
                    modules={[EffectFade, Autoplay, Pagination]}
                    >
                    <SwiperSlide>
                      <Image src={ProjectFirstImage} alt={ProjectHeading}  width="615" height="700"></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={ProjectSecondImage} alt={ProjectHeading}  width="615" height="700"></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={ProjectThirdImage} alt={ProjectHeading}  width="615" height="700"></Image>
                    </SwiperSlide>
                    
                </Swiper>
                <div id="bullets"></div>

            </div>
        </div>
    </div>    
    <div className='case_study__text-wrap'>
        <div className='case-study__labels-wrap'>
        <LabelSmall labelText={ProjectLabelText1}/>
        <LabelSmall labelText={ProjectLabelText2}/>
        </div>
        <p className='case_study__text-text'>{ProjectText}
        </p>
        <DetailsButton
        ButtonLink={ProjectExternalLink}
        ButtonText = {"Visitar la web"}
        />
    </div>
    <div className='case_study__image-wrap'>
        <Image src={ProjectFourthImage} alt={ProjectHeading} width="615" height="700"/>
    </div>  
    <div className='case_study__text-wrap'>
        <h2 className='case_study__heading'>{ProjectHeading}</h2>
    </div>

        </>
    )
}

function MoreProjects () {
  const [post, setPost] = useState([])
  const [isCompleted, setIsCompleted] = useState(false)
  const [index, setIndex] = useState(20)
  const initialPosts = slice(post, 0, index)
  const getData = () => {
    fetch('/assets/posts.json',
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((res) => res.json())
      .then((json) => setPost(json))
      .catch((e) => console.log(e))
  }
  useEffect(() => {
    getData()
  }, [])

  return ( 
    <Swiper
        className="more-projects"
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        breakpoints={{

          // when window width is >= 768px
          768: {
            slidesPerView: 4,
          }
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]} 
      >
      {initialPosts.map((item) => { 
      return <SwiperSlide key={item.ProjectId}>
                <div className="project_preview__item-wrap fade-in">
                    <h2 className="project_preview_title">{item.ProjectPreviewTitle}</h2>  
                    <div className="project_preview_labels-wrap">
                        <LabelSmall labelText = {item.ProjectPreviewLabelText1}/>
                        <LabelSmall labelText = {item.ProjectPreviewLabelText2}/>
                    </div>
                    <div className="project_preview_img secondary">
                        <Image className="image" width={280} height={180} src= { item.ProjectPreviewImage} alt={item.ProjectPreviewTitle}/>
                    </div>
                </div>
              </SwiperSlide>;
     
     })}
        </Swiper>
  )
}



function Posts() {
    const [post, setPost] = useState([])
    const [isCompleted, setIsCompleted] = useState(false)
    const [index, setIndex] = useState(4)
    const initialPosts = slice(post, 0, index)
    const getData = () => {
      fetch('/assets/posts.json',
      {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
        .then((res) => res.json())
        .then((json) => setPost(json))
        .catch((e) => console.log(e))
    }
    const loadMore = () => {
      setIndex(index + 3)
      if (index >= post.length-1) {
        setIsCompleted(true)
      } else {
        setIsCompleted(false)
      }
    }
    useEffect(() => {
      getData()
    }, [])

    return (
        <>
  
        {initialPosts.map((item) => {
          return (
            <div key={item.ProjectId} className="project_preview__item-wrap fade-in">
            <h2 className="project_preview_title">{item.ProjectPreviewTitle}</h2>  
            <div className="project_preview_labels-wrap">
                <LabelSmall labelText = {item.ProjectPreviewLabelText1}/>
                <LabelSmall labelText = {item.ProjectPreviewLabelText2}/>
            </div>
            <div className="project_preview_img secondary">
                <Image className="image" width={300} height={180} src= { item.ProjectPreviewImage} alt={item.ProjectPreviewTitle}/>
            </div>
            </div>
          )
        })}
        <>

        <div className="project_preview__button-container">
          {isCompleted ? (
            <span></span>
          ) : (
            <button onClick={loadMore} type="button" className="btn">
             <Image width={20} height={20} src="/assets/imgs/icon-plus_icon-plus.svg"/> Cargar más
            </button>
          )}
        </div>
        </>
  
      </>
    )
  }

export { Project, Posts, MoreProjects};