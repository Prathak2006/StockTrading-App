function RightImage({
    imageURL,
    productName,
    productDescription,
    lernMore,
}) {
    return (
        <div className="container mb-5">
            <div className="row mt-5 align-items-center">

                <div className="col-12 col-md-6 p-3 p-md-5">
                    <h1 className="mb-4 px-2 px-md-5">
                        {productName}
                    </h1>

                    <p className="px-2 px-md-5">
                        {productDescription}
                    </p>

                    <a
                        href={lernMore}
                        className="text-decoration-none px-2 px-md-5"
                    >
                        Learn More
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                </div>

        
                <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
                    <img
                        src={imageURL}
                        alt="image"
                        className="img-fluid w-75"
                    />
                </div>

            </div>
        </div>
    );
}

export default RightImage;