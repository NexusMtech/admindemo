import React from 'react'
import offergirl1 from "./images/offergirl1.png"
import gifts1 from "./images/gifts1.png"

export const OfferSection = () => {
  return (
    <div>
         <section className="saving_section ">
                <div className="box">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="img-box">
                                    <img src={offergirl1} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="detail-box">
                                    <div className="heading_container">
                                        <h2>
                                            Best Savings on <br />
                                            new arrivals
                                        </h2>
                                    </div>
                                    <p>
                                        Qui ex dolore at repellat, quia neque doloribus omnis adipisci, ipsum eos odio fugit ut eveniet blanditiis praesentium totam non nostrum dignissimos nihil eius facere et eaque. Qui, animi obcaecati.
                                    </p>
                                    <div className="btn-box">
                                        <a href="#" className="btn1">
                                            Buy Now
                                        </a>
                                        <a href="#" className="btn2">
                                            See More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="gift_section layout_padding-bottom">
                <div className="box ">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="img_container">
                                    <div className="img-box">
                                        <img src={gifts1} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="detail-box">
                                    <div className="heading_container">
                                        <h2>
                                            Gifts for your <br />
                                            loved ones
                                        </h2>
                                    </div>
                                    <p>
                                        Omnis ex nam laudantium odit illum harum, excepturi accusamus at corrupti, velit blanditiis unde perspiciatis, vitae minus culpa? Beatae at aut consequuntur porro adipisci aliquam eaque iste ducimus expedita accusantium?
                                    </p>
                                    <div className="btn-box">
                                        <a href="#" className="btn1">
                                            Buy Now
                                        </a>
                                        <a href="#" className="btn2">
                                            See More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}
