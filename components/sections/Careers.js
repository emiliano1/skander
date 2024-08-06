import Link from "next/link";
import { useState } from "react";

const ServiceDetails = () => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  })

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      })
    } else {
      setIsActive({
        status: true,
        key,
      })
    }
  }

  return (
    <>

    <section className="services-details">
      <div className="container">
              <div className="innerpage mt-25">
                <h3>Current Open Positions</h3>
                <p>Please note, our positions change frequently and alternations might occur to posted jobs on this site.</p>
                <ul className="accordion-box wow fadeInRight">
                  <li className="accordion block">
                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
                      Senior Software Engineer
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                      <div className="content">
                        <div className="text">
                        <p>Skander Logistics is a leading logistics company specializing in innovative and efficient solutions for supply chain management. We pride ourselves on delivering top-notch services to our clients and are looking for a Senior Python Engineer to join our dynamic team.</p>
      
      <h3>Job Overview</h3>
      <p>We are seeking a highly skilled and experienced Senior Python Engineer to focus on logistics solutions. The ideal candidate will have a strong background in Python development, with a deep understanding of logistics and supply chain processes. You will work closely with our development and operations teams to design, implement, and maintain software solutions that enhance our logistics capabilities.</p>
      
      <h3>Key Responsibilities</h3>
      <ul>
        <li>Design and develop scalable and robust Python applications for logistics management.</li>
        <li>Collaborate with cross-functional teams to gather requirements and translate them into technical specifications.</li>
        <li>Optimize and improve existing logistics software systems to increase efficiency and performance.</li>
        <li>Integrate third-party APIs and services to enhance our logistics platform.</li>
        <li>Ensure code quality and maintainability through code reviews, testing, and documentation.</li>
        <li>Troubleshoot and resolve technical issues related to logistics software.</li>
        <li>Mentor and guide junior engineers, providing technical leadership and support.</li>
      </ul>
      
      <h3>Qualifications</h3>
      <ul>
        <li>Bachelor’s or Master’s degree in Computer Science, Engineering, or a related field.</li>
        <li>5+ years of professional experience in Python development.</li>
        <li>Strong understanding of logistics and supply chain management principles.</li>
        <li>Experience with Django, Flask, or other Python frameworks.</li>
        <li>Proficient in SQL and database design.</li>
        <li>Experience with RESTful APIs and microservices architecture.</li>
        <li>Familiarity with cloud platforms such as AWS, GCP, or Azure.</li>
        <li>Excellent problem-solving skills and attention to detail.</li>
        <li>Strong communication and collaboration skills.</li>
      </ul>
      
      <h3>Why Join Skander Logistics?</h3>
      <p>At Skander Logistics, we offer a collaborative and innovative work environment where your contributions will make a significant impact. We provide competitive salaries, comprehensive benefits, and opportunities for professional growth and development. Join us and be part of a team that is shaping the future of logistics.</p>
      
      <p>Apply now to become a part of Skander Logistics and help us drive the next generation of logistics solutions.</p>
      
      <h3>How to Apply</h3>
      <p>Please send your resume to <a href="mailto:operations@skanderglobal.com">operations@skanderglobal.com</a>.</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block">
                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
                      International Logistics Professional
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                      <div className="content">
                        <div className="text">
                        <h3>About Skander Logistics</h3>
      <p>Skander Logistics is a leading logistics company specializing in innovative and efficient solutions for supply chain management. We pride ourselves on delivering top-notch services to our clients and are looking for an International Logistics Professional to join our dynamic team.</p>
      
      <h3>Job Overview</h3>
      <p>We are seeking a highly skilled and experienced International Logistics Professional to manage and optimize our global supply chain operations. The ideal candidate will have a strong background in international logistics, with a deep understanding of global trade regulations and logistics processes. You will work closely with our international partners, clients, and internal teams to ensure seamless and efficient logistics operations across borders.</p>
      
      <h3>Key Responsibilities</h3>
      <ul>
        <li>Manage and coordinate international logistics operations, including import and export activities.</li>
        <li>Ensure compliance with global trade regulations, customs requirements, and documentation.</li>
        <li>Develop and implement strategies to optimize global supply chain efficiency and cost-effectiveness.</li>
        <li>Collaborate with international partners, carriers, and vendors to ensure timely and accurate shipments.</li>
        <li>Monitor and analyze logistics performance metrics and implement improvements as needed.</li>
        <li>Resolve any logistics-related issues and provide support to clients and internal teams.</li>
        <li>Stay updated on industry trends, regulations, and best practices in international logistics.</li>
      </ul>
      
      <h3>Qualifications</h3>
      <ul>
        <li>Bachelor’s or Master’s degree in Logistics, Supply Chain Management, Business, or a related field.</li>
        <li>5+ years of professional experience in international logistics or supply chain management.</li>
        <li>Strong knowledge of global trade regulations, customs procedures, and international shipping.</li>
        <li>Experience with logistics management software and tools.</li>
        <li>Excellent problem-solving skills and attention to detail.</li>
        <li>Strong communication and collaboration skills.</li>
        <li>Ability to work in a fast-paced and dynamic environment.</li>
        <li>Fluency in multiple languages is a plus.</li>
      </ul>
      
      <h3>Why Join Skander Logistics?</h3>
      <p>At Skander Logistics, we offer a collaborative and innovative work environment where your contributions will make a significant impact. We provide competitive salaries, comprehensive benefits, and opportunities for professional growth and development. Join us and be part of a team that is shaping the future of logistics.</p>
      
      <p>Apply now to become a part of Skander Logistics and help us drive the next generation of logistics solutions.</p>
      
      <h3>How to Apply</h3>
      <p>Please send your resume to <a href="mailto:operations@skanderglobal.com">operations@skanderglobal.com</a>.</p>
    
                        </div>
                      </div>
                    </div>
                  </li>
                   <li className="accordion block">
                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
                      Warehouse Manager
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div  className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                      <div className="content">
                        <div className="text">
                        <h3>About Skander Logistics</h3>
      <p>Skander Logistics is a leading logistics company specializing in innovative and efficient solutions for supply chain management. We pride ourselves on delivering top-notch services to our clients and are currently seeking a Warehouse Manager to join our team.</p>
      
      <h3>Job Overview</h3>
      <p>We are looking for an experienced Warehouse Manager to oversee and manage our warehouse operations. The Warehouse Manager will be responsible for ensuring efficient inventory management, optimizing warehouse processes, and maintaining a safe working environment. You will lead a team of warehouse staff and work closely with other departments to meet operational goals.</p>
      
      <h3>Key Responsibilities</h3>
      <ul>
        <li>Oversee day-to-day operations of the warehouse, including receiving, storage, and shipping of products.</li>
        <li>Ensure inventory accuracy and efficient utilization of warehouse space.</li>
        <li>Develop and implement warehouse policies and procedures to improve operational efficiency.</li>
        <li>Manage and motivate a team of warehouse staff, including hiring, training, and performance evaluations.</li>
        <li>Monitor and maintain warehouse safety and security standards.</li>
        <li>Coordinate with logistics and procurement teams to optimize supply chain processes.</li>
        <li>Implement inventory control measures and conduct regular audits.</li>
        <li>Resolve any warehouse-related issues or discrepancies in a timely manner.</li>
        <li>Utilize warehouse management software (WMS) to track inventory movements and optimize workflows.</li>
      </ul>
      
      <h3>Qualifications</h3>
      <ul>
        <li>Bachelor’s degree in Logistics, Supply Chain Management, Business Administration, or a related field (preferred).</li>
        <li>Proven experience as a Warehouse Manager or similar role, with at least 5 years in warehouse operations.</li>
        <li>Strong knowledge of warehouse operations and inventory management best practices.</li>
        <li>Excellent leadership and managerial skills, with the ability to lead and motivate a team.</li>
        <li>Experience with warehouse management software (WMS) and ERP systems.</li>
        <li>Good understanding of health and safety regulations.</li>
        <li>Strong organizational and problem-solving skills.</li>
        <li>Effective communication and interpersonal skills.</li>
      </ul>
      
      <h3>Why Join Skander Logistics?</h3>
      <p>At Skander Logistics, we offer a collaborative and supportive work environment where your skills and contributions will be valued. We provide competitive compensation and benefits, opportunities for career growth, and the chance to work with a dedicated team committed to excellence in logistics.</p>
      
      <p>Apply now to become a part of Skander Logistics and contribute to our mission of delivering exceptional logistics solutions.</p>
      
      <h3>How to Apply</h3>
      <p>Please send your resume to <a href="mailto:operations@skanderglobal.com">operations@skanderglobal.com</a>.</p>
    
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block">
                    <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
                    Business Development Manager
                      <div className="icon fa fa-plus"></div>
                    </div>
                    <div  className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                      <div className="content">
                        <div className="text">
                        <h3>About Skander Logistics</h3>
      <p>Skander Logistics is a leading logistics company specializing in innovative and efficient solutions for supply chain management. We pride ourselves on delivering top-notch services to our clients and are currently seeking a Business Development Manager to join our team.</p>
      
      <h3>Job Overview</h3>
      <p>We are looking for a dynamic and experienced Business Development Manager to drive growth and expansion initiatives for our company. The Business Development Manager will be responsible for identifying new business opportunities, building strategic partnerships, and expanding our client base in the logistics industry.</p>
      
      <h3>Key Responsibilities</h3>
      <ul>
        <li>Develop and implement strategic business development plans to achieve company goals and objectives.</li>
        <li>Identify and pursue new business opportunities through market research, networking, and relationship building.</li>
        <li>Build and maintain strong relationships with key stakeholders, including potential clients, partners, and industry influencers.</li>
        <li>Lead the proposal and negotiation process for new business contracts and partnerships.</li>
        <li>Collaborate with cross-functional teams to develop customized logistics solutions that meet client needs.</li>
        <li>Monitor industry trends and competitor activities to identify opportunities for business growth.</li>
        <li>Prepare and present business development reports and updates to senior management.</li>
        <li>Achieve sales targets and objectives within specified timelines.</li>
      </ul>
      
      <h3>Qualifications</h3>
      <ul>
        <li>Bachelor’s degree in Business Administration, Marketing, Logistics, or a related field (preferred).</li>
        <li>Proven track record of success in business development or sales within the logistics industry.</li>
        <li>Strong knowledge of logistics operations and supply chain management.</li>
        <li>Excellent communication, negotiation, and presentation skills.</li>
        <li>Ability to build and maintain relationships with clients and stakeholders.</li>
        <li>Strategic thinker with analytical and problem-solving abilities.</li>
        <li>Experience with CRM software and sales management tools.</li>
        <li>Ability to work independently and as part of a team in a fast-paced environment.</li>
        <li>Willingness to travel as needed.</li>
      </ul>
      
      <h3>Why Join Skander Logistics?</h3>
      <p>At Skander Logistics, we offer a collaborative and innovative work environment where your skills and contributions will be valued. We provide competitive compensation and benefits, opportunities for career growth, and the chance to work with a dedicated team committed to excellence in logistics.</p>
      
      <p>Apply now to become a part of Skander Logistics and contribute to our mission of delivering exceptional logistics solutions.</p>
      
      <h3>How to Apply</h3>
      <p>Please send your resume to <a href="mailto:operations@skanderglobal.com">operations@skanderglobal.com</a>.</p>
    
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
    </section>

    </>
  );
};
export default ServiceDetails
