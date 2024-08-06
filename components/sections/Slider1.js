import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    loop: true,
    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },
    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
}

export default function Slider1() {
  return (
    <>
      <section className="banner-section main-slider">
        <div className="icon-big-arrow"></div>
        <Swiper {...swiperOptions} className="tp-dottedoverlay on banner-carousel">
          {/* Slide Item */}
          <SwiperSlide className="slide-item">
            <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/1.jpg)' }}></div>
            <div className="auto-container">
              <div className="row">
                <div className="content-column col-lg-7">
                  <div className="content-box">
                    <div className="icon-plane-1 bounce-x"></div>
                    <div className="sub-title">Fast and Reliable Track Loads</div>
                    <h2 className="title animate-3">Brokerage <br/> with Effective <br/> Pricing</h2>
                    <div className="btn-box animate-4">
                      <Link href="/page-contact" className="theme-btn btn-style-one alternate"><span className="btn-title">Request a Quote <i className="icon fa fa-long-arrow-right"></i></span></Link>
                    </div>
                  </div>
                </div>
                <div className="image-column col-lg-5">
                  <div className="image-box">
                    <figure className="image animate-5 animate-x"><img src="/images/main-slider/bus.png" alt=""/></figure>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slide Item */}
          <SwiperSlide className="slide-item">
            <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/2.png)' }} />
            <div className="auto-container">
              <div className="row">
                <div className="content-column col-lg-7">
                  <div className="content-box">
                    <div className="icon-plane-1 bounce-x"></div>
                    <div className="sub-title">Container Shipping</div>
                    <h2 className="title animate-3">Reliable and Fast <br/> Sea Freight<br/> Logistics</h2>
                    <div className="btn-box animate-4">
                      <Link href="/page-contact" className="theme-btn btn-style-one alternate"><span className="btn-title">Request a Quote <i className="icon fa fa-long-arrow-right"></i></span></Link>
                    </div>
                  </div>
                </div>
                <div className="image-column col-lg-5">
                  <div className="image-box">
                    <figure className="image animate-5 animate-x"><img src="/images/main-slider/ship.png" alt=""/></figure>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}
