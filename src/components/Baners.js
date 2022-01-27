import React from "react";
//images
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";

const Baners = () => {
    return (
        <div
            id="carouselSlider"
            className="carousel slide mb-2 rounded overflow-hidden"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselSlider"
                    data-bs-slide-to="0"
                    className="active"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselSlider"
                    data-bs-slide-to="1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselSlider"
                    data-bs-slide-to="2"
                ></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="slider1" />
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block w-100" alt="slider2" />
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-100" alt="slider3" />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselSlider"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselSlider"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Baners;
