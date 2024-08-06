import { useState } from 'react'

const Faq4 = () => {
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
    <section className="faqs-section pt-120 pb-80">
      <div className="auto-container">
        <div className="row">
          <div className="faq-column col-lg-6 mb-30 wow fadeInRight" data-wow-delay="300ms">
            <div className="inner-column">
              <ul className="accordion-box style-two">
                <li className="accordion block active-tab">
                  <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
                    <h4 className="count">01</h4>Can i get refund ? <i className="arrow fal fa-angle-down"></i>
                  </div>
                  <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                    <div className="content">
                      <div className="text">With over four decades of experience providing solutions to large-scale enterprises throughout the globe.</div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
                    <h4 className="count">02</h4>Duration of Deliver ? <i className="arrow fal fa-angle-down"></i>
                  </div>
                  <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                    <div className="content">
                      <div className="text">With over four decades of experience providing solutions to large-scale enterprises throughout the globe.</div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
                    <h4 className="count">03</h4>How Can I Track Number ? <i className="arrow fal fa-angle-down"></i>
                  </div>
                  <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                    <div className="content">
                      <div className="text">With over four decades of experience providing solutions to large-scale enterprises throughout the globe.</div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
                    <h4 className="count">04</h4>Whats the policy ? <i className="arrow fal fa-angle-down"></i>
                  </div>
                  <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                    <div className="content">
                      <div className="text">With over four decades of experience providing solutions to large-scale enterprises throughout the globe.</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="faq-column col-lg-6 mb-30 wow fadeInRight" data-wow-delay="300ms">
            <div className="inner-column">
              <ul className="accordion-box style-two">
                <li className="accordion block active-tab">
                  <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(5)}>
                    <h4 className="count">05</h4>Can i get refund ? <i className="arrow fal fa-angle-down"></i>
                  </div>
                  <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                    <div className="content">
                      <div className="text">With over four decades of experience providing solutions to large-scale enterprises throughout the globe.</div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(6)}>
                    <h4 className="count">06</h4>Duration of Deliver ? <i className="arrow fal fa-angle-down"></i>
                  </div>
                  <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                    <div className="content">
                      <div className="text">With over four decades of experience providing solutions to large-scale enterprises throughout the globe.</div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className={isActive.key == 7 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(7)}>
                    <h4 className="count">07</h4>How Can I Track Number ? <i className="arrow fal fa-angle-down"></i>
                  </div>
                  <div className={isActive.key == 7 ? "acc-content current" : "acc-content"}>
                    <div className="content">
                      <div className="text">With over four decades of experience providing solutions to large-scale enterprises throughout the globe.</div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className={isActive.key == 8 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(8)}>
                    <h4 className="count">08</h4>Whats the policy ? <i className="arrow fal fa-angle-down"></i>
                  </div>
                  <div className={isActive.key == 8 ? "acc-content current" : "acc-content"}>
                    <div className="content">
                      <div className="text">With over four decades of experience providing solutions to large-scale enterprises throughout the globe.</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Faq4
