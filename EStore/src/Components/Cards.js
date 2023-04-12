function Cards(props) {
  return (
    <>
      <div className="col-md-4">
        <div className="product-item">
          <a href="#">
            <img src={props.image} alt="" />
          </a>
          <div className="down-content">
            <a href="#">
              <h4>{props.title}</h4>
            </a>
            <h6>{props.price}</h6>
            <p>{props.description}</p>
            <ul className="stars">
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
            </ul>
            <span>Reviews (24)</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
