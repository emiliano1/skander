import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
import Link from 'next/link'

export default function WhyChooseUs3() {
  return (
    <>

    <section className="why-choose-us-three pt-0">
      <div className="icon-plane-4 bounce-y"></div>
      <div className="auto-container">
        <div className="outer-box">
          <div className="row"> 
            <div className="content-column col-xl-5 col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="300ms">
              <div className="inner-column">
                <div className="sec-title"> <span className="sub-title">why us?</span>
                  <h2 className="words-slide-up text-split">The complete solution for all kind of transport</h2>
                </div>
                <div className="row"> 
                  <div className="exp-box col-lg-5 col-sm-4">
                    <div className="inner">
                      <h1 className="count"><CounterUp count={20} time={3} /></h1>
                      <h6>Years Of <br/>Experience</h6>
                    </div>
                  </div>
                  <div className="blocks-column col-lg-7 col-sm-8"> 
                    <div className="choose-block">
                      <div className="inner-box"> <i className="icon flaticon-trolley-2"></i>
                        <div className="content">
                          <h5 className="title">Easy Payments</h5>
                          <div className="text">We strongly support best <br/>practice sharing across</div>
                        </div>
                      </div>
                    </div>
                    <div className="choose-block">
                      <div className="inner-box"> <i className="icon flaticon-cargo-1"></i>
                        <div className="content">
                          <h5 className="title">End to End Solutions</h5>
                          <div className="text">We strongly support best <br/>practice sharing across</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-column col-xl-7 col-lg-6">
              <div className="inner-column">
                <div className="image-box">
                  <figure className="image overlay-anim"><img src="/images/resource/choose3-1.jpg" alt="Image"/></figure>
                  <figure className="image-2 overlay-anim"><img src="/images/resource/choose3-2.jpg" alt="Image"/></figure>
                  <div className="info-box wow fadeIn" data-wow-delay="300ms">
                    <div className="icon-box"><i className="icon flaticon-air"></i></div>
                    <h6 className="title">Professional Logistic & Transport</h6>
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
