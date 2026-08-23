function Apps() {
    return (
        <div >
            <div className="row text-center">
                <h1 className=" fs-2">The Zerodha Universe</h1>
                <p className="mt-3 text-muted">Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-12 col-md-4 p-3 mt-3">
                    <img src="\images\sensibullLogo.svg" alt="img" />
                    <p className="text-muted mt-3 px-3" style={{ fontSize: "0.8rem" }}>Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className="col-12 col-md-4 p-3 mt-3">
                    <img src="\images\zerodhaFundhouse.png" alt="img" style={{ width: "30%" }} />
                    <p className="text-muted mt-3 px-3" style={{ fontSize: "0.8rem" }}>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.

                    </p>
                </div>
                <div className="col-12 col-md-4 p-3 mt-3">
                    <img src="\images\tijori.svg" alt="img" style={{ width: "25%" }} />
                    <p className="text-muted mt-3 px-3" style={{ fontSize: "0.8rem" }}>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.

                    </p>
                </div>
                <div className="col-12 col-md-4 p-3 mt-3">
                    <img src="\images\streakLogo.png" alt="img" style={{ width: "25%" }} />
                    <p className="text-muted mt-3 px-3" style={{ fontSize: "0.8rem" }}>
                        Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.
                    </p>
                </div>
                <div className="col-12 col-md-4 p-3 mt-3">
                    <img src="\images\smallcaseLogo.png" alt="img" style={{ width: "30%" }} />
                    <p className="text-muted mt-3 px-3" style={{ fontSize: "0.8rem" }}>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.

                    </p>
                </div>
                <div className="col-12 col-md-4 p-3 mt-3">
                    <img src="\images\dittoLogo.png" alt="img" style={{ width: "25%" }} />
                    <p className="text-muted mt-3 px-3" style={{ fontSize: "0.8rem" }}>Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.
                    </p>
                </div>


            </div>
        </div>
    );
}

export default Apps;