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
    <p>Efficient and reliable fulfillment services are critical to maintaining a competitive edge in today’s fast-paced market. Our Fulfillment Services are designed to streamline your operations, ensuring that your products reach customers quickly and accurately, whether you're operating on a national or international scale.</p>
    <p>We utilize state-of-the-art technology and robust logistics infrastructure to manage inventory, process orders, and handle returns seamlessly. Our fulfillment solutions are tailored to meet the specific needs of your business, providing you with the flexibility and efficiency required to succeed in a dynamic market environment.</p>
    <div className="content mt-40">
      <div className="text">
        <h3>Service Center</h3>
        <p>Our service centers are strategically located and equipped with cutting-edge technology to support comprehensive fulfillment services. Our dedicated team of logistics professionals ensures that every order is processed promptly and accurately, enhancing your customer satisfaction and operational efficiency.</p>
        <blockquote className="blockquote-one">"Our Fulfillment Services are designed to provide seamless, efficient, and reliable solutions, helping your business meet the demands of a competitive market." - Skander Global Team</blockquote>
      </div>
      <div className="feature-list mt-4">
        <div className="row clearfix">
          <div className="col-lg-6 col-md-6 col-sm-12 column">
            <img className="mb-3" src="images/resource/service-d1.jpg" alt="Nationwide Fulfillment Services" />
            <p>Offering comprehensive fulfillment services across the nation, we ensure timely and accurate delivery of your products to customers, enhancing your market presence and operational efficiency.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 column">
            <img className="mb-3" src="images/resource/service-d2.jpg" alt="International Fulfillment Services" />
            <p>Our international fulfillment services are designed to support your global operations, ensuring your products reach customers worldwide with the highest standards of efficiency and reliability.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="innerpage mt-25">
      <h3>Frequently Asked Questions</h3>
      <p>Discover answers to common questions about our Fulfillment Services. We are committed to providing the information you need to leverage our comprehensive solutions effectively.</p>
      <ul className="accordion-box wow fadeInRight">
        <li className="accordion block">
          <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
            What are Fulfillment Services?
            <div className="icon fa fa-plus"></div>
          </div>
          <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
            <div className="content">
              <div className="text">Fulfillment Services encompass the entire process of receiving, processing, and delivering orders to customers. This includes managing inventory, picking and packing orders, and handling returns efficiently.</div>
            </div>
          </div>
        </li>
        <li className="accordion block">
          <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
            How can Fulfillment Services benefit my business?
            <div className="icon fa fa-plus"></div>
          </div>
          <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
            <div className="content">
              <div className="text">Fulfillment Services can significantly enhance your operational efficiency, reduce shipping times, and improve customer satisfaction by ensuring timely and accurate delivery of orders.</div>
            </div>
          </div>
        </li>
        <li className="accordion block">
          <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
            How does Skander Global ensure efficient order fulfillment?
            <div className="icon fa fa-plus"></div>
          </div>
          <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
            <div className="content">
              <div className="text">We leverage advanced technology, strategically located service centers, and a highly trained team to manage every aspect of order fulfillment with precision, ensuring that orders are processed and delivered promptly.</div>
            </div>
          </div>
        </li>
        <li className="accordion block">
          <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
            Can you handle international fulfillment needs?
            <div className="icon fa fa-plus"></div>
          </div>
          <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
            <div className="content">
              <div className="text">Yes, we offer comprehensive international fulfillment services, ensuring your products are delivered to customers worldwide efficiently and reliably, supporting your global business operations.</div>
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
