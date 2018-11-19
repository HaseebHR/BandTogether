import React from 'react'
const User = props => {
  return (
    <div className="user-main-div">
      <div>
        <img src={props.image} alt="face" style={{width: 350}}/>
      </div>
      <h2>{props.user.name}</h2>
      <div className="user-like-div">
        <button
          onClick={(e) => { props.handleDislike() }}
        ><i className="fas fa-volume-mute fa-2x"></i></button>
        <button
          onClick={(e) => { props.handleLike(props.user.id) }}
        ><i className="fas fa-volume-up fa-2x"></i></button>
      </div>
    </div>
  )
}
export default User
