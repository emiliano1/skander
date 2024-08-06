import Link from "next/link"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, }) {
  return (
  <>
  <header className={`main-header header-style-one ${isSearch ? "moblie-search-active" : ""}`}>
    {/* Header Top */}
    <div className="header-top">
      <div className="bg-lines"></div>
      <div className="inner-container">
        <div className="top-left">
          {/* Info List */}
          <ul className="social-icon-one light">
            <li><Link href="https://www.linkedin.com/company/skanderlogistics/"><span className="fab fa-linkedin-in"></span></Link></li>
          </ul>
        </div>
        <div className="top-right">
          <ul className="list-style-one light">
            <li><i className="fal fa-clock"></i> Monday - Friday: 9.00 AM - 6.00 PM </li>
            <li><i className="far fa-map-marker-alt"></i> Rockford, Illinois 61101</li>
            <li><i className="far fa-envelope"></i> <Link href="mailto:operations@skanderglobal.com">operations@skanderglobal.com</Link></li>
          </ul>
        </div>
      </div>
    </div>
    {/* Header Top */}
    <div className="header-lower">
      {/* Main box */}
      <div className="main-box">
        <div className="logo-box">
          <div className="logo"><Link href="/"><img src="/images/logo.png" alt="" title="Skander Global" /></Link></div>
        </div>
        {/*Nav Box*/}
        <div className="nav-outer">
          <nav className="nav main-menu">
            <Menu />
          </nav>
          {/* Main Menu End*/}
        </div>
        <div className="outer-box"> 
          {/* Info Btn */}
          <div className="btn-box"> 
            {/* Info Btn */}
            <Link href="tel:+18004934922" className="info-btn-two"> <i className="icon fa fa-phone"></i> <small>Get A Quote:</small> <strong>+1 (800) 493-4922</strong> </Link>
          </div>
          {/* Mobile Nav toggler */}
          <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars" /></div>
        </div>
      </div>
    </div>
    {/* Mobile Menu  */}
    <div className="mobile-menu">
      <div className="menu-backdrop" onClick={handleMobileMenu} />

      <nav className="menu-box">
        <div className="upper-box">
          <div className="nav-logo"><Link href="/"><img src="/images/logo-2.png" alt=""  /></Link></div>
          <div className="close-btn" onClick={handleMobileMenu}><i className="icon fa fa-times" /></div>
        </div>
        <MobileMenu />
        <ul className="contact-list-one">
          <li>
            {/* Contact Info Box */}
            <div className="contact-info-box">
              <i className="icon lnr-icon-phone-handset" />
              <span className="title">Get A Quote</span>
              <Link href="/tel:+18004934922">+1 (800) 493-4922</Link>
            </div>
          </li>
          <li>
            {/* Contact Info Box */}
            <div className="contact-info-box">
              <span className="icon lnr-icon-envelope1" />
              <span className="title">Send Email</span>
              <Link href="/mailto:operations@skanderglobal.com">operations@skanderglobal.com</Link>
            </div>
          </li>
          <li>
            {/* Contact Info Box */}
            <div className="contact-info-box">
              <span className="icon lnr-icon-clock" />
              <span className="title">Send Email</span>
              Mon-Sat 8:00 AM-6:00 PM Sunday - CLOSED
            </div>
          </li>
        </ul>
        <ul className="social-links">
          <li><Link href="https://www.linkedin.com/company/skanderlogistics"><i className="fab fa-linkedin" /></Link></li>
        </ul>
      </nav>
    </div>{/* End Mobile Menu */}
 
    {/* Sticky Header  */}
    <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
      <div className="auto-container">
        <div className="inner-container">
          {/*Logo*/}
          <div className="logo">
            <Link href="/" ><img src="/images/logo.png" alt=""  /></Link>
          </div>
          {/*Right Col*/}
          <div className="nav-outer">
            {/* Main Menu */}
            <nav className="main-menu">
              <div className="navbar-collapse show collapse clearfix">
                <Menu />
              </div>
            </nav>{/* Main Menu End*/}
            {/*Mobile Navigation Toggler*/}
            <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars" /></div>
          </div>
        </div>
      </div>
    </div>{/* End Sticky Menu */}
  </header>

  </>
  )
}
