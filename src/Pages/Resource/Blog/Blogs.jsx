import React from 'react'
import "./Blogs.css"
const Blogs = () => {
  return (
 <>
 
<div id="main-content">
  <div className="pageContainer">
    <div className="blogsHeaderWrapper"> 
      <div className="blogsHeaderContainer container">
        <div className>
          <div className="col-sm-12 col-center">
            <div className="row">
              <div className="col-sm-8">
                <div className="blogsFeaturedContainer">
                  <h2>Featured</h2>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="featuredBlogItem shadow">
                        <div className="card">
                          <img src="https://insemitech.com/wp-content/uploads/2024/01/Untitled-design.png" className="card-img-top" alt />
                          <div className="card-body">
                            <p className="card-category"><time dateTime="2024-01-08T23:05:48+05:30" itemProp="datePublished">08/01/2024</time> | 4 Min Read</p>
                            <p className="card-title">Unveiling the Intricacies: Custom vs Standard Cell VLSI Design</p>
                            <a href="https://insemitech.com/blogs/unveiling-the-intricacies-custom-vs-standard-cell-vlsi-design/" className="stretched-link" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="featuredBlogItem shadow">
                        <div className="card">
                          <img src="https://insemitech.com/wp-content/uploads/2023/12/standard-quality-control-collage-concept-2-scaled.jpg" className="card-img-top" alt />
                          <div className="card-body">
                            <p className="card-category"><time dateTime="2023-12-14T12:03:27+05:30" itemProp="datePublished">14/12/2023</time> | 3 Min Read</p>
                            <p className="card-title">The Impact of Post Silicon Validation on Time-to-Market</p>
                            <a href="https://insemitech.com/blogs/the-impact-of-post-silicon-validation-on-time-to-market/" className="stretched-link" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="featuredBlogItem shadow">
                        <div className="card">
                          <img src="https://insemitech.com/wp-content/uploads/2023/11/ai.png" className="card-img-top" alt />
                          <div className="card-body">
                            <p className="card-category"><time dateTime="2023-11-30T16:13:21+05:30" itemProp="datePublished">30/11/2023</time> | 2 Min Read</p>
                            <p className="card-title">Navigating the Horizon: Future Trends in ASIC Technology</p>
                            <a href="https://insemitech.com/blogs/navigating-the-horizon-future-trends-in-asic-technology/" className="stretched-link" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="blogsMostPopularContainer">
                  <h2 className="font-orange">Most Popular</h2>
                  <div className="blogsMostPopularItem">
                    <p className="card-category"><time dateTime="2024-01-08T23:05:48+05:30" itemProp="datePublished">08/01/2024</time> | 4 Min Read</p>
                    <p className="card-title"><a href="https://insemitech.com/blogs/unveiling-the-intricacies-custom-vs-standard-cell-vlsi-design/">Unveiling the Intricacies: Custom vs Standard Cell VLSI Design</a></p>
                  </div>
                  <div className="blogsMostPopularItem">
                    <p className="card-category"><time dateTime="2023-12-14T12:03:27+05:30" itemProp="datePublished">14/12/2023</time> | 3 Min Read</p>
                    <p className="card-title"><a href="https://insemitech.com/blogs/the-impact-of-post-silicon-validation-on-time-to-market/">The Impact of Post Silicon Validation on Time-to-Market</a></p>
                  </div>
                  <div className="blogsMostPopularItem">
                    <p className="card-category"><time dateTime="2023-11-30T16:13:21+05:30" itemProp="datePublished">30/11/2023</time> | 2 Min Read</p>
                    <p className="card-title"><a href="https://insemitech.com/blogs/navigating-the-horizon-future-trends-in-asic-technology/">Navigating the Horizon: Future Trends in ASIC Technology</a></p>
                  </div>
                  <div className="blogsMostPopularItem">
                    <p className="card-category"><time dateTime="2023-08-16T13:52:37+05:30" itemProp="datePublished">16/08/2023</time> | 3 Min Read</p>
                    <p className="card-title"><a href="https://insemitech.com/blogs/unveiling-the-digital-magic-dfts-crucial-role-in-revolutionizing-communication-systems/">Unveiling the Digital Magic: DFT’s Crucial Role in Revolutionizing Communication Systems</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="blogsContentWrapper">
      <div className="container blogsContentContainer">
        <h2>Latest</h2>
        <div className="row">
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2024/01/Untitled-design.png" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2024-01-08T23:05:48+05:30" itemProp="datePublished">08/01/2024</time> | 4 Min Read</p>
                  <p className="card-title">Unveiling the Intricacies: Custom vs Standard Cell VLSI Design</p>
                  <a href="https://insemitech.com/blogs/unveiling-the-intricacies-custom-vs-standard-cell-vlsi-design/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2023/12/standard-quality-control-collage-concept-2-scaled.jpg" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2023-12-14T12:03:27+05:30" itemProp="datePublished">14/12/2023</time> | 3 Min Read</p>
                  <p className="card-title">The Impact of Post Silicon Validation on Time-to-Market</p>
                  <a href="https://insemitech.com/blogs/the-impact-of-post-silicon-validation-on-time-to-market/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2023/11/ai.png" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2023-11-30T16:13:21+05:30" itemProp="datePublished">30/11/2023</time> | 2 Min Read</p>
                  <p className="card-title">Navigating the Horizon: Future Trends in ASIC Technology</p>
                  <a href="https://insemitech.com/blogs/navigating-the-horizon-future-trends-in-asic-technology/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2023/09/1.png" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2023-09-27T14:49:41+05:30" itemProp="datePublished">27/09/2023</time> | 3 Min Read</p>
                  <p className="card-title">DFT in FPGA and ASIC Design: Ensuring Faultless Electronics</p>
                  <a href="https://insemitech.com/blogs/dft-in-fpga-and-asic-design-ensuring-faultless-electronics/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2023/09/ip.jpeg" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2023-09-20T23:15:19+05:30" itemProp="datePublished">20/09/2023</time> | 5 Min Read</p>
                  <p className="card-title">Automate or Stagnate: The Choice for Modern IP Management</p>
                  <a href="https://insemitech.com/blogs/automate-or-stagnate-the-choice-for-modern-ip-management/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2023/09/fpga.png" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2023-09-13T15:16:55+05:30" itemProp="datePublished">13/09/2023</time> | 3 Min Read</p>
                  <p className="card-title">An In-Depth Introduction to Field-Programmable Gate Arrays (FPGAs)</p>
                  <a href="https://insemitech.com/blogs/an-in-depth-introduction-to-field-programmable-gate-arrays-fpgas/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2023/08/dc.jpeg" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2023-08-16T13:52:37+05:30" itemProp="datePublished">16/08/2023</time> | 3 Min Read</p>
                  <p className="card-title">Unveiling the Digital Magic: DFT’s Crucial Role in Revolutionizing Communication Systems</p>
                  <a href="https://insemitech.com/blogs/unveiling-the-digital-magic-dfts-crucial-role-in-revolutionizing-communication-systems/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2023/07/1.webp" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2023-07-19T12:09:48+05:30" itemProp="datePublished">19/07/2023</time> | 4 Min Read</p>
                  <p className="card-title">Security Testing: Ensuring the Protection of Software and User Data</p>
                  <a href="https://insemitech.com/blogs/security-testing/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2023/07/AI.jpg" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2023-07-17T14:30:47+05:30" itemProp="datePublished">17/07/2023</time> | 3 Min Read</p>
                  <p className="card-title">Emerging Trends in VLSI Physical Design: Machine Learning, AI, and Automation</p>
                  <a href="https://insemitech.com/blogs/emerging-trends-in-vlsi-physical-design-machine-learning-ai-and-automation/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2023/06/20230703123958_fpdl.in_future-artificial-intelligence-robot-cyborg_31965-3378_large-1.jpg" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2023-06-27T12:15:42+05:30" itemProp="datePublished">27/06/2023</time> | 3 Min Read</p>
                  <p className="card-title">Applications of VLSI in Robotics and Automation.</p>
                  <a href="https://insemitech.com/blogs/applications-of-vlsi-in-robotics-and-automation/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2023/06/fortuneindia_2021-12_54ed6f59-fa94-4794-8d7e-eafde17f393e_semiconductor.webp" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2023-06-26T23:45:23+05:30" itemProp="datePublished">26/06/2023</time> | 3 Min Read</p>
                  <p className="card-title">Exploring the Challenges of VLSI Design: Navigating Complexity for Success</p>
                  <a href="https://insemitech.com/blogs/exploring-the-challenges-of-vlsi-design-navigating-complexity-for-success/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2023/06/Screenshot-2023-06-13-at-3.54.42-PM.png" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2023-06-13T15:58:04+05:30" itemProp="datePublished">13/06/2023</time> | 2 Min Read</p>
                  <p className="card-title">DFT Techniques for Efficient Test Generation and Fault Coverage</p>
                  <a href="https://insemitech.com/blogs/dft-techniques-for-efficient-test-generation-and-fault-coverage/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2023/05/connected-cars.jpg" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2023-05-16T21:14:21+05:30" itemProp="datePublished">16/05/2023</time> | 3 Min Read</p>
                  <p className="card-title">The challenges and opportunities of integrating IoT technologies into automobiles</p>
                  <a href="https://insemitech.com/blogs/the-challenges-and-opportunities-of-integrating-iot-technologies-into-automobiles/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2023/05/2572007-scaled-e1683183095397.jpg" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2023-05-05T11:55:26+05:30" itemProp="datePublished">05/05/2023</time> | 3 Min Read</p>
                  <p className="card-title">How Can Physical Design Optimize VLSI Performance?</p>
                  <a href="https://insemitech.com/blogs/how-can-physical-design-optimize-vlsi-performance-2/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2023/02/1231.png" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2023-02-09T07:18:51+05:30" itemProp="datePublished">09/02/2023</time> | 4 Min Read</p>
                  <p className="card-title">Three-Dimensional Computer-Aided Design (3D CAD) Software Development at InSemi</p>
                  <a href="https://insemitech.com/blogs/cad-software-development/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2023/02/1232.png" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2023-02-07T09:15:12+05:30" itemProp="datePublished">07/02/2023</time> | 6 Min Read</p>
                  <p className="card-title">FinFET &amp; Its Significance in Power Electronics</p>
                  <a href="https://insemitech.com/blogs/finfet-in-power-electronics/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2022/11/33.png" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2022-12-08T09:48:38+05:30" itemProp="datePublished">08/12/2022</time> | 4 Min Read</p>
                  <p className="card-title">10 Tips to Ensure a Better Security of the Embedded Systems</p>
                  <a href="https://insemitech.com/blogs/10-tips-to-ensure-a-better-security-of-the-embedded-systems/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2022/11/140.png" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2022-11-24T18:36:23+05:30" itemProp="datePublished">24/11/2022</time> | 1 Min Read</p>
                  <p className="card-title">InSemi &amp; Ausdia – Two Tech Leaders Partner for Semicon Design Excellence!</p>
                  <a href="https://insemitech.com/blogs/insemi-ausdia-partnership/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2022/11/32.png" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2022-11-17T13:33:27+05:30" itemProp="datePublished">17/11/2022</time> | 5 Min Read</p>
                  <p className="card-title">Checklist for Application Security Risk Assessment</p>
                  <a href="https://insemitech.com/blogs/checklist-for-application-security-risk-assessment/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2022/11/35.png" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2022-11-10T04:34:30+05:30" itemProp="datePublished">10/11/2022</time> | 5 Min Read</p>
                  <p className="card-title">Practical Aspects of Communication Protocol Designs</p>
                  <a href="https://insemitech.com/blogs/practical-aspects-of-communication-protocol-designs/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2022/11/34.png" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2022-11-08T20:07:38+05:30" itemProp="datePublished">08/11/2022</time> | 5 Min Read</p>
                  <p className="card-title">UART Communication – How It Works?</p>
                  <a href="https://insemitech.com/blogs/uart-communication-how-it-works/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2022/09/630.png" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2022-09-27T11:37:45+05:30" itemProp="datePublished">27/09/2022</time> | 4 Min Read</p>
                  <p className="card-title">5 Major Pitfalls to Avoid w.r.t Embedded Software Architecture</p>
                  <a href="https://insemitech.com/blogs/5-major-pitfalls-to-avoid-w-r-t-embedded-software-architecture/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2022/09/484.png" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2022-09-20T09:49:48+05:30" itemProp="datePublished">20/09/2022</time> | 4 Min Read</p>
                  <p className="card-title">Overlooked Elements of Embedded Software Development Process</p>
                  <a href="https://insemitech.com/blogs/overlooked-elements-of-embedded-software-development-process/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2022/09/580.png" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2022-09-14T09:22:10+05:30" itemProp="datePublished">14/09/2022</time> | 5 Min Read</p>
                  <p className="card-title">How Semiconductor industry can contribute to environmental sustainability?</p>
                  <a href="https://insemitech.com/blogs/semicon-industry-contribute-environmental-sustainability/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2022/09/549.png" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2022-09-09T10:25:10+05:30" itemProp="datePublished">09/09/2022</time> | 6 Min Read</p>
                  <p className="card-title">Software Testing Trends to Outshine in 2022</p>
                  <a href="https://insemitech.com/blogs/software-testing-trends-2022/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2022/08/790.png" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2022-08-24T08:49:41+05:30" itemProp="datePublished">24/08/2022</time> | 5 Min Read</p>
                  <p className="card-title">Testing Embedded Systems for Sure-Shot Success</p>
                  <a href="https://insemitech.com/blogs/testing-embedded-systems-for-sure-shot-success/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2022/08/789.png" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2022-08-18T09:31:15+05:30" itemProp="datePublished">18/08/2022</time> | 5 Min Read</p>
                  <p className="card-title">Identify your IP Cores, Safeguard your interests!</p>
                  <a href="https://insemitech.com/blogs/identify-your-ip-cores-safeguard-your-interests/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2022/08/301.png" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2022-08-11T11:49:18+05:30" itemProp="datePublished">11/08/2022</time> | 4 Min Read</p>
                  <p className="card-title">Verification IP for Complex Designs</p>
                  <a href="https://insemitech.com/blogs/verification-ip-for-complex-designs/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2022/08/21.png" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2022-08-01T16:01:29+05:30" itemProp="datePublished">01/08/2022</time> | 5 Min Read</p>
                  <p className="card-title">Engineering Change of Order in Physical Design</p>
                  <a href="https://insemitech.com/blogs/engineering-change-of-order-in-physical-design/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2022/07/100.png" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2022-07-29T12:28:35+05:30" itemProp="datePublished">29/07/2022</time> | 6 Min Read</p>
                  <p className="card-title">Hierarchical Physical Design</p>
                  <a href="https://insemitech.com/blogs/hierarchical-physical-design/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2022/07/97.png" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2022-07-19T09:45:59+05:30" itemProp="datePublished">19/07/2022</time> | 5 Min Read</p>
                  <p className="card-title">Maximize your competitiveness with specialized DFT solutions</p>
                  <a href="https://insemitech.com/blogs/maximize-your-competitiveness-with-specialized-dft-solutions/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2022/05/blog-1.png" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2022-06-20T11:57:18+05:30" itemProp="datePublished">20/06/2022</time> | 5 Min Read</p>
                  <p className="card-title">Countering Lower Technology Node Challenges with Optimal DFT Solutions</p>
                  <a href="https://insemitech.com/blogs/countering-lower-technology-node-challenges-with-optimal-dft-solutions/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="fullBlogItem shadow">
              <div className="card">
                <img src="https://insemitech.com/wp-content/uploads/2022/05/blog-2.png" className="card-img-top" alt />
                <div className="card-body">
                  <p className="card-category"><time dateTime="2022-06-07T16:55:11+05:30" itemProp="datePublished">07/06/2022</time> | 4 Min Read</p>
                  <p className="card-title">DFT- A critical element in product development</p>
                  <a href="https://insemitech.com/blogs/dft-a-critical-element-in-product-development/" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

 
 
 </>
  )
}

export default Blogs