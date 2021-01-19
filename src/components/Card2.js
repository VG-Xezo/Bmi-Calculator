import React from 'react'

function Card(props) {
    return (
        <div className="text-center m-5">
            <div className={`card text-white ${props.bg} mb-3`}>
                <div className="card-header">You are</div>
                <div className="card-body">
                    <h5 className="card-title">{props.msg}</h5>
                </div>
            </div>
        </div>
    )
}

export default Card