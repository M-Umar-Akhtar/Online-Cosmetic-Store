import { Link } from "react-router-dom";

function Navigation(props) {
  const array = [];
  console.log(props.main);
  for (var i = 0; i < 5; i++) {
    if (i === props.main) {
      array.push("nav-item active");
    } else {
      array.push("nav-item");
    }
  }
  console.log(array);
  const logo = {
    width: "60px",
    height: "60px",
    marginTop: "-10px",
    border: "2px solid red",
    borderRadius: "50%",
    overflow: "auto",
    objectFit: "cover",
  };
  return (
    <>
      <header className="">
        <nav className="navbar navbar-expand-lg">
          <div style={{ marginLeft: "30px" }}>
            <a className="navbar-brand" href="index.html">
              <h2>
                Modudi <em>Swag</em>
              </h2>
            </a>
            <p style={{ margin: "-10px 5px 5px 5px", color: "white" }}>
              <b>Where Fashion meets Swag</b>
            </p>
          </div>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className={array[0]}>
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className={array[1]}>
                <Link className="nav-link" to="/product">
                  Our Products
                </Link>
              </li>
              <li className={array[2]}>
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className={array[3]}>
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cart
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className={array[4]}>
                <Link className="nav-link " to="/profile">
                  <img
                    src="Malkoo.jpg"
                    style={{
                      width: "60px",
                      height: "40px",
                      marginTop: "-10px",
                      border: "2px solid red",
                      borderRadius: "50%",
                      overflow: "auto",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navigation;
