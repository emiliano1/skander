import Link from "next/link"

export default function Footer2() {
    return (
        <>
            <footer className="main-footer footer-style-one">
                <div className="bg bg-pattern-4"></div>
                <div className="icon-plane-6 bounce-x"></div>
                <div className="icon-bus-2 bounce-x"></div>
                {/* Footer Uppper */}
                <div className="footer-top">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/11.jpg)' }}></div>
                            <ul className="contact-list-two light">
                                <li>
                                    <i className="icon fal fa-phone"></i>
                                    <div className="text">Call Us Anytime <br/><Link href="tel:+91458654528">+91 458 654 528</Link></div>
                                </li>
                                <li>
                                    <i className="icon fal fa-envelope"></i>
                                    <div className="text">Send Mail <br/><Link href="mailto:info@support.com">info@support.com</Link></div>
                                </li>
                                <li>
                                    <i className="icon fal fa-map-marker-alt"></i>
                                    <div className="text">Our Address <br/><span>13005 Greenville</span></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Widgets Section */}
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            {/* Footer COlumn */}
                            <div className="footer-column col-xl-4 col-sm-6">
                                <div className="footer-widget about-widget">
                                    <div className="logo"><Link href="/"><img src="/images/logo-2.png" alt="Logo"/></Link></div>
                                    <div className="text">We strongly support best practice sharing across our operations around the world and across various transporation sectors. Lorem ipsum dolor sit am adipi we help you ensure everyone</div>
                                </div>
                            </div>
                            {/* Footer COlumn */}
                            <div className="footer-column col-xl-2 col-sm-6">
                                <div className="footer-widget links-widget">
                                    <h5 className="widget-title">Quick Links</h5>
                                    <div className="widget-content">
                                        <ul className="user-links">
                                            <li><i className="icon fa fa-angle-right"></i> <Link href="/">Home</Link></li>
                                            <li><i className="icon fa fa-angle-right"></i> <Link href="#">Services</Link></li>
                                            <li><i className="icon fa fa-angle-right"></i> <Link href="#">About Us</Link></li>
                                            <li><i className="icon fa fa-angle-right"></i> <Link href="#">Blog</Link></li>
                                            <li><i className="icon fa fa-angle-right"></i> <Link href="#">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Footer COlumn */}
                            <div className="footer-column col-xl-2 col-sm-6">
                                <div className="footer-widget links-widget">
                                    <h5 className="widget-title">Services</h5>
                                    <div className="widget-content">
                                        <ul className="user-links">
                                            <li><i className="icon fa fa-angle-right"></i> <Link href="#">Air Fright</Link></li>
                                            <li><i className="icon fa fa-angle-right"></i> <Link href="#">Ocean Fright</Link></li>
                                            <li><i className="icon fa fa-angle-right"></i> <Link href="#">Road Fright</Link></li>
                                            <li><i className="icon fa fa-angle-right"></i> <Link href="#">Warehouse</Link></li>
                                            <li><i className="icon fa fa-angle-right"></i> <Link href="#">Transport</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Footer COlumn */}
                            <div className="footer-column col-xl-4 col-sm-6">
                                <div className="footer-widget newsletter-widget">
                                    <h5 className="widget-title">Newsletter</h5>
                                    <div className="text">Sign up for alerts, our latest blogs, <br/>thoughts, and insights.</div>
                                        {/* Newsletter Form */}
                                    <div className="newsletter-form">
                                        <div className="form-group">
                                        <div className="input-outer"> <span className="icon fal fa-envelope"></span>
                                            <input type="email" name="Email" placeholder="Your Email" required/>
                                        </div>
                                        <button type="submit" className="theme-btn btn-style-one"><span className="btn-title">Subscribe Now</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  Footer Bottom */}
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="copyright-text">© Copyright reserved by <Link href="/#">kodesolution.com</Link></div>
                            <ul className="social-icon-two">
                                <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
