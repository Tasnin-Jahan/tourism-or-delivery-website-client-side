import React from 'react';
import banner1 from '../../../image/banner/bangladesh-landscape-nature-tourism.jpg'
import banner2 from '../../../image/banner/boat-bangladesh-swamp-nature-wallpaper-preview.jpg';
import banner3 from '../../../image/banner/photo-1585123388867-3bfe6dd4bdbf.jfif'
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <Carousel className="mt-3">
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 banner-img"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 style={{ color: 'black' }}>Lets Go Now</h1>
                        <h3 style={{ color: 'black' }}>Explore and Travel</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 banner-img"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1 style={{ color: 'black' }}>Come With Us</h1>
                        <h3 style={{ color: 'black' }}>Relax and Travel</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1 style={{ color: 'black' }}>Come With Us</h1>
                        <h3 style={{ color: 'black' }}>Explore and Travel</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;