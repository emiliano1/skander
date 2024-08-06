import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 2,
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
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
  }
};

export default function Testimonial2() {
  return (
  <>

  <section className="testimonial-section-two">
    <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/10.jpg)' }}></div>
    <div className="auto-container">
      <div className="carousel-outer">
        <Swiper {...swiperOptions} className="testimonial-carousel-three">
          <SwiperSlide className="testimonial-block-two">
            <div className="inner-box">
              <div className="image-box">
                <figure className="thumb"><img src="/images/resource/testi2-1.jpg" alt="Image"/></figure>
                <div className="icon-quote"></div>
              </div>
              <div className="content-box">
                <h6 className="reason">Great Service</h6>
                <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                <div className="text">Build and implement innovative, profitable and sustainable products and services that help</div>
                <h6 className="name">Mark Wood</h6>
                <span className="designation">CEO, Buzicon</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testimonial-block-two">
            <div className="inner-box">
              <div className="image-box">
                <figure className="thumb"><img src="/images/resource/testi2-1.jpg" alt="Image"/></figure>
                <div className="icon-quote"></div>
              </div>
              <div className="content-box">
                <h6 className="reason">Great Service</h6>
                <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                <div className="text">Build and implement innovative, profitable and sustainable products and services that help</div>
                <h6 className="name">Mark Wood</h6>
                <span className="designation">CEO, Buzicon</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="testimonial-block-two">
            <div className="inner-box">
              <div className="image-box">
                <figure className="thumb"><img src="/images/resource/testi2-1.jpg" alt="Image"/></figure>
                <div className="icon-quote"></div>
              </div>
              <div className="content-box">
                <h6 className="reason">Great Service</h6>
                <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                <div className="text">Build and implement innovative, profitable and sustainable products and services that help</div>
                <h6 className="name">Mark Wood</h6>
                <span className="designation">CEO, Buzicon</span>
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
