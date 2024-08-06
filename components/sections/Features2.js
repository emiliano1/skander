import Link from 'next/link';

const Features2 = () => {  
  const data = [
  {
      icon:"icon flaticon-logistics-1",
      title:"Real Time Tracking"
  },
  {
      icon:"icon flaticon-truck",
      title:"Security for Cargo"
  },
  {
      icon:"icon flaticon-fast-delivery",
      title:"End to End Solutions"
  },
  {
      icon:"icon flaticon-order",
      title:"On time delivery"
  },
  {
      icon:"icon flaticon-delivery-courier",
      title:"One Step Solutions"
  },
  {
      icon:"icon flaticon-container",
      title:"Worldwide Transport"
  }
];
    return (
        <>
              <section className="features-section-two">
                  <div className="icon-dots"></div>
                  <div className="icon-dotted-map"></div>
                  <div className="icon-plane-2 bounce-y"></div>
                  <div className="auto-container">
                    <div className="sec-title text-center"> <span className="sub-title">Professional</span>
                      <h2 className="words-slide-up text-split"> Helping businesses to find <br/>transport solutions</h2>
                    </div>
                    <div className="row">
                            
                      <div className="content-column col-lg-6 order-lg-2 wow fadeInRight">
                        <div className="inner-column">
                          <div className="row"> 
                          {data.map((item, i) => (
                            <div key={i} className="feature-block-three col-sm-6">
                              <div className="inner-box">
                                <div className="icon-box"><i className={item.icon}></i></div>
                                <div className="content">
                                  <h6 className="title"><Link href="/page-about">{item.title}</Link></h6>
                                </div>
                              </div>
                            </div>))}
                          </div>
                          <div className="text">We Provide Full Assistance in Freight and Warehousing. <a href="#">Know More</a></div>
                        </div>
                      </div>     
                      <div className="image-column col-lg-6 wow fadeInLeft">
                        <div className="inner-column">
                          <div className="image-box">
                            <figure className="image"><img src="/images/resource/feature2-1.png" alt="Image"/></figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </section>
        
        </>
    );
};

export default Features2;