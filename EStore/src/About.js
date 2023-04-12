import Pageimage from "./Components/Pageimage";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
function Services()
{
  return (
    <>
    <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="service-item">
                <div className="icon">
                  <i className="fa fa-gear"></i>
                </div>
                <div className="down-content">
                  <h4>Product Management</h4>
                  <p>
                    We manage all the products available on the platform
                  </p>
                  <a href="#" className="filled-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <div className="icon">
                  <i className="fa fa-gear"></i>
                </div>
                <div className="down-content">
                  <h4>Customer Relations</h4>
                  <p>
                    We build customer relations with trust and fairplay
                  </p>
                  <a href="#" className="filled-button">
                    Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <div className="icon">
                  <i className="fa fa-gear"></i>
                </div>
                <div className="down-content">
                  <h4>Global Collection</h4>
                  <p>
                    We have all the global collections in trends present on this platform
                  </p>
                  <a href="#" className="filled-button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Background()
{
  return (
    <>
    <div className="best-features about-features">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Our Background</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-image">
                <img src="feature-image.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="left-content">
                <h4>Who we are &amp; What we do?</h4>
                <p>
                  We are a team of software developers. Currently studying in air university. Our degree program is BSSE 6th semester. We currently are learning about the web development.
                  <br />
                  <br />
                  We currently are developing a web engineering project based on a e-commerce website or an online store. Our project is an online clothing store where users can buy and sell cloths
                </p>
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-behance"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Team() {
  return (
    <>
      <div className="team-members">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Our Team Members</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="team-member">
                <div className="thumb-container">
                  <img src="Umar.jpg" alt="" />
                  <div className="hover-effect">
                    <div className="hover-content">
                      <ul className="social-icons">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-behance"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="down-content">
                  <h4>Umar Akhtar</h4>
                  <span>CO-Founder</span>
                  <p>
                    Competitive programer and Gamer
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="team-member">
                <div className="thumb-container">
                  <img src="Malkoo.jpg" alt="" />
                  <div className="hover-effect">
                    <div className="hover-content">
                      <ul className="social-icons">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-behance"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="down-content">
                  <h4>Amir Malkoo</h4>
                  <span>Product Expert</span>
                  <p>
                    Business man and programmer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default function About(props) {
  return (
    <>
      <Header main={props.main} />
      <Pageimage
        image='url("about-heading.jpg")'
        title="About us"
        subtitle="Our company"
      />
      <Background/>
      <Team/>
      <Services/>
      <Footer />
    </>
  );
}
