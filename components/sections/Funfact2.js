import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})

export default function Funfact2() {
    return (
        <>

        <section className="fun-fact-section-two pt-0">
            <div className="icon-plane-2 bounce-y"></div>
                <div className="auto-container">
                    <div className="fact-counter">
                        <div className="row"> 
                        
                        <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp">
                            <div className="inner-box">
                            <div className="icon-box"><i className="icon flaticon-air"></i></div><br/>
                            <div className="content-box">
                                <div className="count-box"><CounterUp count={15} time={2} />+</div>
                                <div className="counter-title">Years Of Experience</div>
                            </div>
                            </div>
                        </div>
                        
                        <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                            <div className="icon-box"><i className="icon flaticon-received"></i></div><br/>
                            <div className="count-box"><CounterUp count={3} time={5} />+</div>
                            <div className="counter-title">Office Worldwide</div>
                            </div>
                        </div>
                        
                        <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                            <div className="icon-box"><i className="icon flaticon-box"></i></div><br/>
                            <div className="count-box"><CounterUp count={86} time={4} />+</div>
                            <div className="counter-title">Total Employees</div>
                            </div>
                        </div>
                        
                        <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
                            <div className="inner-box">
                            <div className="icon-box"><i className="icon flaticon-courier"></i></div><br/>
                            <div className="count-box"><CounterUp count={300} time={3} />K</div>
                            <div className="counter-title">Warehouse Sq Footage</div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
