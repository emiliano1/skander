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
  pagination:  true,
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
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 5,
      // spaceBetween: 30,
    },
  }
};

export default function Projects1() {
  return (
      <>
      <section className="project-section">
        <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/3.jpg)' }}></div>
        <div className="auto-container">
          <div className="sec-title light text-center"> <span className="sub-title">Focus</span>
            <h2 className="words-slide-up text-split">We specialize at<br/>supply chain & logistics</h2>
          </div>
        </div>
        <div className="outer-box">
          <Swiper {...swiperOptions} className="project-slider home1-style">
            <SwiperSlide className="project-block">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><Link href="Freight-Brokerage"><img src="images/resource/project1-4.jpg" alt="Image"/></Link></figure>
                </div>
                <div className="content-box">
                  <Link href="Freight-Brokerage" className="theme-btn read-more"><i className="far fa-arrow-up"></i></Link><br/>
                  <h4 className="title"><Link href="Freight-Brokerage">Sea Freight</Link></h4>
                  <span className="cat">Skander Global</span>
                </div>
                <div className="overlay-1"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="project-block">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><Link href="Warehousing"><img src="images/resource/project1-5.jpg" alt="Image"/></Link></figure>
                </div>
                <div className="content-box">
                  <Link href="Warehousing" className="theme-btn read-more"><i className="far fa-arrow-up"></i></Link><br/>
                  <h4 className="title"><Link href="Warehousing">Warehousing</Link></h4>
                  <span className="cat">Skander Global</span>
                </div>
                <div className="overlay-1"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="project-block">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><Link href="Cross-Border"><img src="images/resource/project1-6.jpg" alt="Image"/></Link></figure>
                </div>
                <div className="content-box">
                  <Link href="Cross-Border" className="theme-btn read-more"><i className="far fa-arrow-up"></i></Link><br/>
                  <h4 className="title"><Link href="Cross-Border">Cross Border Services</Link></h4>
                  <span className="cat">Skander Global</span>
                </div>
                <div className="overlay-1"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="project-block">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><Link href="Cross-Docking"><img src="images/resource/project1-1.jpg" alt="Image"/></Link></figure>
                </div>
                <div className="content-box">
                  <Link href="Cross-Docking" className="theme-btn read-more"><i className="far fa-arrow-up"></i></Link><br/>
                  <h4 className="title"><Link href="Cross-Docking">Cross Docking</Link></h4>
                  <span className="cat">Skander Global</span>
                </div>
                <div className="overlay-1"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="project-block">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><Link href="Reverse-Logistics"><img src="images/resource/project1-2.jpg" alt="Image"/></Link></figure>
                </div>
                <div className="content-box">
                  <Link href="Reverse-Logistics" className="theme-btn read-more"><i className="far fa-arrow-up"></i></Link><br/>
                  <h4 className="title"><Link href="Reverse-Logistics">Reverse Logistics</Link></h4>
                  <span className="cat">Skander Global</span>
                </div>
                <div className="overlay-1"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="project-block">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image"><Link href="Consolidation"><img src="images/resource/project1-3.jpg" alt="Image"/></Link></figure>
                </div>
                <div className="content-box">
                <Link href="Consolidation" className="theme-btn read-more"><i className="far fa-arrow-up"></i></Link><br/>
                <h4 className="title"><Link href="Consolidation">Freight Consolidation </Link></h4>
                <span className="cat">Skander Global</span>
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
