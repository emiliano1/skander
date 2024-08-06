import { useState } from 'react'

const Faq2 = () => {
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

<section className="faq-section-two p-0">
    <div className="float-image"><img src="/images/resource/float-img-2.png" alt="Image"/></div>
    <div className="auto-container">
      <div className="outer-box">
        <div className="row"> 

          <div className="faq-column col-xl-6 col-lg-5 order-lg-2 wow fadeInRight" data-wow-delay="300ms">
            <div className="inner-column">
              <div className="sec-title"> <span className="sub-title">Faq's</span>
                <h2 className="words-slide-up text-split">Asked Questions</h2>
              </div>
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
          <div className="form-column col-lg-6 wow fadeInLeft">

            <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/9.jpg)' }}></div>
            <div className="inner-column"> 

              <div className="contact-form-two wow fadeInLeft">
                <div className="bg bg-pattern-2 bounce-x"></div>
                <h3 className="title">Request A Quote</h3>

                <form method="post" action="get" id="contact-form">
                  <div className="row">
                    <div className="form-group col-md-12">
                      <input type="text" name="name" placeholder="Your Name" required/>
                    </div>
                    <div className="form-group col-md-6">
                      <input type="tel" name="phone" placeholder="Phone" required/>
                    </div>
                    <div className="form-group col-md-6">
                      <input type="email" name="email" placeholder="Email" required/>
                    </div>
                    <div className="form-group col-md-6">
                      <input type="text" name="departure" placeholder="Departure" required/>
                    </div>
                    <div className="form-group col-md-6">
                      <input type="text" name="deliver" placeholder="Deliver" required/>
                    </div>
                    <div className="form-group col-md-6">
                      <input type="text" name="height" placeholder="Height" required/>
                    </div>
                    <div className="form-group col-md-6">
                      <input type="text" name="weight" placeholder="Weight" required/>
                    </div>
                    <div className="form-group col-lg-12">
                      <button type="submit" className="theme-btn btn-style-one" name="submit-form"><span className="btn-title">Submit request <i className="fa fa-arrow-right"></i></span></button>
                    </div>
                  </div>
                </form>
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
export default Faq2
