import Link from "next/link";

const Banner = () => {
    return (
        <>

<section className="banner-section">
    <div className="bg bg-image" style={{ backgroundImage: 'url(images/banner/2.jpg)' }}></div>
    <div className="bg bg-pattern-5"></div>
    <div className="icon-shape"></div>
    <div className="auto-container">
      <div className="row"> 
        <div className="content-column col-xl-7">
          <div className="inner-column">
            <span className="sub-title wow fadeInUp" data-wow-delay="300ms">100% Trusted & Secure </span>
            <h1 className="title wow fadeInUp" data-wow-delay="600ms">Logistics & <br/>Transport</h1>
          </div>
          <Link href="tel:+3655540069" className="info-btn-two wow fadeInUp" data-wow-delay="1200ms"> <i className="icon fa fa-phone"></i> <small>Make a Call</small> <strong>+36 55 540 069</strong> </Link>
        </div>
      </div>
    </div>
  </section>
        </>
    );
};
export default Banner
