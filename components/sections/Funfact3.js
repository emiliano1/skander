import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
  ssr: false,
})

export default function Funfact3() {
  return (
  <>
  <section className="fun-fact-section-two style-two">
    <div className="icon-plane-2 bounce-y"></div>
    <div className="auto-container">
      <div className="fact-counter">
        <div className="row"> 

          <div className="counter-block-two col-lg-3 col-sm-6 wow fadeInUp">
            <div className="inner-box">
              <i className="icon flaticon-air"></i>
              <div className="content-box">
                <div className="count-box"><CounterUp count={25} time={3} />+</div>
                <div className="counter-title">Years Of Experience</div>
              </div>
            </div>
          </div>

          <div className="counter-block-two col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
            <div className="inner-box">
              <i className="icon flaticon-received"></i>
              <div className="count-box"><CounterUp count={90} time={3} />+</div>
              <div className="counter-title">Office Worldwide</div>
            </div>
          </div>

          <div className="counter-block-two col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
            <div className="inner-box">
              <i className="icon flaticon-box"></i>
              <div className="count-box"><CounterUp count={11} time={3} />K</div>
              <div className="counter-title">Total Workers</div>
            </div>
          </div>

          <div className="counter-block-two col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
            <div className="inner-box">
              <i className="icon flaticon-courier"></i>
              <div className="count-box"><CounterUp count={20} time={3} />+</div>
              <div className="counter-title">Best Awards</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}
