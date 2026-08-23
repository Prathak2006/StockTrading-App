function Awards() {
  return (
    <div className="container mt-4 mt-md-5">
      <div className="row align-items-center">

        <div className="col-12 col-lg-6 text-center p-3 p-md-5">
          <img
            src="/images/largestBroker.svg"
            alt="trophy-img"
            className="img-fluid"
          />
        </div>

  
        <div className="col-12 col-lg-6 p-3 p-md-5 mt-2 mt-md-3">

          <h1 className="fs-3 fs-md-2">
            Largest stock broker in India
          </h1>

          <p className="mb-4 mb-md-5 lh-base">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          
          <div className="row">

            <div className="col-12 col-md-6">
              <ul>
                <li>
                  <p className="mb-2">Futures and Options</p>
                </li>
                <li>
                  <p className="mb-2">Commodity derivatives</p>
                </li>
                <li>
                  <p className="mb-2">Currency derivatives</p>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-6">
              <ul>
                <li>
                  <p className="mb-2">Stocks & IPOs</p>
                </li>
                <li>
                  <p className="mb-2">Direct mutual funds</p>
                </li>
                <li>
                  <p className="mb-2">Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>

          </div>

         
          <div className="text-center text-md-start mt-3">
            <img
              src="/images/pressLogos.png"
              alt="PressLogo"
              className="img-fluid w-75 w-md-100"
            />
          </div>

        </div>

      </div>
    </div>
  );
}

export default Awards;