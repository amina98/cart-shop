import React, { useContext } from "react";
import Baners from "../components/Baners";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ProductContext } from "../context/ProductContextProvider";
import Products from "../components/Products";
import ADS1 from "../assets/img/img1.jpg";
import ADS2 from "../assets/img/img2.jpg";

const Home = () => {
    const products = useContext(ProductContext);
    const latestProduct = products.slice(0, 5);
    const discountedProducts = products.slice(6, 11);
    const renderItems = latestProduct.map((item) => {
        return (
            <div key={item.id} className="pe-2 ps-2">
                <Products data={item} />
            </div>
        );
    });
    const renderDiscountedItems = discountedProducts.map((item) => {
        return (
            <div key={item.id} className="pe-2 ps-2">
                <Products data={item} />
            </div>
        );
    });
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    marginRight: "50px",
                    zIndex: "5",
                    color: "unset",
                    width: "50px",
                    height: "50px",
                }}
                onClick={onClick}
            />
        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    marginLeft: "50px",
                    zIndex: "5",
                    color: "unset",
                    width: "50px",
                    height: "50px",
                }}
                onClick={onClick}
            />
        );
    }
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="mt-2 rounded overflow-hidden">
                        <img src={ADS1} alt="ads" width="100%" />
                    </div>
                    <div className="mt-2 rounded overflow-hidden">
                        <img src={ADS2} alt="ads" width="100%" />
                    </div>
                </div>
                <div className="col-8 mt-2">
                    <Baners />
                </div>
            </div>

            <div className="bg-light rounded-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="p-2 h3 ">Latest Products</span>
                    <Link
                        className="btn btn-secondary text-ilght text-decoration-none"
                        to="/products"
                    >
                        more
                    </Link>
                </div>
                <Slider {...settings}>{renderItems}</Slider>
            </div>
            <div className="bg-light rounded-3 mt-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="p-2 h3 ">Discounted products</span>
                    <Link
                        className="btn btn-secondary text-ilght text-decoration-none"
                        to="/products"
                    >
                        more
                    </Link>
                </div>
                <Slider {...settings}>{renderDiscountedItems}</Slider>
            </div>
        </div>
    );
};

export default Home;
