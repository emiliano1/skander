import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
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
    formData.append('form_identifier', 'contact_form');

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
      <section className="contact-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="sec-title">
                <span className="sub-title">Send us email</span>
                <h2>Feel free to write</h2>
              </div>
              <form id="contact_form" name="contact_form" className="" action="#" method="post" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_name" className="form-control" type="text" placeholder="Enter Name" required />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email" required />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject" required />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_phone" className="form-control" type="text" placeholder="Enter Phone" />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea name="form_message" className="form-control required" rows="7" placeholder="Enter Message" required></textarea>
                </div>

                {/* Honeypot field - should be hidden */}
                <div style={{ display: 'none' }}>
                  <input type="text" name="CatchmeIFyouCan" value="" />
                </div>

                <div className="mb-3">
                  <ReCAPTCHA
                    sitekey="6Ldnzh4qAAAAACllEvlUSEEmDH68ccKHARLbXGaB"
                    onChange={handleCaptchaChange}
                  />
                </div>
                <div className="mb-5">
                  <input name="form_botcheck" className="form-control" type="hidden" value="" />
                  <button type="submit" className="theme-btn btn-style-one" data-loading-text="Please wait...">
                    <span className="btn-title">Send message</span>
                  </button>
                  <button type="reset" className="theme-btn btn-style-one ml-25">
                    <span className="btn-title">Reset</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right">
                <div className="sec-title">
                  <span className="sub-title">Need any help?</span>
                  <h2>Get in touch with us</h2>
                  <div className="text">
                    Get in touch with us for reliable and efficient logistics solutions. Our team is ready to assist you.
                  </div>
                </div>
                <ul className="list-unstyled contact-details__info">
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-phone-plus"></span>
                    </div>
                    <div className="text">
                      <h6 className="mb-1">Speak to us...</h6>
                      <a href="tel:18004934922">+1 (800) 493-4922</a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="lnr-icon-envelope1"></span>
                    </div>
                    <div className="text">
                      <h6 className="mb-1">Email us...</h6>
                      <a href="mailto:operations@skanderglobal.com">operations@skanderglobal.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section py-0">
        <iframe
          className="map w-100"
          src="https://www.google.com/maps/embed/v1/view?key=AIzaSyA9ZXICawCtxQv9kEaZXskcz44sWiKeT44&center=41.12003387444998,-88.15113436471138&zoom=5&maptype=roadmap&markers=41.12003387444998,-88.15113436471138|40.4463821656576,-74.46129804885927|35.78456454885885,-5.81072035965427"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
