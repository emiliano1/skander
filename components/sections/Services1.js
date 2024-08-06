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

export default function Services1() {
    return (
        <>

            <section className="services-section">
                <div className="icon-plane-2 bounce-y"></div>
                <div className="auto-container">
                    <div className="sec-title text-center"> <span className="sub-title">What We Do</span>
                        <h2 className="words-slide-up text-split">We offers cost effective <br/>Logistical Services</h2>
                    </div>
                        {/* service Column */}
                    <Swiper {...swiperOptions} className="services-carousel home1-style">
                        {/* service Block */}
                        <SwiperSlide className="service-block">
                            <div className="inner-box">
                                <div className="image-box">
                                <figure className="image"><Link href="Freight-Brokerage"><img src="/images/resource/service1-3.jpg" alt="Image"/></Link></figure>
                                <Link href="Freight-Brokerage" className="theme-btn read-more">Learn more <i className="fa fa-arrow-up"></i></Link>
                                </div>
                                <div className="content-box">
                                    <div className="info-box"> <i className="icon flaticon-cargo-boat"></i>
                                        <h6 className="title"><Link href="Freight-Brokerage">Track<br/>Loads</Link></h6>
                                    </div>
                                    <div className="inner">
                                        <div className="text">Optimizing freight transportation is critical for businesses aiming to enhance their supply chain efficiency and reduce costs.</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* service Block */}
                        <SwiperSlide className="service-block">
                            <div className="inner-box">
                                <div className="image-box">
                                <figure className="image"><Link href="First-and-Final-Mile"><img src="/images/resource/service1-8.jpg" alt="Image"/></Link></figure>
                                <Link href="First-and-Final-Mile" className="theme-btn read-more">Learn more <i className="fa fa-arrow-up"></i></Link>
                                </div>
                                <div className="content-box">
                                    <div className="info-box"> <i className="icon flaticon-cargo-boat"></i>
                                        <h6 className="title"><Link href="First-and-Final-Mile">First & Last Mile<br/>Freight</Link></h6>
                                    </div>
                                    <div className="inner">
                                        <div className="text">We offer end-to-end logistics tailored for specific markets. providing solution</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* service Block */}
                        <SwiperSlide className="service-block">
                            <div className="inner-box">
                                <div className="image-box">
                                <figure className="image"><Link href="Warehousing"><img src="/images/resource/service1-9.jpg" alt="Image"/></Link></figure>
                                <Link href="Warehousing" className="theme-btn read-more">Learn more <i className="fa fa-arrow-up"></i></Link>
                                </div>
                                <div className="content-box">
                                    <div className="info-box"> <i className="icon flaticon-cargo-boat"></i>
                                        <h6 className="title"><Link href="Warehousing">Expedited <br/> Freight</Link></h6>
                                    </div>
                                    <div className="inner">
                                        <div className="text">We offer end-to-end logistics tailored for specific markets. providing solution</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* service Block */}
                        <SwiperSlide className="service-block">
                            <div className="inner-box">
                                <div className="image-box">
                                <figure className="image"><Link href="Cross-Border"><img src="/images/resource/service1-2.jpg" alt="Image"/></Link></figure>
                                <Link href="Cross-Border" className="theme-btn read-more">Learn more <i className="fa fa-arrow-up"></i></Link>
                                </div>
                                <div className="content-box">
                                    <div className="info-box"> <i className="icon flaticon-cargo-boat"></i>
                                        <h6 className="title"><Link href="Cross-Border">Ocean<br/>Freight</Link></h6>
                                    </div>
                                    <div className="inner">
                                        <div className="text">Efficient and reliable cross-border logistics are essential for businesses looking to expand their reach and streamline their supply chain operations.</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}
