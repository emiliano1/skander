import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})

export default function Funfact() {
    return (
        <>

        <section className="fun-fact-section">  
            <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/1.jpg)' }}></div>
                <div className="auto-container">
                    <div className="fact-counter">
                        <div className="row"> 
                        
                        <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp">
                            <div className="inner-box">
                            <div className="icon-box"><i className="icon flaticon-air"></i></div><br/>
                            <div className="content-box">
                                <div className="count-box"><CounterUp count={25} time={3} />+</div>
                                <div className="counter-title">Years Of Experience</div>
                            </div>
                            </div>
                        </div>
                        
                        <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="inner-box">
                            <div className="icon-box"><i className="icon flaticon-received"></i></div><br/>
                            <div className="count-box"><CounterUp count={90} time={3} />+</div>
                            <div className="counter-title">Office Worldwide</div>
                            </div>
                        </div>
                        
                        <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                            <div className="inner-box">
                            <div className="icon-box"><i className="icon flaticon-box"></i></div><br/>
                            <div className="count-box"><CounterUp count={11} time={3} />K</div>
                            <div className="counter-title">Total Workers</div>
                            </div>
                        </div>
                        
                        <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
                            <div className="inner-box">
                            <div className="icon-box"><i className="icon flaticon-courier"></i></div><br/>
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
