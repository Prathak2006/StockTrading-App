import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="container py-4 py-md-5">
      <div className="row text-center justify-content-center">

        <div className="col-12">
          <h1 className="mt-3 mt-md-5 fs-3 fs-md-2 mb-3">
            Open a Zerodha account
          </h1>

          <p className="text-secondary fs-6 fs-md-5">
            Modern platforms and apps, ₹0 investments, and flat ₹20
            intraday and F&O trades.
          </p>

          <button onClick={handleSignup} className="btn btn-primary px-4 py-2 mt-3 mt-md-4 fs-6 fs-md-5">
            Sign up for free
          </button>

        </div>

      </div>
    </div>
  );
}

export default OpenAccount;