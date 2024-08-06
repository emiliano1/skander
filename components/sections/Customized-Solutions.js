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
              <h3 className="mt-4">Tailored Logistic Services</h3>
              <p>Innovation drives everything we do at Skander Global. We believe in crafting logistics solutions that transcend traditional boundaries, tailored to meet the unique needs of each business we serve. Our approach is holistic, seamlessly integrating cross-docking to streamline your supply chain, reducing storage time, and expediting the flow of goods. This efficiency is mirrored in our first-and-final mile delivery solutions, ensuring that your products transition smoothly from origin to final destination with unparalleled precision.</p>
              <p>We recognize the critical importance of urgency, which is why our same-day courier service is designed to meet the demands of time-sensitive shipments, guaranteeing they arrive on the same day. Our managed services offer a comprehensive end-to-end logistics framework, handling everything from planning to execution, and optimization, freeing you to focus on what you do best.</p>
              <p>In the realm of high-value, delicate, or oversized items, our white-glove services stand out, providing meticulous care and handling from pick-up to delivery. For those times when speed is of the essence, our expedited freight service ensures your shipments are prioritized and delivered swiftly and securely.</p>
              <p>Skander Global doesn’t just provide logistics solutions; we redefine them. By marrying cutting-edge technology with innovative thinking, we deliver efficiency, reliability, and excellence in every aspect of the supply chain.</p>
             

            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
};
export default ServiceDetails
