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
    <p>Efficient customs brokerage is essential for businesses involved in international trade. Our Customs Brokerage Services are designed to simplify the complexities of cross-border shipments, ensuring your goods clear customs smoothly and swiftly. We provide comprehensive solutions to handle all aspects of customs clearance, reducing delays and ensuring compliance with international regulations.</p>
    <p>Leveraging our extensive experience and advanced technology, we manage the entire customs brokerage process, from documentation and tariff classification to duty payment and regulatory compliance. Our tailored solutions ensure your shipments move seamlessly through customs, minimizing disruptions and enhancing the efficiency of your supply chain.</p>
    <div className="content mt-40">
      <div className="text">
        <h3>Service Center</h3>
        <p>Our service centers are strategically located to facilitate efficient customs clearance. Staffed by experienced professionals and equipped with the latest technology, we ensure that every shipment is handled with precision and care, providing you with reliable customs brokerage solutions.</p>
        <blockquote className="blockquote-one">"Our Customs Brokerage Services are designed to streamline your international trade operations, ensuring efficient and compliant customs clearance for all your shipments." - Skander Global Team</blockquote>
      </div>
      <div className="feature-list mt-4">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-6 col-sm-12 column">
            <img className="mb-3" src="images/resource/service-d1.jpg" alt="Nationwide Customs Brokerage Services" />
            <p>Offering comprehensive customs brokerage services across the nation, we ensure your goods clear customs efficiently, supporting your domestic and international trade operations.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 column">
            <img className="mb-3" src="images/resource/service-d2.jpg" alt="International Customs Brokerage Services" />
            <p>Our international customs brokerage services are designed to facilitate smooth and compliant customs clearance for shipments worldwide, enhancing your global logistics operations.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="innerpage mt-25">
      <h3>Frequently Asked Questions</h3>
      <p>Discover answers to common questions about our Customs Brokerage Services. We are committed to providing the information you need to leverage our comprehensive solutions effectively.</p>
      <ul className="accordion-box wow fadeInRight">
        <li className="accordion block">
          <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
            What are Customs Brokerage Services?
            <div className="icon fa fa-plus"></div>
          </div>
          <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
            <div className="content">
              <div className="text">Customs Brokerage Services involve managing the process of clearing goods through customs, including documentation, tariff classification, duty payment, and regulatory compliance, ensuring smooth and efficient cross-border shipments.</div>
            </div>
          </div>
        </li>
        <li className="accordion block">
          <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
            How can Customs Brokerage Services benefit my business?
            <div className="icon fa fa-plus"></div>
          </div>
          <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
            <div className="content">
              <div className="text">Customs Brokerage Services can significantly enhance your international trade operations by ensuring compliance with regulations, reducing delays, and minimizing the risk of fines and penalties, thereby streamlining your supply chain.</div>
            </div>
          </div>
        </li>
        <li className="accordion block">
          <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
            How does Skander Global ensure efficient customs clearance?
            <div className="icon fa fa-plus"></div>
          </div>
          <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
            <div className="content">
              <div className="text">We utilize advanced technology, experienced customs brokers, and a deep understanding of international regulations to manage the customs clearance process efficiently, ensuring your shipments move smoothly across borders.</div>
            </div>
          </div>
        </li>
        <li className="accordion block">
          <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
            Can you handle complex international customs regulations?
            <div className="icon fa fa-plus"></div>
          </div>
          <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
            <div className="content">
              <div className="text">Yes, we have the expertise and resources to navigate complex international customs regulations, ensuring compliance and smooth clearance for your shipments. Our team is experienced in managing diverse regulatory requirements across different countries.</div>
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
