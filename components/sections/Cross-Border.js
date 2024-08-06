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
    <h3 className="mt-4">Service Overview</h3>
    <p>Efficient and reliable cross-border logistics are essential for businesses looking to expand their reach and streamline their supply chain operations. Our Cross-Border Services are designed to simplify the complexities of international shipping, ensuring that your goods move seamlessly across borders with minimal delays and maximum efficiency.</p>
    <p>Leveraging our extensive network and advanced logistics technology, we manage every aspect of cross-border transportation, from customs clearance to final delivery. Our tailored solutions ensure compliance with international regulations, reducing the risk of delays and enhancing the overall efficiency of your supply chain.</p>
    <div className="content mt-40">
      <div className="text">
        <h3>Service Center</h3>
        <p>Our service centers are strategically located and equipped with the latest technology to support comprehensive cross-border logistics services. Our experienced team of professionals ensures that each shipment is handled with care and precision, facilitating smooth and efficient international transportation.</p>
        <blockquote className="blockquote-one">"Our Cross-Border Services are designed to streamline your international logistics operations, ensuring efficient and reliable transportation of goods across borders." - Skander Global Team</blockquote>
      </div>
      <div className="feature-list mt-4">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-6 col-sm-12 column">
            <img className="mb-3" src="images/resource/service-d1.jpg" alt="Nationwide Cross-Border Services" />
            <p>We provide comprehensive cross-border logistics services across the nation, ensuring efficient and reliable transportation of goods to and from international destinations.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 column">
            <img className="mb-3" src="images/resource/service-d2.jpg" alt="International Cross-Border Services" />
            <p>Our international cross-border services are designed to support your global logistics needs, ensuring smooth and efficient transportation of goods across borders worldwide.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="innerpage mt-25">
      <h3>Frequently Asked Questions</h3>
      <p>Discover answers to common questions about our Cross-Border Services. We are committed to providing the information you need to leverage our comprehensive solutions effectively.</p>
      <ul className="accordion-box wow fadeInRight">
        <li className="accordion block">
          <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
            What are Cross-Border Services?
            <div className="icon fa fa-plus"></div>
          </div>
          <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
            <div className="content">
              <div className="text">Cross-Border Services involve the transportation of goods across international borders, including customs clearance, compliance with international regulations, and final delivery. These services ensure that goods move seamlessly between countries.</div>
            </div>
          </div>
        </li>
        <li className="accordion block">
          <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
            How can Cross-Border Services benefit my business?
            <div className="icon fa fa-plus"></div>
          </div>
          <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
            <div className="content">
              <div className="text">Cross-Border Services can significantly enhance your supply chain efficiency by reducing transit times, ensuring compliance with international regulations, and minimizing the risk of delays and disruptions.</div>
            </div>
          </div>
        </li>
        <li className="accordion block">
          <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
            How does Skander Global ensure efficient cross-border transportation?
            <div className="icon fa fa-plus"></div>
          </div>
          <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
            <div className="content">
              <div className="text">We leverage advanced logistics technology, a robust international network, and experienced professionals to manage every aspect of cross-border transportation, ensuring efficient and reliable delivery of goods across borders.</div>
            </div>
          </div>
        </li>
        <li className="accordion block">
          <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
            Can you handle complex international regulations?
            <div className="icon fa fa-plus"></div>
          </div>
          <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
            <div className="content">
              <div className="text">Yes, we ensure compliance with all international regulations and customs requirements, minimizing the risk of delays and ensuring smooth cross-border transportation. Our team is experienced in navigating complex international logistics challenges.</div>
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
