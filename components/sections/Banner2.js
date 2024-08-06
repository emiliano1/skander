import Link from "next/link";

const Banner2 = () => {
  return (
    <>
    <section className="banner-section-two">
      <div className="bg bg-image" style={{ backgroundImage: 'url(images/banner/3.jpg)' }}></div>
      <div className="overlay-6"></div>
      <div className="icon-dots-2"></div>
      <div className="float-image reveal"><img src="/images/resource/float-img-4.png" alt="Image"/></div>
      <div className="auto-container">
        <div className="row"> 
          <div className="content-column col-xl-7">
            <div className="inner-column">
              <span className="sub-title wow fadeInUp" data-wow-delay="300ms">Fast and reliable shipping </span>
              <h1 className="title wow fadeInUp" data-wow-delay="600ms">Professional <br/>Solutions for the <br/>Global Shipping</h1>
              <Link href="page-contact" className="theme-btn btn-style-one light-bg wow fadeInUp" data-wow-delay="900ms">
                <span className="btn-title">Request a Quote <i className="fa fa-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Banner2