import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, img, description, price } = service;
    return (
        <div>
            <Container>
                <Col>
                    <Card className="services-container">
                        <Card.Img className="service-img" variant="top" src={img} />
                        <Card.Body className="text-center">
                            <Card.Title>{name}</Card.Title>
                            <Card.Title>{price}TK</Card.Title>
                            <Card.Text>
                                {description.slice(0, 150)}
                                <br />
                                <Link to={`/serviceDetail/${_id}`}><button className="mt-3 mb-3 service-button">Book Now</button></Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </div>
    );
};

export default Service;