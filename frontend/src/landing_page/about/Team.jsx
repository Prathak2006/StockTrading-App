function Team() {
  return (
    <div className="container">

      {/* Heading */}
      <div className="row py-4 py-md-5 mt-2">
        <div className="col-12">
          <h1 className="text-center fs-2">
            People
          </h1>
        </div>
      </div>


      {/* Nithin */}
      <div className="row p-3 p-md-5">

        {/* Person */}
        <div className="col-12 col-md-4 text-center">
          <img
            src="/images/nithinKamath.jpg"
            alt="ceo-image"
            className="rounded-circle img-fluid"
            style={{ width: "50%" }}
          />

          <h5 className="mt-4">
            Nithin Kamath
          </h5>

          <h6 className="text-muted mt-3">
            Founder, CEO
          </h6>
        </div>


        {/* Description */}
        <div className="col-12 col-md-8 lh-lg text-muted mt-4 mt-md-0">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>
            Playing basketball is his zen.
          </p>

          <p>
            Connect on{" "}
            <a href="/" className="text-decoration-none">
              Homepage
            </a>{" "}
            /{" "}
            <a href="/" className="text-decoration-none">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="/" className="text-decoration-none">
              Twitter
            </a>
          </p>
        </div>

      </div>


      {/* Team Members */}
      <div className="row mt-3">

        {/* Nikhil */}
        <div className="col-12 col-md-4 text-center p-4">
          <img
            src="/images/Nikhil.jpg"
            alt="co-founder"
            className="rounded-circle img-fluid"
            style={{ width: "50%" }}
          />

          <h5 className="mt-4">
            Nikhil Kamath
          </h5>

          <h6 className="text-muted mt-3">
            Co-founder & CFO
          </h6>
        </div>


        {/* Kailash */}
        <div className="col-12 col-md-4 text-center p-4">
          <img
            src="/images/Kailash.jpg"
            alt="team"
            className="rounded-circle img-fluid"
            style={{ width: "50%" }}
          />

          <h5 className="mt-4">
            Dr. Kailash Nadh
          </h5>

          <h6 className="text-muted mt-3">
            CTO
          </h6>
        </div>


        {/* Venu */}
        <div className="col-12 col-md-4 text-center p-4">
          <img
            src="/images/Venu.jpg"
            alt="team"
            className="rounded-circle img-fluid"
            style={{ width: "50%" }}
          />

          <h5 className="mt-4">
            Venu Madhav
          </h5>

          <h6 className="text-muted mt-3">
            COO
          </h6>
        </div>


        {/* Seema */}
        <div className="col-12 col-md-4 text-center p-4">
          <img
            src="/images/Seema.jpg"
            alt="team"
            className="rounded-circle img-fluid"
            style={{ width: "50%" }}
          />

          <h5 className="mt-4">
            Seema Patil
          </h5>

          <h6 className="text-muted mt-3">
            Director
          </h6>
        </div>


        {/* Karthik */}
        <div className="col-12 col-md-4 text-center p-4">
          <img
            src="/images/karthik.jpg"
            alt="team"
            className="rounded-circle img-fluid"
            style={{ width: "50%" }}
          />

          <h5 className="mt-4">
            Karthik Rangappa
          </h5>

          <h6 className="text-muted mt-3">
            Chief of Education
          </h6>
        </div>


        {/* Austin */}
        <div className="col-12 col-md-4 text-center p-4">
          <img
            src="/images/Austin.jpg"
            alt="team"
            className="rounded-circle img-fluid"
            style={{ width: "50%" }}
          />

          <h5 className="mt-4">
            Austin Prakesh
          </h5>

          <h6 className="text-muted mt-3">
            Director Strategy
          </h6>
        </div>

      </div>

    </div>
  );
}

export default Team;