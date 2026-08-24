import { useNavigate } from "react-router-dom";

function Hero() {

  const navigate = useNavigate;

    const handleSignup = () => {
        navigate("/signup");
    };

  return (
    <div className="container py-4 py-md-5">
      <div className="row text-center justify-content-center">

        <div className="col-12">
          <img
            src="/images/homeHero.png"
            alt="HomeHero"
            className="img-fluid mb-4 mb-md-5"
          />
        </div>

        <div className="col-12">
          <h1 className="mt-2 mt-md-4 fs-2 fs-md-1">
            Invest in everything
          </h1>
        </div>

        <div className="col-12 col-md-10 col-lg-8">
          <p className="fs-6 fs-md-4 text-muted mt-3">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
        </div>

        <div className="col-12">
         
            <button onClick={handleSignup}
              className="btn btn-primary px-4 py-2 mt-3 mt-md-4 fs-6 fs-md-5"
            >
              Sign up for free
            </button>
     
        </div>

      </div>
    </div>
  );
}

export default Hero;