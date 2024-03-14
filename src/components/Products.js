import React from 'react'
import ring1 from './images/ring1.png'
import watch2 from './images/watch2.png'
import teddy3 from './images/teddy3.png'
import flower4 from './images/flower4.png'
import teddy5 from './images/teddy5.png'
import flower6 from './images/flower6.png'
import watch7 from './images/watch7.png'
import ring8 from './images/ring8.png'
import { Link } from 'react-router-dom'

export const Products = () => {
    return (
        <div>
            <section className="shop_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Latest Products
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="box">
                                <Link href="">
                                    <div className="img-box">
                                        <img src={ring1} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h6>
                                            Ring
                                        </h6>
                                        <h6>
                                            Price
                                            <span>
                                                $200
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="box">
                                <Link href="">
                                    <div className="img-box">
                                        <img src={watch2} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h6>
                                            Watch
                                        </h6>
                                        <h6>
                                            Price
                                            <span>
                                                $300
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="box">
                                <Link href="">
                                    <div className="img-box">
                                        <img src={teddy3} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h6>
                                            Teddy Bear
                                        </h6>
                                        <h6>
                                            Price
                                            <span>
                                                $110
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="box">
                                <Link href="">
                                    <div className="img-box">
                                        <img src={flower4} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h6>
                                            Flower Bouquet
                                        </h6>
                                        <h6>
                                            Price
                                            <span>
                                                $45
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="box">
                                <Link href="">
                                    <div className="img-box">
                                        <img src={teddy5} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h6>
                                            Teddy Bear
                                        </h6>
                                        <h6>
                                            Price
                                            <span>
                                                $95
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="box">
                                <Link href="">
                                    <div className="img-box">
                                        <img src={flower6} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h6>
                                            Flower Bouquet
                                        </h6>
                                        <h6>
                                            Price
                                            <span>
                                                $70
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="box">
                                <Link href="">
                                    <div className="img-box">
                                        <img src={watch7} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h6>
                                            Watch
                                        </h6>
                                        <h6>
                                            Price
                                            <span>
                                                $400
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3">
                            <div className="box">
                                <Link href="">
                                    <div className="img-box">
                                        <img src={ring8} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h6>
                                            Ring
                                        </h6>
                                        <h6>
                                            Price
                                            <span>
                                                $450
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="new">
                                        <span>
                                            New
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="btn-box">
                        <Link href="">
                            View All Products
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
