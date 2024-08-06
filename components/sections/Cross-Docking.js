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
<p>At Skander Global, our cross-docking services streamline your supply chain by minimizing storage time and reducing handling costs. By directly transferring goods from inbound to outbound transportation, we ensure rapid and efficient distribution, significantly improving delivery times and reducing warehousing expenses.</p>
<p>Our advanced cross-docking solutions are designed to meet the needs of businesses looking to optimize their logistics operations. With strategic locations, state-of-the-art technology, and a dedicated team, we handle the dynamic movement of goods with precision, ensuring your products reach their final destination quickly and safely.</p>
<div className="content mt-40">
  <div className="text">
    <h3>Service Center</h3>
    <p>Skander Global’s cross-docking facilities are equipped with the latest technology to facilitate seamless transfers. Our experienced staff manage every aspect of the process, from unloading to loading, ensuring minimal delay and maximum efficiency.</p>
    <blockquote className="blockquote-one">"Our cross-docking services are a game-changer for businesses seeking to enhance their logistics efficiency. By reducing storage time and handling, we help you achieve faster delivery and lower costs." - Skander Global Team</blockquote>
  </div>
  <div className="feature-list mt-4">
    <div className="row clearfix">
      <div className="col-lg-6 col-md-6 col-sm-12 column">
        <img className="mb-3" src="images/resource/service-d1.jpg" alt="Cross-Docking Facility" />
        <p>Our state-of-the-art cross-docking facilities are designed to streamline your supply chain, reducing storage time and handling costs.</p>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 column">
        <img className="mb-3" src="images/resource/service-d2.jpg" alt="Efficient Transfer Process" />
        <p>We ensure rapid and efficient distribution by directly transferring goods from inbound to outbound transportation, enhancing delivery times and reducing expenses.</p>
      </div>
    </div>
  </div>
</div>

<div className="innerpage mt-25">
  <h3>Frequently Asked Questions</h3>
  <p>Find answers to some of the most common questions about our cross-docking services. Our goal is to provide you with all the information you need to understand and leverage our efficient logistics solutions.</p>
  <ul className="accordion-box wow fadeInRight">
    <li className="accordion block">
      <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
        What is cross-docking and how does it work?
        <div className="icon fa fa-plus"></div>
      </div>
      <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
        <div className="content">
          <div className="text">Cross-docking is a logistics process where products are directly transferred from inbound to outbound transportation with minimal storage time. This method reduces handling and storage costs while accelerating the delivery process.</div>
        </div>
      </div>
    </li>
    <li className="accordion block">
      <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
        What are the benefits of using cross-docking?
        <div className="icon fa fa-plus"></div>
      </div>
      <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
        <div className="content">
          <div className="text">Cross-docking offers numerous benefits including reduced storage costs, faster delivery times, lower handling costs, and improved supply chain efficiency. It’s particularly useful for perishable goods and high-demand products.</div>
        </div>
      </div>
    </li>
    <li className="accordion block">
      <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
        How does Skander Global ensure efficiency in cross-docking?
        <div className="icon fa fa-plus"></div>
      </div>
      <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
        <div className="content">
          <div className="text">Skander Global utilizes advanced technology, strategic locations, and experienced personnel to manage cross-docking operations. Our process ensures rapid transfer of goods, minimizing delays and maximizing efficiency.</div>
        </div>
      </div>
    </li>
    <li className="accordion block">
      <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
        Is cross-docking suitable for all types of products?
        <div className="icon fa fa-plus"></div>
      </div>
      <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
        <div className="content">
          <div className="text">Cross-docking is ideal for a variety of products, especially those with high turnover rates, perishable goods, and items that require quick delivery. However, it may not be suitable for all products, particularly those that require long-term storage or specialized handling.</div>
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
