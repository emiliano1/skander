import Link from "next/link";

const Features = () => {
    return (
        <>

<section className="features-section pt-0">
    <div className="auto-container">
      <div className="row"> 
        
        {/* Block */}
        <div className="feature-block col-xl-4 col-md-6 wow fadeInUp">
          <div className="inner-box">
            <div className="icon-box"><i className="icon flaticon-search"></i></div>
            <div className="content">
              <h6 className="title"><Link href="page-about">Real-Time Tracking</Link></h6>
              <div className="text">Gain full visibility with our advanced real-time tracking technology, ensuring you know the exact status of your shipments at all times.</div>
            </div>
          </div>
        </div>
        
        {/* Block */}
        <div className="feature-block col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
          <div className="inner-box">
            <div className="icon-box"><i className="icon flaticon-air"></i></div>
            <div className="content">
              <h6 className="title"><Link href="page-about">Competitive Pricing</Link></h6>
              <div className="text">Our scalable logistics solutions offer competitive pricing without compromising on service quality, tailored to meet your budgetary needs.</div>
            </div>
          </div>
        </div>
        
        {/* Block */}
        <div className="feature-block col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
          <div className="inner-box">
            <div className="icon-box"><i className="icon flaticon-airplane-2"></i></div>
            <div className="content">
              <h6 className="title"><Link href="page-about">Cargo Security</Link></h6>
              <div className="text">Top-tier security protocols ensure your cargo is protected throughout the supply chain, minimizing risks and ensuring safe delivery.</div>
              </div>
          </div>
        </div>
        
        {/* Block */}
        <div className="feature-block col-xl-4 col-md-6 wow fadeInUp">
          <div className="inner-box">
            <div className="icon-box"><i className="icon flaticon-box"></i></div>
            <div className="content">
              <h6 className="title"><Link href="page-about">Flexible Payment Options</Link></h6>
              <div className="text">We offer a range of flexible payment options designed to make your logistics experience seamless and hassle-free.</div>
            </div>
          </div>
        </div>
        
        {/* Block */}
        <div className="feature-block col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
          <div className="inner-box">
            <div className="icon-box"><i className="icon flaticon-container"></i></div>
            <div className="content">
              <h6 className="title"><Link href="page-about">End-to-End Solutions</Link></h6>
              <div className="text">From origin to destination, our end-to-end logistics solutions cover every aspect of your supply chain, ensuring efficiency and reliability.</div>
            </div>
          </div>
        </div>
        
        {/* Block */}
        <div className="feature-block col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
          <div className="inner-box">
            <div className="icon-box"><i className="icon flaticon-delivery-courier"></i></div>
            <div className="content">
              <h6 className="title"><Link href="page-about">Sustainability & Responsibility</Link></h6>
              <div className="text">Committed to sustainable practices, ensuring logistics solutions impact environment and communities served.</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    );
};
export default Features;
