import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Carousel() {
  return (
    <>
      <div
        style={{ height: "20rem" }}
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="slide1.png"
              class="d-block w-100"
              style={{ height: "20rem" }}
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="slide2.png"
              class="d-block w-100"
              style={{ height: "20rem" }}
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="slide3.png"
              class="d-block w-100"
              style={{ height: "20rem" }}
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
