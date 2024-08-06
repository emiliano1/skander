import Link from 'next/link';

const WorkProcess = () => {
  const data = [
  {
      title: "Request A Quote",
      count:"1",
      icon:"icon flaticon-global",
      description:"We strongly support best practice sharing across our operations around"
  },
  {
    title: "Choose Fright",
    count:"2",
    icon:"icon flaticon-import",
    description:"We strongly support best practice sharing across our operations around"
  },
  {
    title: "Enjoy Delivery",
    count:"3",
    icon:"icon flaticon-delivery-man",
    description:"We strongly support best practice sharing across our operations around"
  }
];
    return (
        <>
        <section className={`process-section`}>
            <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/8.jpg)' }}></div>
            <div className="icon-plane-9 bounce-x"></div>
            <div className="overlay-3"></div>
            <div className="float-image"><img src="/images/resource/process1-1.png" alt="Image"/></div>
            <div className="auto-container">
              <div className="sec-title light text-center"> <span className="sub-title">Process</span>
                <h2 className="words-slide-up text-split">3 Steps process <br/>to deliver your goods</h2>
              </div>
              <div className="row wow fadeInUp">
                    {data.map((item, i) => (
                    
                  <div key={i} className="process-block col-lg-4 col-sm-6 wow fadeInUp">
                    <div className="inner-box">
                      <div className="icon-box"><i className={item.icon}></i></div>
                      <div className="content">
                        <h6 className="title"><Link href="page-about">{item.title}</Link></h6>
                        <div className="text">{item.description}</div>
                        <h4 className="count">{item.count}</h4>
                        <div className="icon-shapes"></div>
                      </div>
                    </div>
                  </div> ))}
      
              </div>
          </div>
        </section>
        
        </>
    );
};

export default WorkProcess;