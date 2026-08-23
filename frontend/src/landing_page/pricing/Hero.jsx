function Hero() {
  return (
    <div className="container">

      {/* Heading */}
      <div className="row p-3 p-md-5 mt-3 mt-md-4 text-center">
        <div className="col-12">
          <h1 className="fs-2">
            Charges
          </h1>

          <h3 className="text-muted fs-5 mt-3">
            List of all charges and taxes
          </h3>
        </div>
      </div>


      {/* Charges */}
      <div className="row p-2 p-md-5 mt-2 mt-md-3">

        {/* Equity Delivery */}
        <div className="col-12 col-md-4 p-3 p-md-5 text-center">
          <img
            src="/images/pricingEquity.svg"
            alt="equity delivery"
            className="img-fluid mb-3"
          />

          <h3 className="fs-4">
            Free equity delivery
          </h3>

          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free
            — ₹ 0 brokerage.
          </p>
        </div>


        {/* Intraday & F&O */}
        <div className="col-12 col-md-4 p-3 p-md-5 text-center">
          <img
            src="/images/intradayTrades.svg"
            alt="intraday trades"
            className="img-fluid mb-3"
          />

          <h3 className="fs-4">
            Intraday and F&O trades
          </h3>

          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
            Flat ₹20 on all option trades.
          </p>
        </div>


        {/* Direct MF */}
        <div className="col-12 col-md-4 p-3 p-md-5 text-center">
          <img
            src="/images/pricingEquity.svg"
            alt="direct mutual funds"
            className="img-fluid mb-3"
          />

          <h3 className="fs-4">
            Free direct MF
          </h3>

          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Hero;