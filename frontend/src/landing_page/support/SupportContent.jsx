function SupportContent() {
    const categories = [
    "Account Opening",
    "Your Zerodha Account",
    "Kite",
    "Funds",
    "Console",
    "Coin"
];
    return (
        <div className="container my-5">
            <div className="row g-4">
{/* leftsection */}
              <div className="col-lg-8 ">
    {categories.map((category) => (
        <div className="border mb-4 category-box " key={category}>
            <div className="d-flex justify-content-between align-items-center p-3">

                <div className="d-flex align-items-center">
                    <i className="fa-solid fa-circle-plus me-3"></i>
                    <h5 className="mb-0">{category}</h5>
                </div>

                <i className="fa-solid fa-chevron-down"></i>
            </div>
        </div>
    ))}
</div>

                {/* Right Section */}
                <div className="col-lg-4">

                    {/* Updates */}
                    <div className="border-start border-warning border-5 p-3 mb-4">
                        <ul className="mb-0">
                            <li className="mb-3">
                                <a href="#">
                                    Surveillance measure on scrips - August 2026
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Open Market Buybacks - August 2026
                                </a>
                            </li>
                        </ul>
                    </div>


                    {/* Quick Links */}
                    <div className="border">

                        <div className="p-3 border-bottom">
                            <h5 className="mb-0">
                                Quick links
                            </h5>
                        </div>

                        <div className="p-3 border-bottom">
                            1. <a href="#">Track account opening</a>
                        </div>

                        <div className="p-3 border-bottom">
                            2. <a href="#">Track segment activation</a>
                        </div>

                        <div className="p-3 border-bottom">
                            3. <a href="#">Intraday margins</a>
                        </div>

                        <div className="p-3 border-bottom">
                            4. <a href="#">Kite user manual</a>
                        </div>

                        <div className="p-3">
                            5. <a href="#">Learn how to create a ticket</a>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default SupportContent;