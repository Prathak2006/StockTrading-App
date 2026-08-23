function Pricing() {
  return (
    <div className="container py-4 py-md-5">
      <div className="row align-items-center">

    
        <div className="col-12 col-lg-5 mb-5 mb-lg-0">

          <h1 className="fs-3 fs-md-2 mb-4">
            Unbeatable pricing
          </h1>

          <p className="fs-6 fs-md-5 lh-base text-secondary">
            We pioneered the concept of discount broking and price
            transparency in India. Flat fees and no hidden charges.
          </p>

          <a
            href="#"
            className="text-decoration-none fs-6 fs-md-5"
          >
            See pricing
            <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>

        </div>


  
        <div className="col-12 col-lg-7">

          <div className="row text-center">

     
            <div className="col-12 col-md-4 mb-4 mb-md-0">

              <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-2">

                <img
                  src="/images/pricing-eq.svg"
                  alt="pricing"
                  className="img-fluid"
                  width="90"
                />

                <p className="mb-0 small">
                  Free account
                  <br />
                  opening
                </p>

              </div>

            </div>


   
            <div className="col-12 col-md-4 mb-4 mb-md-0">

              <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-2">

                <img
                  src="/images/pricing-eq.svg"
                  alt="pricing"
                  className="img-fluid"
                  width="90"
                />

                <p className="mb-0 small">
                  Free equity delivery
                  <br />
                  and direct mutual funds
                </p>

              </div>

            </div>


           
            <div className="col-12 col-md-4">

              <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-2">

                <img
                  src="/images/other-trades.svg"
                  alt="pricing"
                  className="img-fluid"
                  width="100"
                />

                <p className="mb-0 small">
                  Intraday and
                  <br />
                  F&O
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Pricing;