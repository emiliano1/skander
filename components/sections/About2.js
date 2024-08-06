import Link from "next/link";

const About2 = () => {
    return (
        <>

<section className="about-section-two">
    <div className="icon-plane-4 bounce-y"></div>
    <div className="icon-container bounce-x"></div>
    <div className="auto-container">
      <div className="outer-box">
        <div className="row"> 
          
          <div className="content-column col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="300ms">
            <div className="inner-column">
              <div className="sec-title"> <span className="sub-title">Who we are</span>
                <h2 className="words-slide-up text-split">Leading the Future of <br/>Logistics</h2>
              </div>
              <div className="text two">
              <Link href="/page-contact">Our operations span the globe, providing top-tier logistics solutions across various transportation sectors.</Link>
              </div>
              <div className="text">With state-of-the-art facilities and strategic locations, Skander Global delivers unparalleled service, efficiency, and value. We offer end-to-end logistics tailored for specific markets, ensuring precise and efficient operations.</div>
              <div className="row"> 

                <div className="about-block col-md-6">
                  <div className="inner"> <i className="icon flaticon-worldwide-shipping-1"></i>
                    <h4 className="title"><Link href="#">Safe & Secure Delivery</Link></h4>
                    <div className="text">Round-the-clock security measures and comprehensive solutions ensure your goods are always safe with us.</div>
                  </div>
                </div>
                
                <div className="about-block col-md-6">
                  <div className="inner"> <i className="icon flaticon-trolley-3"></i>
                    <h4 className="title"><Link href="#">Professional Services</Link></h4>
                    <div className="text">We partner with top 3PL and logistics firms to enhance our service offerings and ensure nationwide coverage.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="image-column col-lg-6 wow fadeInLeft">
            <div className="inner-column wow fadeInLeft">
              <div className="image-box">
                <figure className="image overlay-anim"><img src="/images/resource/about2-1.jpg" alt="Image"/></figure>
                <figure className="image-2 overlay-anim"><img src="/images/resource/about2-2.jpg" alt="Image"/></figure>
                <figure className="image-3 overlay-anim"><img src="/images/resource/about2-3.jpg" alt="Image"/></figure>
                <figure className="image-4 wow fadeIn"><img src="/images/resource/about2-4.png" alt="Image"/></figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bottom-box">
      <div className="auto-container">
        <div className="inner-box">
        <p className="text">We provide comprehensive assistance in freight and warehousing. <br/><Link href="page-contact.html">Request A Quote</Link></p>
          <div className="btn-box">
            <i className="icon fa fa-phone"></i>
            <Link href="tel:+18004934922" className="theme-btn btn-style-one hover-dark"><span className="btn-title">+(528) 456-7592</span></Link>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    );
};
export default About2
