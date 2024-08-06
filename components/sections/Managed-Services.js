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
    <p>Skander Global’s Managed Logistics Services are designed to streamline and optimize your supply chain operations, both nationwide and internationally. Our comprehensive logistics solutions ensure that every aspect of your logistics needs is handled with precision and efficiency, allowing you to focus on your core business activities.</p>
    <p>Leveraging advanced technology and a vast network of logistics partners, we manage the entire logistics process from planning and execution to monitoring and optimization. Our services are tailored to meet the unique demands of each client, ensuring that your logistics operations run smoothly, whether you are shipping domestically or globally.</p>
    <div className="content mt-40">
      <div className="text">
        <h3>Service Center</h3>
        <p>Our service centers are equipped with state-of-the-art technology to provide efficient and reliable logistics management. Our experienced team ensures that every shipment is managed with the highest level of care and attention, delivering superior logistics solutions.</p>
        <blockquote className="blockquote-one">"Our Managed Logistics Services are crafted to deliver seamless and efficient supply chain solutions, both domestically and internationally, ensuring that your business operates at its highest potential." - Skander Global Team</blockquote>
      </div>
      <div className="feature-list mt-4">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-6 col-sm-12 column">
            <img className="mb-3" src="images/resource/service-d1.jpg" alt="Nationwide Logistics" />
            <p>We provide comprehensive logistics management services across the nation, ensuring efficient and timely delivery of goods to every corner of the country.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 column">
            <img className="mb-3" src="images/resource/service-d2.jpg" alt="International Logistics" />
            <p>Our international logistics services are designed to facilitate global trade, offering reliable and efficient transportation solutions to and from any location worldwide.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="innerpage mt-25">
      <h3>Frequently Asked Questions</h3>
      <p>Find answers to some of the most common questions about our Managed Logistics Services. We aim to provide you with all the information you need to leverage our comprehensive logistics solutions.</p>
      <ul className="accordion-box wow fadeInRight">
        <li className="accordion block">
          <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
            What are Managed Logistics Services?
            <div className="icon fa fa-plus"></div>
          </div>
          <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
            <div className="content">
              <div className="text">Managed Logistics Services involve overseeing and optimizing the entire logistics process, from planning and execution to monitoring and improvement. This ensures efficient and reliable transportation of goods.</div>
            </div>
          </div>
        </li>
        <li className="accordion block">
          <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
            How does Skander Global manage nationwide logistics?
            <div className="icon fa fa-plus"></div>
          </div>
          <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
            <div className="content">
              <div className="text">We utilize advanced logistics technology and a network of trusted partners to manage nationwide logistics. Our services ensure timely and efficient delivery of goods across the country, meeting the specific needs of each client.</div>
            </div>
          </div>
        </li>
        <li className="accordion block">
          <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
            What international logistics services does Skander Global offer?
            <div className="icon fa fa-plus"></div>
          </div>
          <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
            <div className="content">
              <div className="text">Skander Global offers a full range of international logistics services, including freight forwarding, customs brokerage, and transportation management. Our services ensure smooth and efficient global trade operations.</div>
            </div>
          </div>
        </li>
        <li className="accordion block">
          <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
            How does Skander Global ensure efficient logistics management?
            <div className="icon fa fa-plus"></div>
          </div>
          <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
            <div className="content">
              <div className="text">We employ advanced logistics technology, experienced professionals, and a robust network of partners to ensure efficient management of logistics. Our approach focuses on optimizing every aspect of the supply chain to deliver superior results.</div>
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
