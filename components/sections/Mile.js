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
    <p>Our First and Last Mile Fulfillment services are designed to provide seamless, efficient, and reliable logistics solutions. We understand that these critical stages of the supply chain are vital for timely and accurate deliveries, and we excel in ensuring that your products reach their destination swiftly and securely.</p>
    <p>Our state-of-the-art facilities and advanced logistics technology enable us to manage the entire process with precision. From the moment goods leave the warehouse to their final delivery at the customer’s doorstep, we ensure a streamlined operation that minimizes delays and maximizes efficiency.</p>
    <div className="content mt-40">
      <div className="text">
        <h3>Service Center</h3>
        <p>Skander Global's service centers are equipped with cutting-edge technology to facilitate efficient First and Last Mile Fulfillment. Our dedicated team of professionals ensures that every package is handled with care and delivered on time.</p>
        <blockquote className="blockquote-one">"Our First and Last Mile Fulfillment services are engineered to meet the highest standards of efficiency and reliability, providing our clients with unparalleled logistics solutions." - Skander Global Team</blockquote>
      </div>
      <div className="feature-list mt-4">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-6 col-sm-12 column">
            <img className="mb-3" src="images/resource/service-d1.jpg" alt="First Mile Fulfillment" />
            <p>Our First Mile services ensure that your products leave the warehouse swiftly, ready for their journey to the end customer.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 column">
            <img className="mb-3" src="images/resource/service-d2.jpg" alt="Last Mile Fulfillment" />
            <p>Our Last Mile services guarantee that products are delivered promptly and efficiently to their final destination, ensuring customer satisfaction.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="innerpage mt-25">
      <h3>Frequently Asked Questions</h3>
      <p>Find answers to some of the most common questions about our First and Last Mile Fulfillment services. We aim to provide you with all the information you need to leverage our efficient logistics solutions.</p>
      <ul className="accordion-box wow fadeInRight">
        <li className="accordion block">
          <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
            What is First and Last Mile Fulfillment?
            <div className="icon fa fa-plus"></div>
          </div>
          <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
            <div className="content">
              <div className="text">First Mile Fulfillment involves the initial stage of the supply chain where products are picked up from the warehouse and prepared for transportation. Last Mile Fulfillment refers to the final stage where products are delivered to the end customer.</div>
            </div>
          </div>
        </li>
        <li className="accordion block">
          <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
            Why are First and Last Mile Fulfillment services important?
            <div className="icon fa fa-plus"></div>
          </div>
          <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
            <div className="content">
              <div className="text">First and Last Mile Fulfillment services are crucial as they directly impact delivery speed, customer satisfaction, and overall supply chain efficiency. Efficient management of these stages ensures timely and accurate deliveries.</div>
            </div>
          </div>
        </li>
        <li className="accordion block">
          <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
            How does Skander Global optimize First and Last Mile Fulfillment?
            <div className="icon fa fa-plus"></div>
          </div>
          <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
            <div className="content">
              <div className="text">Skander Global leverages advanced logistics technology, strategic location facilities, and a highly trained team to optimize First and Last Mile Fulfillment. This ensures quick, efficient, and reliable deliveries.</div>
            </div>
          </div>
        </li>
        <li className="accordion block">
          <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
            Can Skander Global handle high-volume shipments?
            <div className="icon fa fa-plus"></div>
          </div>
          <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
            <div className="content">
              <div className="text">Yes, Skander Global is equipped to handle high-volume shipments efficiently. Our facilities and systems are designed to manage large quantities of goods, ensuring timely and accurate fulfillment regardless of volume.</div>
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
