import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import notfound from '../../image/istockphoto-1302333331-170667a.jpg'

const NotFound = () => {
    return (
        <div className="text-center">
            <img className="notfound mt-5" src={notfound} alt="" />
            <br />
            <Link to="/"><button className="mt-3 btn btn-primary">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;