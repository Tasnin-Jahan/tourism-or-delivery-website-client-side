import React, { useEffect, useState } from "react";
import { Card, Col, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom'
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import './ServiceDetail.css'

const ServiceDetail = () => {
    const { id } = useParams(0);
    const { user } = useAuth();
    const { register } = useForm();
    const history = useHistory()

    const [serviceDetail, setServiceDetail] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then((res) => res.json())
            .then((data) => {
                let serv = data.find(p => p._id == id);
                console.log(serv);
                setServiceDetail(serv);
            });
    }, []);

    return (
        <div className="detail-container">
            <div>
                <Container>
                    <Col>
                        <Card className="detail-info">
                            <Card.Img variant="top" src={serviceDetail?.img} />
                            <Card.Body>
                                <Card.Title>{serviceDetail?.name}</Card.Title>
                                <Card.Text>
                                    {serviceDetail?.description}
                                </Card.Text>
                                <Card.Text>
                                    {serviceDetail?.price}TK
                                </Card.Text>
                                <Card.Text>
                                    Destination: {serviceDetail?.destination}
                                </Card.Text>
                                <Card.Text>
                                    Departure Time:{serviceDetail?.departureTime}
                                </Card.Text>
                                <Card.Text>
                                    Return Time: {serviceDetail?.returnTime}
                                </Card.Text>
                                <Card.Text>
                                    Included: {serviceDetail?.included}
                                </Card.Text>
                                <Card.Text>
                                    Not Included: {serviceDetail?.notIncluded}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Container>
            </div>
            <div>
                <Container className="form-container mt-3">
                    <h5 className="text-center text-primary ms-5">Fill-up Your Information</h5>
                    <form>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input type='text' defaultValue={user.displayName} {...register("name")} placeholder="name" />
                        <input type='text' defaultValue={user.email} {...register("email")} placeholder="email" />
                        <input type='text' value={serviceDetail?.name} {...register("package")} placeholder="package name" />

                        <input type="text" {...register("address", { required: true })} placeholder="address" />
                        <input type="text" {...register("phn", { required: true })} placeholder="contact" />
                        <Link to="/myPlans">
                            <input type="submit" />
                        </Link>
                    </form>
                </Container>
            </div >
        </div >
    );
};

export default ServiceDetail;
