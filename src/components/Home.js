import React from 'react'
import '../css/style.css';
import { Navbar } from './Navbar';
import { Products } from './Products';
import { ContactUs } from './ContactUs';
import { Testimonial } from './Testimonial';
import { Footer } from './Footer';
import { OfferSection } from './OfferSection';
import { Link } from "react-router-dom";
import girlimg from './girlimg.png'


export const Home = () => {
    return (
        <div>
            <div className="hero_area">
                <Navbar />
                <section className="slider_section">
                    <div className="slider_container">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="detail-box">
                                                    <h1>
                                                        Welcome To Our <br />
                                                        Gift Shop
                                                    </h1>
                                                    <p>
                                                        Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                                                    </p>
                                                    <Link to="">
                                                        Contact Us
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-md-5 ">
                                                <div className="img-box">
                                                    <img src={girlimg} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="detail-box">
                                                    <h1>
                                                        Welcome To Our <br />
                                                        Gift Shop
                                                    </h1>
                                                    <p>
                                                        Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                                                    </p>
                                                    <Link to="contactUs">
                                                        Contact Us
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-md-5 ">
                                                <div className="img-box">
                                                    <img src={girlimg} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="detail-box">
                                                    <h1>
                                                        Welcome To Our <br />
                                                        Gift Shop
                                                    </h1>
                                                    <p>
                                                        Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.
                                                    </p>
                                                    <Link to="contactUs">
                                                        Contact Us
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-md-5 ">
                                                <div className="img-box">
                                                    <img src={require("../images/slider-img.png")} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Products />
            <OfferSection />
            <ContactUs />
            <Testimonial />
            <Footer />
        </div>
    )
}
