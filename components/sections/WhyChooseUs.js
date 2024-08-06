import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
import Link from 'next/link'

export default function WhyChooseUs() {
    return (
        <>

        <section className="why-choose-us p-0">
          <div className="icon-big-bus bounce-x"></div>
          <div className="icon-dots-4"></div>
          <div className="auto-container">
            <div className="outer-box">
              <div className="row g-0"> 
                
                <div className="content-column col-lg-6 order-lg-2">
                  <div className="inner-column wow fadeInLeft">
                    <div className="sec-title"> <span className="sub-title">Logistics</span>
                      <h2 className="words-slide-up text-split">Supply Chain <br/> Services Globally</h2>
                      <div className="text">We ensure excellence across our global operations, offering reliable and efficient fulfillment services tailored to meet the needs of diverse industries. Our commitment to innovation and best practices guarantees timely and secure deliveries worldwide.</div>
                    </div>

                    <h6 className="title">Current Business Structure</h6>

                    <div className="skills"> 
                      <div className="skill-item">
                        <div className="skill-header">
                          <div className="skill-title">Warehousing</div>
                        </div>
                        <div className="skill-bar">
                          <div className="bar-inner">
                            <div className="bar progress-line" style={{width:"32%"}}>
                                <div className="skill-percentage">
                                    <div className="count-box">
                                        <CounterUp count={32} time={3} />
                                        %</div>

                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="skill-item">
                        <div className="skill-header">
                          <div className="skill-title">Logistics</div>
                        </div>
                        <div className="skill-bar">
                          <div className="bar-inner">
                              <div className="bar progress-line" style={{width:"68%"}}>
                                  <div className="skill-percentage">
                                      <div className="count-box">
                                          <CounterUp count={68} time={3} />
                                          %</div>

                                  </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Link href="tel:18004934922" className="info-btn"> <i className="icon fa fa-phone"></i> <small>Call for free</small> <strong>+1 (800) 493-4922</strong></Link>
                  </div>
                </div>
                
                <div className="features-column col-lg-6">
                  <div className="inner-column">
                    <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/2.jpg)' }}></div>
                    <div className="title-box">
                    <h2 className="title words-slide-up text-split">Tailored Logistics Solutions for Your Needs</h2>
                    </div>
                    
                    <div className="feature-block-five">
                      <div className="inner-box">
                        <div className="icon-box"><i className="icon flaticon-order"></i></div>
                        <div className="content-box">
                          <h6 className="title">Order Management</h6>
                          <div className="text">Our advanced order management systems ensure accuracy and efficiency across global operations, streamlining the logistics process.</div>
                          </div>
                      </div>
                    </div>
                    
                    <div className="feature-block-five">
                      <div className="inner-box">
                        <div className="icon-box"><i className="icon flaticon-stock"></i></div>
                        <div className="content-box">
                          <h6 className="title">Distribution & Fulfillment</h6>
                          <div className="text">We provide comprehensive distribution and fulfillment services, ensuring seamless inventory management and timely deliveries.</div>
                          </div>
                      </div>
                    </div>
                    
                    <div className="feature-block-five">
                      <div className="inner-box">
                        <div className="icon-box"><i className="icon flaticon-delivery-courier"></i></div>
                        <div className="content-box">
                          <h6 className="title">Custom Brokerage</h6>
                          <div className="text">Our expert customs brokerage services ensure smooth cross-border operations, minimizing delays and ensuring compliance.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}
