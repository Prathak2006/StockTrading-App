function LeftImage({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    lernMore,
    googlePlay,
    appStore
}) {
    return (
        <div className="container mb-5">
            <div className="row mt-5 align-items-center">

                
                <div className="col-12 col-md-6 text-center mb-4 mb-md-0 order-lg-1 order-2">
                    <img
                        src={imageURL}
                        alt="image"
                        className="img-fluid w-75"
                    />
                </div>

               
                <div className="col-12 col-md-6 p-3 p-md-5 order-lg-2 order-1">
                    <h1>{productName}</h1>

                    <p>{productDescription}</p>

                    <div className="d-flex flex-wrap gap-4">
                        <a
                            href={tryDemo}
                            className="text-decoration-none"
                        >
                            Try Demo <i className="fa-solid fa-arrow-right"></i>
                        </a>

                        <a
                            href={lernMore}
                            className="text-decoration-none"
                        >
                            Learn More <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>

                    <div className="mt-4 d-flex flex-wrap gap-3">
                        <a href={googlePlay}>
                            <img
                                src="images/googlePlayBadge.svg"
                                alt="Google Play"
                                className="img-fluid"
                            />
                        </a>

                        <a href={appStore}>
                            <img
                                src="images/appstoreBadge.svg"
                                alt="App Store"
                                className="img-fluid"
                            />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LeftImage;