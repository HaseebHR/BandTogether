import React from 'react'
const User = props => {
  return (
    <div>
      <div>
        <img src={props.image} style={{width: 320}} />
      </div>
      <h1>{props.user.name}</h1>
      <div className="space-link-buttons">
        <button
          className="btn btn-danger btn-lg"
          onClick={(e) => { props.handleDislike() }}
        >_</button>
        <button
          className="btn btn-success btn-lg"
          onClick={(e) => { props.handleLike(props.user.id) }}
        >+</button>
      </div>
    </div>
  )
}
export default User
