import React, { useContext, useEffect, useState } from "react";
import logo1 from './../../assets/images/logo-1.png';
import { FiMapPin, FiSearch } from "react-icons/fi";
import $ from 'jquery';


export default function Navbar() {
    const [offset, setOffset] = useState(0);
    const [click, setClick] = useState(0);

    window.onscroll = () => {
        setOffset(window.pageYOffset)
    }

    if (click == 0) {
        if (offset > 20) {
            $('nav.navbar').addClass('active');
            $('nav .content .normal .search .action-search').addClass('active');
            $('nav .content .normal .search ul').removeClass('active');
            $('.home-page .main .content .form-main').removeClass('active');
        } else {
            $('nav.navbar').removeClass('active');
            $('nav .content .normal .search .action-search').removeClass('active');
            $('nav .content .normal .search ul').addClass('active');
            $('.home-page .main .content .form-main').addClass('active');
            $('nav .content .normal .search ul').removeClass('dark');
        }
    }

    const handleOpenSearch = () => {
        setClick(1);
        $('nav .content .extend').addClass('active');
        $('nav .content .normal .search .action-search').removeClass('active');
        $('nav .content .normal .search ul').addClass('active dark');
    }

    const handleCloseSearch = () => {
        setClick(0);
        $('nav .content .extend').removeClass('active');

    }


    return (
        <nav className="navbar">
            <div className="content">
                <div className="normal">
                    <div className="logo">
                        <img src={logo1} alt="Zaycare" />
                    </div>
                    <div className="search">
                        <div className="action-search" onClick={handleOpenSearch}>
                            <div className="text">
                                <h4>Start your search</h4>
                            </div>
                            <div className="circle">
                                <FiSearch />
                            </div>
                        </div>
                        <ul className="active">
                            <li><a>Home</a><hr /></li>
                            <li><a>Explore</a><hr /></li>
                            <li><a>Blog</a><hr /></li>
                            <li><a>Contact</a><hr /></li>
                        </ul>
                    </div>
                    <div className="nav">
                        <div className="pricing">
                            <button>Add a Listing</button>
                        </div>
                        <div className="auth">
                            <button>Sign In</button>
                        </div>
                    </div>
                </div>

                <div className="extend" onClick={handleCloseSearch}>
                    <div className="extend-content">
                        <div className="form-main">
                            <div className="action-content">
                                <div className="choose-location choose">
                                    <h5>Location</h5>
                                    <h4>Find a location where</h4>
                                </div>
                                <hr />
                                <div className="choose-distance choose">
                                    <h5>Distance</h5>
                                    <h4>What is the distance?</h4>
                                </div>
                                <hr />
                                <div className="choose-type choose">
                                    <h5>Type</h5>
                                    <h4>What is teh type?</h4>
                                </div>
                                <div className="circle">
                                    <FiSearch />
                                </div>
                            </div>

                            <form action="">
                                <div className="form-group location">
                                    <div className="location-content">
                                        <div className="box">
                                            <FiMapPin />
                                        </div>
                                        <div className="text">
                                            <h4>Search for a nearby place</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group distance">
                                    <div className="distance-content">
                                        <div className="text">
                                            <h4>Afstand <span>0 KM</span></h4>
                                        </div>
                                        <div className="card-slider">
                                            <input type="range" className="slider" max="100" min="1" />
                                            <div className="bg-range" style={{ width: `10%` }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group type">
                                    <div className="type-content">
                                        <ul>
                                            <li><h4>VGO</h4> <p>lorem ipsum dolllor</p><hr /></li>
                                            <li><h4>KDV</h4> <p>lorem ipsum dolllor</p><hr /></li>
                                            <li><h4>BSO</h4> <p>lorem ipsum dolllor</p><hr /></li>
                                            <li><h4>GOB</h4> <p>lorem ipsum dolllor</p><hr /></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}