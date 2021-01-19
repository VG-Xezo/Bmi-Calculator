import React from 'react'

function Card(props) {
    return (
        <div className="text-center m-5">
            <div className="card text-white bg-primary mb-3">
                <div className="card-header">Your BMI</div>
                <div className="card-body">
                    <h5 className="card-title">{props.bmi}</h5>
                </div>
            </div>
        </div>
    )
}

export default Card
