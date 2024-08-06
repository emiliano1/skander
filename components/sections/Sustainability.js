import Link from "next/link";
import { useState } from "react";

const ServiceDetails = () => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  })

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      })
    } else {
      setIsActive({
        status: true,
        key,
      })
    }
  }

  return (
    <>

    <section className="services-details">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="service-sidebar">
              <div className="sidebar-widget service-sidebar-single">
                <div className="sidebar-service-list">
                  <ul>
                    <li><Link href="First-And-Final-Mile" className="current"><i className="fas fa-angle-right"></i><span>First and Last Mile </span></Link></li>
                    <li><Link href="Warehousing"><i className="fas fa-angle-right"></i><span>Warehousing</span></Link></li>
                    <li><Link href="Fulfillment-Services"><i className="fas fa-angle-right"></i><span>Fulfillment Services</span></Link></li>
                    <li><Link href="Cross-Docking"><i className="fas fa-angle-right"></i><span>Cross Docking</span></Link></li>
                    <li><Link href="Customs-Brokerage"><i className="fas fa-angle-right"></i><span>Customs Brokerage</span></Link></li>
                    <li><Link href="Cross-Border"><i className="fas fa-angle-right"></i><span>Cross Border</span></Link></li>
                  </ul>
                </div>

                <div className="service-details-help">
                  <div className="help-shape-1"></div>
                  <div className="help-shape-2"></div>
                  <h2 className="help-title">Request <br/> a <br/> Quote</h2>
                  <div className="help-icon">
                    <span className=" lnr-icon-phone-handset"></span>
                  </div>
                  <div className="help-contact">
                    <p>Talk to an expert now</p>
                    <Link href="tel:+18004934922">+1 (800) 493-4922</Link>
                  </div>
                </div>

                
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-8">
            <div className="services-details__content">
              <img src="/images/resource/service-details.jpg" alt="" />
              <h3 className="mt-4">Sustainable Future</h3>
              <p>Welcome to our commitment to sustainable logistics and transportation at Skander Global. We are dedicated to integrating eco-friendly practices that reduce environmental impact while enhancing operational efficiency.</p>
              <p>At Skander Global, sustainable logistics means implementing green technologies and innovative strategies across our supply chain. From optimizing transportation routes to embracing electric and hybrid vehicles, we prioritize reducing carbon footprints and promoting cleaner air quality in our communities.</p>
              <p>Our commitment extends to sustainable packaging solutions and responsible resource management, ensuring minimal waste and maximum efficiency. By embracing circular economy principles, we aim to reuse and recycle materials, contributing to a healthier planet for future generations.</p>
              <p>Join Skander Global in our mission to shape a greener future while delivering exceptional logistics solutions that meet environmental standards and exceed customer expectations.</p>
              <div className="content mt-40">
                <div className="text">
                  <h3>Sustainability in Action</h3>
                  <p>At Skander Global, we prioritize sustainability in logistics by focusing on carbon footprint reduction through optimized transport routes and the use of hybrid vehicles, alongside integrating renewable energy sources. We also embrace circular economy practices by minimizing waste and promoting sustainable packaging solutions. These efforts ensure ethical operations that reduce environmental impact and uphold our commitment to creating a sustainable future for all stakeholders. Join us in our mission towards responsible and eco-friendly logistics solutions.</p>
                </div>
                <div className="feature-list mt-4">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <img className="mb-3" src="images/resource/service-d1.jpg" alt="images" />
                      <h4>Carbon Footprint Reduction</h4>
                      <p>Implementing strategies to minimize greenhouse gas emissions through efficient transportation and energy use.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <img className="mb-3" src="images/resource/service-d2.jpg" alt="images" />
                      <h4>Circular Economy Practices</h4>
                      <p>Promoting reuse, recycling, and reducing waste within the supply chain to minimize environmental impact.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="innerpage mt-25">
                <h3>Frequently Asked Question</h3>
                <ul className="accordion-box wow fadeInRight">
                  <li className="accordion block">
                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
                    What is sustainable logistics?
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                      <div className="content">
                        <div className="text">Sustainable logistics involves implementing practices that minimize environmental impact throughout the supply chain. This includes reducing carbon emissions, optimizing transportation routes, and promoting eco-friendly packaging solutions to achieve long-term environmental and economic benefits.</div>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block">
                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
                    How does sustainable logistics benefit businesses?
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                      <div className="content">
                        <div className="text">Sustainable logistics can lead to cost savings through improved operational efficiency, reduced waste, and lower energy consumption. It also enhances brand reputation by demonstrating a commitment to environmental stewardship, attracting eco-conscious customers and investors.</div>
                      </div>
                    </div>
                  </li>
                   <li className="accordion block">
                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
                    What technologies are used in sustainable logistics?
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div  className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                      <div className="content">
                        <div className="text">Technologies such as route optimization software, electric and hybrid vehicles, renewable energy sources, and IoT (Internet of Things) devices for real-time tracking and monitoring play crucial roles in sustainable logistics. These innovations help minimize emissions and improve resource efficiency.</div>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block">
                    <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
                    What are the challenges of implementing sustainable logistics?
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div  className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                      <div className="content">
                        <div className="text">Challenges include initial investment costs in green technologies, regulatory compliance complexities across different regions, and overcoming traditional supply chain practices. However, businesses can overcome these challenges with strategic planning, partnerships with sustainable suppliers, and continuous innovation in logistics practices.</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
};
export default ServiceDetails
