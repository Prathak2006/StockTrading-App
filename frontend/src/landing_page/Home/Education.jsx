function Education() {
  return (
    <div className="container mt-4 mt-md-5">
      <div className="row align-items-center">

      
        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0 order-lg-1 order-2">
          <img
            src="/images/education.svg"
            alt="education-img"
            className="img-fluid w-75"
          />
        </div>

       
        <div className="col-12 col-lg-6 order-lg-2 order-1">

          <h1 className="fs-3 fs-md-2 mb-4">
            Free and open market education
          </h1>

          <p className="fs-6 fs-md-5 lh-base text-secondary ">
            Varsity, the largest online stock market education book in the
            world covering everything from the basics to advanced trading.
          </p>

          <a
            href="#"
            className="text-decoration-none fs-6 fs-md-5"
          >
            Varsity
            <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>

          <p className="fs-6 fs-md-5 lh-base text-secondary mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a
            href="#"
            className="text-decoration-none fs-6 fs-md-5"
          >
            TradingQ&A
            <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>

        </div>

      </div>
    </div>
  );
}

export default Education;