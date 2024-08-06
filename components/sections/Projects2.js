'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: '.h1n',
    prevEl: '.h1p',
  },

  // Pagination
  pagination: true,
  breakpoints:{
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 5,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 5,
      // spaceBetween: 30,
    },
  }
};

export default function Projects2() {
  return (
  <>
  <section className="project-section style-two">
    <div className="auto-container">
      <div className="sec-title text-center"> <span className="sub-title">Galleries</span>
        <h2 className="words-slide-up text-split">We delivered results for <br/>industry leaders</h2>
      </div>
    </div>
    <div className="outer-box">
      <Swiper {...swiperOptions} className="project-slider">
        <SwiperSlide className="project-block">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-project-details"><img src="/images/resource/project1-1.jpg" alt="Image"/></Link></figure>
            </div>
            <div className="content-box">
              <Link href="page-project-details" className="theme-btn read-more"><i className="far fa-arrow-up"></i></Link><br/>
              <h4 className="title"><Link href="page-project-details">Ship Fright</Link></h4>
              <span className="cat">Gcom Company</span>
            </div>
            <div className="overlay-1"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="project-block">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-project-details"><img src="/images/resource/project1-2.jpg" alt="Image"/></Link></figure>
            </div>
            <div className="content-box">
              <Link href="page-project-details" className="theme-btn read-more"><i className="far fa-arrow-up"></i></Link><br/>
              <h4 className="title"><Link href="page-project-details">Ship Fright</Link></h4>
              <span className="cat">Gcom Company</span>
            </div>
            <div className="overlay-1"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="project-block">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-project-details"><img src="/images/resource/project1-3.jpg" alt="Image"/></Link></figure>
            </div>
            <div className="content-box">
              <Link href="page-project-details" className="theme-btn read-more"><i className="far fa-arrow-up"></i></Link><br/>
              <h4 className="title"><Link href="page-project-details">Ship Fright</Link></h4>
              <span className="cat">Gcom Company</span>
            </div>
            <div className="overlay-1"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="project-block">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-project-details"><img src="/images/resource/project1-4.jpg" alt="Image"/></Link></figure>
            </div>
            <div className="content-box">
              <Link href="page-project-details" className="theme-btn read-more"><i className="far fa-arrow-up"></i></Link><br/>
              <h4 className="title"><Link href="page-project-details">Ship Fright</Link></h4>
              <span className="cat">Gcom Company</span>
            </div>
            <div className="overlay-1"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="project-block">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-project-details"><img src="/images/resource/project1-5.jpg" alt="Image"/></Link></figure>
            </div>
            <div className="content-box">
              <Link href="page-project-details" className="theme-btn read-more"><i className="far fa-arrow-up"></i></Link><br/>
              <h4 className="title"><Link href="page-project-details">Ship Fright</Link></h4>
              <span className="cat">Gcom Company</span>
            </div>
            <div className="overlay-1"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="project-block">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-project-details"><img src="/images/resource/project1-1.jpg" alt="Image"/></Link></figure>
            </div>
            <div className="content-box">
              <Link href="page-project-details" className="theme-btn read-more"><i className="far fa-arrow-up"></i></Link><br/>
              <h4 className="title"><Link href="page-project-details">Ship Fright</Link></h4>
              <span className="cat">Gcom Company</span>
            </div>
            <div className="overlay-1"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
  </>
  )
}
