import Link from "next/link";

const ServiceGrid = () => {
  return (
    <>
    <section class="services-section pb-60">
  <div class="auto-container">
    <div class="row">
      <div class="service-block-two col-lg-4 col-md-6">
        <div class="inner-box">
          <div class="image-box">
            <figure class="image"><Link href="Cross-Docking"><img src="/images/resource/service2-1.jpg" alt="Image"/></Link></figure>
          </div>
          <div class="content-box">
            <div class="inner"> <i class="icon flaticon-cargo-boat"></i>
              <h6 class="title"><Link href="Cross-Docking">Sea Freight</Link></h6>
              <div class="text">Reliable and cost-effective ocean shipping solutions for global trade.</div>
            </div>
            <Link href="Cross-Docking" class="theme-btn btn-style-one dark-bg"><span class="btn-title">Learn more <i class="fal fa-long-arrow-right"></i></span></Link>
          </div>
        </div>
      </div>        
      <div class="service-block-two col-lg-4 col-md-6">
        <div class="inner-box">
          <div class="image-box">
            <figure class="image"><Link href="Customized-Solutions"><img src="/images/resource/service2-2.jpg" alt="Image"/></Link></figure>
          </div>
          <div class="content-box">
            <div class="inner"> <i class="icon flaticon-airplane-2"></i>
              <h6 class="title"><Link href="Customized-Solutions">Air Freight</Link></h6>
              <div class="text">Fast and efficient air shipping for urgent international deliveries.</div>
            </div>
            <Link href="Customized-Solutions" class="theme-btn btn-style-one dark-bg"><span class="btn-title">Learn more <i class="fal fa-long-arrow-right"></i></span></Link>
          </div>
        </div>
      </div>        
      <div class="service-block-two col-lg-4 col-md-6">
        <div class="inner-box">
          <div class="image-box">
            <figure class="image"><Link href="Freight-Brokerage"><img src="/images/resource/service2-3.jpg" alt="Image"/></Link></figure>
          </div>
          <div class="content-box">
            <div class="inner"> <i class="icon flaticon-shipment"></i>
              <h6 class="title"><Link href="Freight-Brokerage">Track Freight</Link></h6>
              <div class="text">Secure and reliable freight transportation with real-time tracking.</div>
            </div>
            <Link href="Freight-Brokerage" class="theme-btn btn-style-one dark-bg"><span class="btn-title">Learn more <i class="fal fa-long-arrow-right"></i></span></Link>
          </div>
        </div>
      </div>        
      <div class="service-block-two col-lg-4 col-md-6">
        <div class="inner-box">
          <div class="image-box">
            <figure class="image"><Link href="First-and-Final-Mile"><img src="/images/resource/lastmile.jpg" alt="Image"/></Link></figure>
          </div>
          <div class="content-box">
            <div class="inner"> <i class="icon flaticon-worldwide-shipping-1"></i>
              <h6 class="title"><Link href="First-and-Final-Mile">Last Mile Freight</Link></h6>
              <div class="text">Timely and accurate final delivery to enhance customer satisfaction.</div>
            </div>
            <Link href="First-and-Final-Mile" class="theme-btn btn-style-one dark-bg"><span class="btn-title">Learn more <i class="fal fa-long-arrow-right"></i></span></Link>
          </div>
        </div>
      </div>        
      <div class="service-block-two col-lg-4 col-md-6">
        <div class="inner-box">
          <div class="image-box">
            <figure class="image"><Link href="Warehousing"><img src="/images/resource/service2-4.jpg" alt="Image"/></Link></figure>
          </div>
          <div class="content-box">
            <div class="inner"> <i class="icon flaticon-logistics-1"></i>
              <h6 class="title"><Link href="Warehousing">Warehouse</Link></h6>
              <div class="text">Secure and efficient storage solutions for your inventory.</div>
            </div>
            <Link href="Warehousing" class="theme-btn btn-style-one dark-bg"><span class="btn-title">Learn more <i class="fal fa-long-arrow-right"></i></span></Link>
          </div>
        </div>
      </div>        
      <div class="service-block-two col-lg-4 col-md-6">
        <div class="inner-box">
          <div class="image-box">
            <figure class="image"><Link href="Customized-Solutions"><img src="/images/resource/service2-5.jpg" alt="Image"/></Link></figure>
          </div>
          <div class="content-box">
            <div class="inner"> <i class="icon flaticon-train"></i>
              <h6 class="title"><Link href="Customized-Solutions">Custom Freight</Link></h6>
              <div class="text">Tailored freight solutions to meet your specific logistics needs.</div>
            </div>
            <Link href="Customized-Solutions" class="theme-btn btn-style-one dark-bg"><span class="btn-title">Learn more <i class="fal fa-long-arrow-right"></i></span></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};
export default ServiceGrid
