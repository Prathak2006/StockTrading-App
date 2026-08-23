function Hero() {
    return (
        <div
            style={{ backgroundColor: "rgb(250,250,250)" }}
            className="border-bottom"
        >
            <div className="container">

               
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center p-3 p-md-4 px-md-5 pt-4">

                    <h1 className="mb-3 mb-sm-0">
                        Support Portal
                    </h1>

                    <form>
                        <button className="btn btn-primary">
                            My Ticket
                        </button>
                    </form>

                </div>

               
                <form className="pb-4 pb-md-5 px-3 px-md-5">
                    <div className="input-group">

                        <span className="input-group-text">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Eg: How do I open my account, How do I activate F&O"
                        />

                    </div>
                </form>

            </div>
        </div>
    );
}

export default Hero;