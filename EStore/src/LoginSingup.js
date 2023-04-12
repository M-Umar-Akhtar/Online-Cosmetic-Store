import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const handleClick = (event) => {
    // 👇️ navigate programmatically
    event.preventDefault();
    navigate("/");
  };
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "rgb(20,20,20)" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-5 col-xl-5 d-flex flex-column align-items-center order-1 order-lg-1">
                      <div>
                        <img
                          src="signin-image.jpg"
                          className="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                      <div className="m-4">
                        <Link
                          to="/signup"
                          style={{
                            textDecoration: "none",
                            color: "#f33f3f",
                          }}
                        >
                          Create an account
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-2">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign in
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={handleClick}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              required
                            />
                            <label className="form-label" for="form3Example3c">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              required
                            />
                            <label className="form-label" for="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>
                        <div class="row mb-4">
                          <div class="col-md-6 d-flex justify-content-center">
                            <a
                              href="#!"
                              style={{
                                textDecoration: "none",
                                color: "#f33f3f",
                              }}
                            >
                              Forgot password?
                            </a>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4  mb-3 mb-lg-4">
                          <button className="filled-button" type="submit">
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Signup() {
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
    navigate("/login");
  };
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "rgb(20,20,20)" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              required
                            />
                            <label className="form-label" for="form3Example1c">
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              required
                            />
                            <label className="form-label" for="form3Example3c">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              required
                            />
                            <label className="form-label" for="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              required
                            />
                            <label className="form-label" for="form3Example4cd">
                              Repeat your password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button className="filled-button" type="submit">
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-5 d-flex flex-column align-items-center order-1 order-lg-2">
                      <div className="m-4">
                        <img
                          src="signup-image.jpg"
                          className="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                      <div className="m-4 col-xl-5">
                        <Link
                          to="/login"
                          style={{
                            textDecoration: "none",
                            color: "rgb(223, 71, 89)",
                          }}
                        >
                          Already have an account. Signin
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export { Login, Signup };
