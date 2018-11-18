import React from 'react'

const Concert = props => {
  console.log(props.name, props.chosen)
  return (
    <div>
      <h3>{props.name}</h3>
      <div>
        <img src={props.imgUrl} alt={props.name} />
      </div>
      <p>Date: {props.date}</p>
      <p>Location: {props.location}</p>

      <button
        onClick={ (e) => { props.chooseConcert(props.id) } }
        disabled={props.chosen}
      >
        { props.chosen ? "Chosen!" : "Choose me!" }
      </button>
    </div>
  )
}
export default Concert
