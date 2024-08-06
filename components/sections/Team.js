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
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
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

export default function Team() {
  return (
  <>
  <section className="team-section">
    <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/16.jpg)' }}></div>
    <div className="float-image"><img src="/images/resource/float-img-3.png" alt="Image"/></div>

    <div className="auto-container">
      <div className="sec-title text-center"> <span className="sub-title">Our Leadership</span>
        <h2 className="words-slide-up text-split">Experienced Logistics Team</h2>
      </div>
      <div className="outer-box">
        <Swiper {...swiperOptions} className="team-carousel home3-style">
          <SwiperSlide className="team-block">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="page-team-details"><img src="/images/resource/team1-1.jpg" alt="Image"/></Link></figure>
                <div className="info-box">
                  <h4 className="name"><Link href="page-team-details">Christian Debejna</Link></h4>
                  <span className="designation">Chief Executive Officer</span> <span className="share-icon fa fa-share-alt"></span>
                  <div className="social-links">
                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                    <Link href="#"><i className="fab fa-instagram"></i></Link>
                    <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="team-block">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="page-team-details"><img src="/images/resource/team1-2.jpg" alt="Image"/></Link></figure>
              </div>
              <div className="info-box">
                <h4 className="name"><Link href="page-team-details">Emiliano Qaqi</Link></h4>
                <span className="designation">Chief Technology Officer</span> <span className="share-icon fa fa-share-alt"></span>
                <div className="social-links">
                  <Link href="#"><i className="fab fa-twitter"></i></Link>
                  <Link href="#"><i className="fab fa-instagram"></i></Link>
                  <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
  </>
  )
}
