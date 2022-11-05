import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="">
      <div className="hero">
        <div className="card bg-dark text-white border-0 ">
          <img
            src="https://m.media-amazon.com/images/G/31/img20/Fashion/STORES/Newseason/Refresh/TopBanner/NS_header_PC_NonFST._CB404469039_.jpg"
            className="card-img"
            alt="Background"
            height="700px"
          />
          {/* <div className="card-img-overlay d-flex hero-header flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">
                NEW SEASON ARRIVALS
              </h5>
              <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
            </div>
          </div> */}
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
