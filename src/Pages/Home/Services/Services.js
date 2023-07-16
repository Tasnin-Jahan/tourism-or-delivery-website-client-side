import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [searchText, setSearchText] = useState("");

    const [services, setServices] = useState([])
    useEffect(() => {
        if (searchText !== "") {
            let filter_data = services.filter(obj => obj.name.includes(searchText));
            setServices(filter_data)
        } else {
            fetch('http://localhost:5000/services')
                .then(res => res.json())
                .then(data => setServices(data));
        }
    }, [searchText])



    const handleChange = (e) => {
        // const searchText = e.target.value;
        setSearchText(e.target.value);
    };
    return (
        <div id="services">
            <div className="search-box course-container p-3 m-5">
                <div>
                    <input onChange={handleChange} type="text" className="p-2" placeholder="enter package name" />
                    <button className="btn btn-primary m-3">Search</button>
                </div>
            </div>
            <h2 className="text-primary mt-5 mb-3 text-center">Destination You Can Choose</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;