import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-service">
            <h2 className="text-primary text-center">Please Add a Place</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img")} placeholder="image url" />
                <input {...register("destination", { required: true, maxLength: 20 })} placeholder="Destination" />
                <input {...register("departureTime", { required: true, maxLength: 20 })} placeholder="Departure Time" />
                <input {...register("returnTime", { required: true, maxLength: 20 })} placeholder="Return Time" />
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input {...register("included", { required: true, maxLength: 20 })} placeholder="Included" />
                <input {...register("notIncluded", { required: true, maxLength: 20 })} placeholder="Not Included" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;