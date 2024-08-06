import Link from "next/link";

const Services3 = () => {
  return (
    <>
    <section className="services-section-three">
      <div className="auto-container">
        <div className="row"> 
          <div className="sec-title-outer col-lg-6">
            <div className="icon-plane-7 bounce-x"></div>
            <div className="sec-title"> <span className="sub-title">What We Do</span>
              <h2 className="words-slide-up text-split">We offers cost <br/>effecient Transport <br/>shipping</h2>
            </div>
          </div>
          <div className="service-block-three col-lg-3 col-sm-6">
            <div className="inner-box">
              <div className="icon-box"><i className="icon flaticon-trolley-3"></i></div>
              <div className="count">01</div>
              <h6 className="title"><Link href="page-service-details">Airplane Fright</Link></h6>
              <div className="text">We offer end-to-end logistics tailored for specific markets. providing solutions</div>
            </div>
          </div>
          <div className="service-block-three col-lg-3 col-sm-6">
            <div className="inner-box">
              <div className="icon-box"><i className="icon flaticon-worldwide-shipping-1"></i></div>
              <div className="count">02</div>
              <h6 className="title"><Link href="page-service-details">Ocean Fright</Link></h6>
              <div className="text">We offer end-to-end logistics tailored for specific markets. providing solutions</div>
            </div>
          </div>
          <div className="service-block-three col-lg-3 col-sm-6">
            <div className="inner-box">
              <div className="icon-box"><i className="icon flaticon-worldwide-shipping-1"></i></div>
              <div className="count">03</div>
              <h6 className="title"><Link href="page-service-details">Road Fright</Link></h6>
              <div className="text">We offer end-to-end logistics tailored for specific markets. providing solutions</div>
            </div>
          </div>
          <div className="service-block-three col-lg-3 col-sm-6">
            <div className="inner-box">
              <div className="icon-box"><i className="icon flaticon-worldwide-shipping-1"></i></div>
              <div className="count">04</div>
              <h6 className="title"><Link href="page-service-details">Warehouse</Link></h6>
              <div className="text">We offer end-to-end logistics tailored for specific markets. providing solutions</div>
            </div>
          </div>
          <div className="image-column col-lg-6">
            <div className="inner-column">
              <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/13.jpg)' }}></div>
              <div className="overlay-5"></div>
              <div className="content"> <span className="sub-title">Have you any question ?</span>
                <h3 className="title ">Don't Waste a <br/>Second! Call Us </h3>
                <Link href="tel:+3655540069" className="info-btn"> <i className="fa fa-headphones"></i> <small>Make a Call</small> <strong>+36 55 540 069</strong> </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Services3
