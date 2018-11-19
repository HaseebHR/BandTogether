import React from 'react'

const Concert = props => {
  console.log(props.name, props.chosen)
  return (
    <div className="container">
      <hr />
      <div className="row">
        <div className="col-8">
          <div className="concert-test">
            <p>{props.name}</p>
            <p>{props.location}</p>
            <p>{props.date}</p>
            <button
              onClick={(e) => { props.chooseConcert(props.id) }}
              disabled={props.chosen}
            >
              {props.chosen ? <i className="fas fa-minus-circle fa-lg"></i> : <i className="fas fa-plus-circle fa-lg"></i>}
            </button>
          </div>
        </div>
        <div className="col" >
          <div>
            <div id="concert-img">
              <img src={props.imgUrl} alt={props.name} style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Concert
