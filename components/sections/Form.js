import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Form = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert('Please complete the CAPTCHA');
      return;
    }

    const formData = new FormData(e.target);
    formData.append('g-recaptcha-response', captchaValue);
    formData.append('form_identifier', 'second_form');

    // Check for Honeypot field
    if (formData.get('CatchmeIFyouCan')) {
      console.log('Spam detected - Honeypot field filled');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        alert('Form submitted successfully!');
      } else {
        alert('Error submitting form: ' + result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <>
      <section className="contact-section">
        <div className="icon-plane-5 bounce-x"></div>
        <div className="icon-bus"></div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="row"> 
              <div className="content-column col-lg-6 col-md-12 col-sm-12 order-lg-2">
                <div className="inner-column wow fadeInRight">
                  <div className="sec-title light"> 
                    <span className="sub-title">Full Freight Services</span>
                    <h2 className="words-slide-up text-split">Comprehensive Assistance for Your Freight Needs</h2>
                    <div className="text">We are committed to implementing best practices across our global operations, ensuring seamless and efficient logistics solutions for various transportation sectors.</div>
                  </div>
                  <div className="feature-block-two">
                    <div className="inner-box"> 
                      <i className="icon flaticon-delivery-courier"></i>
                      <div className="content">
                        <h5 className="title">Advanced Tracking Systems</h5>
                        <div className="text">Our cutting-edge tracking technology provides real-time updates, ensuring full visibility of your shipments.</div>
                      </div>
                    </div>
                  </div>
                  <div className="feature-block-two">
                    <div className="inner-box"> 
                      <i className="icon flaticon-forklift"></i>
                      <div className="content">
                        <h5 className="title">Comprehensive Warehouse Solutions</h5>
                        <div className="text">Our extensive warehousing services support efficient inventory management and streamlined operations.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-column col-lg-6 col-md-12 col-sm-12">
                <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/4.jpg)' }}></div>
                <div className="inner-column"> 
                  <div className="contact-form wow fadeInLeft">
                    <div className="bg bg-pattern-2"></div>
                    <h3 className="title">Request A Quote</h3>
                    
                    <form method="post" action="/api/contact" id="contact-form" onSubmit={handleSubmit}>
                      <input type="hidden" name="form_identifier" value="second_form" />
                      <div className="row">
                        <div className="form-group col-lg-12 col-md-6">
                          <input type="text" name="name" placeholder="Your Name" required/>
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                          <input type="tel" name="phone" placeholder="Phone" required/>
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                          <input type="email" name="email" placeholder="Email" required/>
                        </div>
                        <div className="form-group col-lg-12 col-md-6">
                          <textarea name="form_message" className="form-control required" rows="7" placeholder="Enter Message"></textarea>
                        </div>

                        {/* Honeypot field - should be hidden */}
                        <div style={{ display: 'none' }}>
                          <input type="text" name="CatchmeIFyouCan" value="" />
                        </div>

                        <div className="form-group col-lg-12">
                          <div className="mb-3">
                            <ReCAPTCHA
                              sitekey="6Ldnzh4qAAAAACllEvlUSEEmDH68ccKHARLbXGaB"
                              onChange={handleCaptchaChange}
                            />
                          </div>
                          <button type="submit" className="theme-btn btn-style-one" name="submit-form">
                            <span className="btn-title">Submit request <i className="icon fa fa-arrow-right"></i></span>
                          </button>
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

export default Form;
