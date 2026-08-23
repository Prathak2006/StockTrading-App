function Footer() {
    return (
        <footer style={{ backgroundColor: "rgb(250,250,250)" }} >
            <div className="container mt-5 border-top">

                <div className="row mt-5">

                   
                    <div className="col-12 col-sm-6 col-md-4 col-lg mb-4">
                        <img
                            src="/logo.png"
                            alt="logo"
                            className="img-fluid mb-3"
                            style={{ width: "60%" }}
                        />

                        <p className="text-secondary">
                            <small>
                                &copy; 2010 - 2026, Zerodha Broking Ltd.
                                <br />
                                All rights reserved.
                            </small>
                        </p>

                        <div className="d-flex gap-4 text-muted">
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                            <i className="fa-brands fa-x-twitter"></i>
                        </div>

                        <hr />

                        <div className="d-flex gap-4 text-muted">
                            <i className="fa-brands fa-whatsapp"></i>
                            <i className="fa-brands fa-youtube"></i>
                            <i className="fa-brands fa-telegram"></i>
                        </div>

                        <div className="mt-4">
                            <img
                                src="images/googlePlayBadge.svg"
                                alt="playStore"
                                className="img-fluid"
                            />
                        </div>
                    </div>

                    
                    <div className="col-12 col-sm-6 col-md-4 col-lg lh-lg mb-4 footer-links">
                        <p><b>Account</b></p>
                        <a href="">Open demat account</a><br />
                        <a href="">Minor demat account</a><br />
                        <a href="">NRI demat account</a><br />
                        <a href="">HUF demat account</a><br />
                        <a href="">Commodity</a><br />
                        <a href="">Dematerialisation</a><br />
                        <a href="">Fund transfer</a><br />
                        <a href="">MTF</a>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg lh-lg mb-4 footer-links">
                        <p><b>Support</b></p>
                        <a href="">Contact us</a><br />
                        <a href="">Support portal</a><br />
                        <a href="">How to file a complaint?</a><br />
                        <a href="">Status of your complaints</a><br />
                        <a href="">Bulletin</a><br />
                        <a href="">Circular</a><br />
                        <a href="">Z-Connect blog</a><br />
                        <a href="">Downloads</a>
                    </div>

       
                    <div className="col-12 col-sm-6 col-md-4 col-lg lh-lg mb-4 footer-links">
                        <p><b>Company</b></p>
                        <a href="">About</a><br />
                        <a href="">Philosophy</a><br />
                        <a href="">Press & media</a><br />
                        <a href="">Careers</a><br />
                        <a href="">Zerodha Cares (CSR)</a><br />
                        <a href="">Zerodha.tech</a><br />
                        <a href="">Open source</a><br />
                        <a href="">Referral program</a>
                    </div>

     
                    <div className="col-12 col-sm-6 col-md-4 col-lg lh-lg mb-4 footer-links">
                        <p><b>Quick Links</b></p>
                        <a href="">Upcoming IPOs</a><br />
                        <a href="">Brokerage charges</a><br />
                        <a href="">Market holidays</a><br />
                        <a href="">Economic calendar</a><br />
                        <a href="">Calculators</a><br />
                        <a href="">Markets</a><br />
                        <a href="">Sectors</a><br />
                        <a href="">Gift Nifty</a>
                    </div>

                </div>

            
                <div className="text-secondary mt-4 small">

                    <p>
                        Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI.
                        SEBI Registration no.: INZ000031633 CDSL/NSDL:
                        Depository services through Zerodha Broking Ltd.
                        SEBI Registration no.: IN-DP-431-2019 Registered Address:
                        Zerodha Broking Ltd., 4th Cross, Dollars Colony,
                        Opp. Clarence Public School, J.P Nagar 4th Phase,
                        Bengaluru - 560078, Karnataka, India.
                    </p>

                    <p>
                        Procedure to file a complaint on SEBI SCORES:
                        Register on SCORES portal. Mandatory details for filing
                        complaints on SCORES: Name, PAN, Address, Mobile Number,
                        E-mail ID.
                    </p>

                    <p>
                        Smart Online Dispute Resolution | Grievances Redressal Mechanism
                    </p>

                    <p>
                        Investments in securities market are subject to market risks;
                        read all the related documents carefully before investing.
                    </p>

                    <p>
                        Attention investors: Stock brokers can accept securities as
                        margins from clients only by way of pledge in the depository
                        system. Update your e-mail and phone number with your stock
                        broker/depository participant and receive OTP directly from
                        depository.
                    </p>

                    <p>
                        India's largest broker based on networth as per NSE.
                        NSE broker factsheet.
                    </p>

                    <p>
                        Prevent unauthorised transactions in your account. Update your
                        mobile numbers/email IDs with your stock brokers/depository
                        participants. Receive information of your transactions directly
                        from Exchange/Depositories.
                    </p>

                    <p>
                        Customers availing insurance advisory services offered by Ditto
                        will not have access to the exchange investor grievance
                        redressal forum, SEBI SCORES/ODR, or arbitration mechanism
                        for such products.
                    </p>

                    <p>
                        Fixed deposit products offered on this platform are third-party
                        products and are not Exchange traded products. These are offered
                        through third-party providers and are regulated by the RBI.
                    </p>

                </div>

            </div>
        </footer>
    );
}

export default Footer;
