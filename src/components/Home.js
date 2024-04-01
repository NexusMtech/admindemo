import React from 'react'
import '../css/style.css';
import { Navbar } from './Navbar';
import { Products } from './Products';
import { ContactUs } from './ContactUs';
import { Testimonial } from './Testimonial';
import { Footer } from './Footer';
import { OfferSection } from './OfferSection';
import { Link, json } from "react-router-dom";
import girlimg from './images/girlimg.png'
import Modal from './Modal';
import { useState } from 'react';


export const Home = () => {

    const [description, setDescription] = useState(
        localStorage.getItem("Description")?
        json.parse(localStorage.getItem("Description")):
        []
    );

    const [show, setShow] = useState(false)
    const showModal = () => {
        setShow(true);
    }

    const cancel = () => {
        setShow(false);
    }

    const [state, setState] = useState({
        heading: 'Welcome To Our Gift Shop',
        paragraph: 'Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.',
        image: girlimg,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[2].files);
        setState({
            heading: e.target[0].value,
            paragraph: e.target[1].value,
            image: URL.createObjectURL(e.target[2].files[0]),
        });
        cancel();
    }

    return (
        <div>
            <Modal show={show} title={'Edit'} handleClose={cancel} handleSubmit={() => null}>
                <form onSubmit={handleSubmit}>
                    <div className="form-group p-2">
                        <label for="heading">Heading</label>
                        <input name='heading' className="form-control" id="heading" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group p-2">
                        <label for="paragraph">Paragraph</label>
                        <textarea name='paragraph' className="form-control" id="paragraph" placeholder="Paragraph" />
                    </div>
                    <div class="form-group p-2">
                        <label for="image" class="form-label">Image</label>
                        <input name='image' class="form-control" type="file" id="formFile" />
                    </div>
                    <div>
                        <button className='btn btn-secondary' onClick={cancel} >Cancel</button>
                        <button type='submit' className='btn btn-success'>Done</button>
                    </div>
                </form>
            </Modal>
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
                                                        {state.heading}
                                                    </h1>
                                                    <p>
                                                        {state.paragraph}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-5 ">
                                                <div className="img-box">
                                                    <img src={state.image} alt="" />
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
                                                    <img src={girlimg} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='btn-container'>
                            <button
                                className='btn-btn'
                                onClick={showModal}
                            >
                                Edit text
                            </button>

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
