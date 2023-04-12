import Pageimage from "./Components/Pageimage";
import Header from "./Components/Header.js";
import Cards from "./Components/Cards.js";
import Footer from "./Components/Footer.js";
function ProductCards() {
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
    {
      image: "product_04.jpg",
      title: "VeryGood",
      price: "50.00$",
      description: "Very good product would recommend",
    },
    {
      image: "product_05.jpg",
      title: "VeryGood",
      price: "60.00$",
      description: "Very good product would recommend",
    },
    {
      image: "product_06.jpg",
      title: "VeryGood",
      price: "70.00$",
      description: "Very good product would recommend",
    },
  ];
  return (
    <>
      <div class="products">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="filters">
                <ul>
                  <li class="active" data-filter="*">
                    All Products
                  </li>
                  <li data-filter=".des">Featured</li>
                  <li data-filter=".dev">Flash Deals</li>
                  <li style={{marginRight: '600px'}} data-filter=".gra">Last Minute</li>
                  <li data-filter=".gra">Show Cart</li>
                </ul>
              </div>
            </div>
            <div class="col-md-12">
              <div class="filters-content">
                <div class="row grid">
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
          </div>
        </div>
      </div>
    </>
  );
}
export default function Product(props) {
  return (
    <>
      <Header main={props.main} />
      <Pageimage
        image='url("products-heading.jpg")'
        title="new arrivals"
        subtitle="MODUDI'S products"
      />
      <ProductCards />
      <Footer />
    </>
  );
}
