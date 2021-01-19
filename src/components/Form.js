import React from 'react'
import { useForm } from "react-hook-form";

function Form(props) {

    const { register, handleSubmit } = useForm()

    return (
        <div>
            <div className="container mt-3">
                <form onSubmit={handleSubmit(props.onSubmit)}>
                    <label htmlFor="feet" className="form-label text-white">Feet</label>
                    <input type="number" className="form-control" id="feet" placeholder="Feet" name="feet" ref={register} />
                    <label htmlFor="inch" className="form-label text-white">Inches</label>
                    <input type="number" className="form-control" id="inch" placeholder="Inches" name="inch" ref={register} />
                    <label htmlFor="weight" className="form-label text-white">Weight (pounds)</label>
                    <input type="number" className="form-control" id="weight" placeholder="Weight" name="weight" ref={register} />
                    <div className="btn-container text-center">
                        <button type="submit" className="btn btn-success mt-2">Calculate</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
