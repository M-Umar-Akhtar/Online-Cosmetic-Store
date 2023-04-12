import Cards from "./Components/Cards.js";
import { Carousel } from "react-bootstrap";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import { Link } from 'react-router-dom'

function Crousal() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src="slide_01.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>Exicitng Products</h3>
          <p style={{color: 'white'}}>Find new and exciting products.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="slide_02.jpg" alt="Second slide" />

        <Carousel.Caption>
          <h3>New Trends</h3>
          <p style={{color: 'white'}}>Find new trends and fashions.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="slide_03.jpg" alt="Third slide" />

        <Carousel.Caption>
          <h3>New Style</h3>
          <p style={{color: 'white'}}>
            Always remain stylish.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
function MainContent() {
  const cards = [
    {
      image: "product_01.jpg",
      title: "VeryGood",
      price: "20.00$",
      description: "Very good product would recommend",
    },
    {
      image: "product_02.jpg",
      title: "VeryGood",
      price: "30.00$",
      description: "Very good product would recommend",
    },
    {
      image: "product_03.jpg",
      title: "VeryGood",
      price: "40.00$",
      description: "Very good product would recommend",
    },
  ];

  return (
    <>
      <div className="latest-products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Latest Products</h2>
                <Link to='/product'>
                  view all products <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
            {cards.map((cards) => (
              <Cards
                image={cards.image}
                title={cards.title}
                price={cards.price}
                description={cards.description}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="best-features">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>About Modudi Swag</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="left-content">
                <h4>Looking for the best products?</h4>
                <p>
                  <a
                    rel="nofollow"
                    href="https://templatemo.com/tm-546-sixteen-clothing"
                    target="_parent"
                  >
                    This Platform
                  </a>{" "}
                  provides latest trends and fashions. You can find all the latest designer cloths. The categories it provides are{" "}
                </p>
                <ul className="featured-list">
                  <li>
                    <a href="#">Men</a>
                  </li>
                  <li>
                    <a href="#">Women</a>
                  </li>
                  <li>
                    <a href="#">Childern</a>
                  </li>
                  <li>
                    <a href="#">Sports</a>
                  </li>
                  <li>
                    <a href="#">Formal ware</a>
                  </li>
                </ul>
                <Link to='/about' className="filled-button">
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-image">
                <img src="feature-image.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner-content">
                <div className="row">
                  <div className="col-md-8">
                    <h4>
                      Creative &amp; Unique <em>Modudi Swag</em> Products
                    </h4>
                    <p>
                      Easily buy and sell products through the website
                    </p>
                  </div>
                  <div className="col-md-4">
                    <Link to="/product" className="filled-button">
                      Purchase Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Home(props) {
  return (
    <>
      <Header main={props.main} />
      <Crousal />,
      <MainContent />
      <Footer />
    </>
  );
}

export default Home;
