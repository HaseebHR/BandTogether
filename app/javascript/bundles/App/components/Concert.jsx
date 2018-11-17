import React from 'react'

const Concert = props => {
  return (
    <div>
      <h3>{props.name}</h3>
      <div>
        <img src={props.imgUrl} alt={props.name} />
      </div>
      <p>Date: {props.date}</p>
      <p>Location: {props.location}</p>
    </div>
  )
}
export default Concert
