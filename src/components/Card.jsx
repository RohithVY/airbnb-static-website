import React from 'react'

const Card = (props) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    return (
        <div className="card">
            {randomNumber % 2 === 0 && <div className="card--badge">SOLD OUT</div>}
            <img src={props.image} className="card--image" />
            <div className="card--stats">
                <img src={props.star} className="card--star"/>
                <span>{props.rating}</span>
                <span className='gray'>{`(${props.reviewCount})`} • </span>
                <span className='gray'>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><b>From ${props.price}</b>/ person
            </p>
        </div>
    )
}

export default Card