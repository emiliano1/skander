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

export default function Testimonial1() {
	return (
		<>
			<section className="testimonial-section">
				<div className="bg bg-image" style={{ backgroundImage: 'url(images/background/5.jpg)' }}></div>
				<div className="auto-container">
					<div className="sec-title text-center"> <span className="sub-title">testimonials</span>
						<h2 className="words-slide-up text-split">What say peoples<br/>about us</h2>
					</div>
					<div className="carousel-outer">
						<Swiper {...swiperOptions} className="testimonial-carousel-two home1-style">
							<SwiperSlide className="testimonial-block">
								<div className="inner-box">
									<figure className="thumb"><img src="/images/resource/testi1-1.jpg" alt="Image"/></figure>
									<h6 className="reason">Great Service</h6>
									<div className="rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
									</div>
									<div className="text">Build and implement innovative, profitable and sustainable products and services that help</div>
									<div className="info-box">
										<h6 className="name">Mark Wood</h6>
										<span className="designation">CEO, Buzicon</span>
									</div>
									<div className="icon-quote-2"></div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="testimonial-block">
								<div className="inner-box">
									<figure className="thumb"><img src="/images/resource/testi1-2.jpg" alt="Image"/></figure>
									<h6 className="reason">Great Service</h6>
									<div className="rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
									</div>
									<div className="text">Build and implement innovative, profitable and sustainable products and services that help</div>
									<div className="info-box">
										<h6 className="name">Mark Wood</h6>
										<span className="designation">CEO, Buzicon</span>
									</div>
									<div className="icon-quote-2"></div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="testimonial-block">
								<div className="inner-box">
									<figure className="thumb"><img src="/images/resource/testi1-3.jpg" alt="Image"/></figure>
									<h6 className="reason">Great Service</h6>
									<div className="rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
									</div>
									<div className="text">Build and implement innovative, profitable and sustainable products and services that help</div>
									<div className="info-box">
										<h6 className="name">Mark Wood</h6>
										<span className="designation">CEO, Buzicon</span>
									</div>
									<div className="icon-quote-2"></div>
								</div>
							</SwiperSlide>
							<SwiperSlide className="testimonial-block">
								<div className="inner-box">
									<figure className="thumb"><img src="/images/resource/testi1-1.jpg" alt="Image"/></figure>
									<h6 className="reason">Great Service</h6>
									<div className="rating">
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
										<i className="fa fa-star"></i>
									</div>
									<div className="text">Build and implement innovative, profitable and sustainable products and services that help</div>
									<div className="info-box">
										<h6 className="name">Mark Wood</h6>
										<span className="designation">CEO, Buzicon</span>
									</div>
									<div className="icon-quote-2"></div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</section>
		</>
	)
}
