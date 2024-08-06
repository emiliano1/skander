'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
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
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
  }
};

export default function Services2() {
  return (
  <>

  <section className="services-section-two">
    <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/6.jpg)' }}></div>
    <div className="auto-container">
      <div className="sec-title text-center"> <span className="sub-title">What We Do</span>
        <h2 className="words-slide-up text-split">We offers cost effecient <br/>Transport shipping</h2>
      </div>
      {/* Testimonial Column */}
      <Swiper {...swiperOptions} className="services-carousel home2-style">
        <SwiperSlide className="service-block-two">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-service-details"><img src="/images/resource/service2-1.jpg" alt="Image"/></Link></figure>
            </div>
            <div className="content-box">
              <div className="inner"> <i className="icon flaticon-cargo-boat"></i>
                <h6 className="title"><Link href="page-service-details">Sea Fright</Link></h6>
                <div className="text">We offer end-to-end logistics tailored for specific markets. providing solution</div>
              </div>
              <Link href="page-service-details" className="theme-btn btn-style-one dark-bg"><span className="btn-title">Learn more <i className="fal fa-long-arrow-right"></i></span></Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="service-block-two">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-service-details"><img src="/images/resource/service2-2.jpg" alt="Image"/></Link></figure>
            </div>
            <div className="content-box">
              <div className="inner"> <i className="icon flaticon-airplane-2"></i>
                <h6 className="title"><Link href="page-service-details">Airplane Fright</Link></h6>
                <div className="text">We offer end-to-end logistics tailored for specific markets. providing solution</div>
              </div>
              <Link href="page-service-details" className="theme-btn btn-style-one dark-bg"><span className="btn-title">Learn more <i className="fal fa-long-arrow-right"></i></span></Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="service-block-two">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-service-details"><img src="/images/resource/service2-3.jpg" alt="Image"/></Link></figure>
            </div>
            <div className="content-box">
              <div className="inner"> <i className="icon flaticon-shipment"></i>
                <h6 className="title"><Link href="page-service-details">Bus Fright</Link></h6>
                <div className="text">We offer end-to-end logistics tailored for specific markets. providing solution</div>
              </div>
              <Link href="page-service-details" className="theme-btn btn-style-one dark-bg"><span className="btn-title">Learn more <i className="fal fa-long-arrow-right"></i></span></Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="service-block-two">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-service-details"><img src="/images/resource/service2-4.jpg" alt="Image"/></Link></figure>
            </div>
            <div className="content-box">
              <div className="inner"> <i className="icon flaticon-airplane-2"></i>
                <h6 className="title"><Link href="page-service-details">Airplane Fright</Link></h6>
                <div className="text">We offer end-to-end logistics tailored for specific markets. providing solution</div>
              </div>
              <Link href="page-service-details" className="theme-btn btn-style-one dark-bg"><span className="btn-title">Learn more <i className="fal fa-long-arrow-right"></i></span></Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
  </>
  )
}
