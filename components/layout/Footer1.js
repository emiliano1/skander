import Link from "next/link"

export default function Footer1() {
  return (
    <>
    <footer className="main-footer footer-style-one">
      <div className="bg bg-pattern-4"></div>
      <div className="icon-plane-6 bounce-x"></div>
      <div className="icon-bus-2 bounce-x"></div>
      <div className="footer-top">
        <div className="auto-container">
          <div className="outer-box">
            <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/11.jpg)' }}></div>
            <ul className="contact-list-two light">
              <li>
                <i className="icon fal fa-phone"></i>
                <div className="text">Get a Quote <br/><Link href="tel:+18004934922">+1 (800) 493-4922</Link></div>
              </li>
              <li>
                <i className="icon fal fa-envelope"></i>
                <div className="text">Send Mail <br/><Link href="mailto:info@support.com">operations@skanderglobal.com</Link></div>
              </li>
              <li>
                <i className="icon fal fa-map-marker-alt"></i>
                <div className="text">Headquarter <br/><span>Rockford, Illinois</span></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="widgets-section">
        <div className="auto-container">
          <div className="row"> 
            <div className="footer-column col-xl-4 col-sm-6">
              <div className="footer-widget about-widget">
                <div className="logo"><Link href="index"><img src="/images/logo-2.png" alt="Logo"/></Link></div>
                <div className="text">Experience seamless logistics with our reliable and trusted solutions. From precise storage and efficient transportation to specialized services, we deliver excellence at every step of the supply chain.</div>
              </div>
            </div>
            <div className="footer-column col-xl-2 col-sm-6">
              <div className="footer-widget links-widget">
                <h5 className="widget-title">Quick Links</h5>
                <div className="widget-content">
                  <ul className="user-links">
                    <li><i className="icon fa fa-angle-right"></i> <Link href="#">Home</Link></li>
                    <li><i className="icon fa fa-angle-right"></i> <Link href="Warehousing">Warehousing</Link></li>
                    <li><i className="icon fa fa-angle-right"></i> <Link href="Logistics">Logistics</Link></li>
                    <li><i className="icon fa fa-angle-right"></i> <Link href="Career">Careers</Link></li>
                    <li><i className="icon fa fa-angle-right"></i> <Link href="page-contact">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-column col-xl-2 col-sm-6">
              <div className="footer-widget links-widget">
                <h5 className="widget-title">Logistics Services</h5>
                <div className="widget-content">
                  <ul className="user-links">
                    <li><i className="icon fa fa-angle-right"></i> <Link href="Consolidation">Consolidation</Link></li>
                    <li><i className="icon fa fa-angle-right"></i> <Link href="Cross-Border">Cross-Border</Link></li>
                    <li><i className="icon fa fa-angle-right"></i> <Link href="Customs-Brokerage">Customs Brokerage</Link></li>
                    <li><i className="icon fa fa-angle-right"></i> <Link href="Freight-Brokerage">Freight Brokerage</Link></li>
                    <li><i className="icon fa fa-angle-right"></i> <Link href="Cold-Chain-Logistics">Cold Chain Logistics</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-column col-xl-4 col-sm-6">
              <div className="footer-widget newsletter-widget">
                <h5 className="widget-title">Newsletter</h5>
                <div className="text">Sign up for pricing Alerts and insights.</div>
                <div className="newsletter-form">
                  <div className="form-group">
                    <div className="input-outer"> <span className="icon fal fa-envelope"></span>
                      <input type="email" name="Email" placeholder="Your Email" required />
                    </div>
                    <button type="submit" className="theme-btn btn-style-one"><span className="btn-title">Subscribe Now</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner-container">
            <div className="copyright-text">© Copyrights reserved by <Link href="https://netronian.com">Netronian Inc</Link></div>
            <ul className="social-icon-two">
              <li><Link href="https://www.linkedin.com/company/skanderlogistics"><i className="fab fa-linkedin-in"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    </>
  )
}
