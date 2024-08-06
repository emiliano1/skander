import { useState } from 'react'

const Faq = () => {
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
    <section className="faq-section">
      <div className="bg bg-pattern-1"></div>
      <div className="icon-plane-4 bounce-y"></div>
      <div className="auto-container">
        <div className="outer-box">
          <div className="row"> 
            <div className="faq-column col-lg-6 wow fadeInLeft" data-wow-delay="300ms">
              <div className="inner-column">
              <div className="sec-title"> 
  <span className="sub-title">Capabilities</span>
  <h2 className="words-slide-up text-split">Comprehensive Services to Elevate Your Supply Chain</h2>
  <div className="text">At Skander Global, we empower our clients by sharing industry-leading practices and delivering innovative logistics solutions across the globe. Our expertise spans multiple industrial sectors, ensuring your operations are streamlined and efficient.</div>
</div>

<ul className="accordion-box">
  <li className="accordion block">
    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
      <i className="icon flaticon-air"></i> Our Mission: Innovate and Optimize<i className="arrow fal fa-angle-right"></i>
    </div>
    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
      <div className="content">
        <div className="text">At Skander Global, we leverage best practices and cutting-edge technologies across our global operations to drive efficiency and innovation in every transportation sector.</div>
      </div>
    </div>
  </li>

  <li className="accordion block">
    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
      <i className="icon flaticon-logistics-2"></i> Premier Logistics Solutions<i className="arrow fal fa-angle-right"></i>
    </div>
    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
      <div className="content">
        <div className="text">Our goal is to set the standard in the logistics industry, delivering unparalleled service and strategic solutions that meet the dynamic needs of global markets.</div>
      </div>
    </div>
  </li>

  <li className="accordion block">
    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
      <i className="icon flaticon-container"></i> Building a Resilient Supply Chain<i className="arrow fal fa-angle-right"></i>
    </div>
    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
      <div className="content">
        <div className="text">We are committed to developing and nurturing robust supply chain solutions that empower our clients to thrive in a competitive global environment.</div>
      </div>
    </div>
  </li>
</ul>

              </div>
            </div>
            <div className="image-column col-lg-6">
              <div className="inner-column">
                <div className="image-box">
                  <figure className="image"><img src="/images/resource/faq1-1.png" alt="Image"/></figure>
                  <div className="rating-box"> <i className="icon fal fa-stars"></i>
                    <ul className="rating">
                      <li><i className="fa-solid fa-star"></i></li>
                      <li><i className="fa-solid fa-star"></i></li>
                      <li><i className="fa-solid fa-star"></i></li>
                      <li><i className="fa-solid fa-star"></i></li>
                      <li><i className="fa-solid fa-star"></i></li>
                    </ul>
                    <h6 className="reviews">4.5 (1,200 reviews)</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Faq
