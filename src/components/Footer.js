import React from 'react'

import { Link } from "react-router-dom";
export const Footer = () => {
    return (
        <div>
            <section className="info_section  layout_padding2-top">
                <div className="social_container">
                    <div className="social_box">
                        <Link to="">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </Link>
                        <Link to="">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </Link>
                        <Link to="">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </Link>
                        <Link to="">
                            <i className="fa fa-youtube" aria-hidden="true"></i>
                        </Link>
                    </div>
                </div>
                <div className="info_container ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-3">
                                <h6>
                                    ABOUT US
                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
                                </p>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="info_form ">
                                    <h5>
                                        Newsletter
                                    </h5>
                                    <form action="#">
                                        <input type="email" placeholder="Enter your email" />
                                        <button>
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <h6>
                                    NEED HELP
                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
                                </p>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <h6>
                                    CONTACT US
                                </h6>
                                <div className="info_Link-box">
                                    <Link to="">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <span> Gb road 123 london Uk </span>
                                    </Link>
                                    <Link to="">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        <span>+01 12345678901</span>
                                    </Link>
                                    <Link to="">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <span> demo@gmail.com</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className=" footer_section">
                    <div className="container">
                        <p>
                            &copy; <span id="displayYear"></span> All Rights Reserved By
                            <Link to="https://html.design/">Free Html Templates</Link>
                        </p>
                    </div>
                </footer>

            </section>
        </div>
    )
}
