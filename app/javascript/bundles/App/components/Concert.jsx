import React from 'react'

const Concert = props => {
  return (
    <div className="container">
      <hr/>
        <div className="row">
          <div className="col-8">
            <div className="concert-test">
              <p>{props.name}</p>
              <p>{props.location}</p>
              <p>{props.date}</p>
            </div>
          </div>
          <div className="col" >
            <div>
              <div id="concert-img">
                <img src={props.imgUrl} alt={props.name} style={{width: '100%'}}/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Concert
