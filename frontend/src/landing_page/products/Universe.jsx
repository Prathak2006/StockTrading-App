function Universe() {
    return (
        <div className="container">
            <div className="row text-center">

                <h1 className="mt-5 fs-2">The Zerodha Universe</h1>

                <p className="mt-3 text-muted">
                    Extend your trading and investment experience even further
                    with our partner platforms
                </p>

      
                <div className="col-12 col-sm-6 col-md-4 p-3 mt-3">
                    <img
                        src="images/sensibullLogo.svg"
                        alt="Sensibull"
                        className="img-fluid"
                    />
                    <p className="text-muted mt-3 px-2 px-md-5 small">
                        Options trading platform that lets you create strategies,
                        analyze positions, and examine data points like open
                        interest, FII/DII, and more.
                    </p>
                </div>

              
                <div className="col-12 col-sm-6 col-md-4 p-3 mt-3">
                    <img
                        src="images/zerodhaFundhouse.png"
                        alt="Zerodha Fundhouse"
                        className="img-fluid"
                        style={{ width: "30%" }}
                    />
                    <p className="text-muted mt-3 px-2 px-md-5 small">
                        Our asset management venture that is creating simple
                        and transparent index funds to help you save for your goals.
                    </p>
                </div>

         
                <div className="col-12 col-sm-6 col-md-4 p-3 mt-3">
                    <img
                        src="images/tijori.svg"
                        alt="Tijori"
                        className="img-fluid"
                        style={{ width: "25%" }}
                    />
                    <p className="text-muted mt-3 px-2 px-md-5 small">
                        Investment research platform that offers detailed insights
                        on stocks, sectors, supply chains, and more.
                    </p>
                </div>

             
                <div className="col-12 col-sm-6 col-md-4 p-3 mt-3">
                    <img
                        src="images/streakLogo.png"
                        alt="Streak"
                        className="img-fluid"
                        style={{ width: "25%" }}
                    />
                    <p className="text-muted mt-3 px-2 px-md-5 small">
                        Systematic trading platform that allows you to create
                        and backtest strategies without coding.
                    </p>
                </div>

          
                <div className="col-12 col-sm-6 col-md-4 p-3 mt-3">
                    <img
                        src="images/smallcaseLogo.png"
                        alt="Smallcase"
                        className="img-fluid"
                        style={{ width: "30%" }}
                    />
                    <p className="text-muted mt-3 px-2 px-md-5 small">
                        Thematic investing platform that helps you invest in
                        diversified baskets of stocks or ETFs.
                    </p>
                </div>


                <div className="col-12 col-sm-6 col-md-4 p-3 mt-3">
                    <img
                        src="images/dittoLogo.png"
                        alt="Ditto"
                        className="img-fluid"
                        style={{ width: "25%" }}
                    />
                    <p className="text-muted mt-3 px-2 px-md-5 small">
                        Personalized advice on life and health insurance.
                        No spam and no mis-selling.
                    </p>
                </div>

               
                <div className="col-12 my-5">
                    <a href="/signup" className="text-decoration-none">
                        <button className="mt-3 btn btn-primary p-2 px-4">
                            Sign Up for free
                        </button>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Universe;