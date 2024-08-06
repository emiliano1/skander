import Link from 'next/link';

const News1 = () => {  
  const data = [
  {
      img: "news1-1.jpg",
      title:"Logistics Announces Launch of Greenhouse Gas.",
      authorTitle: "Admin"
  },
  {
      img: "news1-2.jpg",
      title:"Logistics Announces Launch of Greenhouse Gas.",
      authorTitle: "Joseph"
  },
  {
      img: "news1-3.jpg",
      title:"Logistics Announces Launch of Greenhouse Gas.",
      authorTitle: "Joseph"
  }
];
    return (
        <>
              <section className="news-section">
                <div className="icon-plane-4 bounce-y"></div>
                  <div className="auto-container">
                    <div className="sec-title text-center"> <span className="sub-title">News & Blog</span>
                      <h2 className="words-slide-up text-split">Latest News from insight</h2>
                    </div>
                    <div className="row">
                        {data.map((item, i) => (          
                        <div key={i} className="news-block col-lg-4 col-md-6 wow fadeInUp">
                          <div className="inner-box">
                            <div className="image-box">
                              <figure className="image">
                                <Link href="news-details">
                                  <img src={`/images/resource/${item.img}`} alt="Image"/>
                                  <img src={`/images/resource/${item.img}`} alt="Image"/>
                                </Link>
                              </figure>
                              <span className="date"><strong>25</strong> <span>Jun 2023</span></span>
                            </div>
                            <div className="content-box">
                              <ul className="post-meta">
                                <li><i className="fal fa-user"></i>{item.authorTitle}</li>
                                <li><i className="fa fa-comment"></i>0 Comments</li>
                              </ul>
                              <h4 className="title"><Link href="/news-details">{item.title}</Link></h4>
                              <a href="news-details.html" className="theme-btn read-more">Full Article <i className="icon fa fa-long-arrow-right"></i></a>
                            </div>
                          </div>
                        </div>))}
                    </div>
                  </div>
              </section>
        
        </>
    );
};

export default News1;