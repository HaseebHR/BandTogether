import React from 'react'

const Search = props => {
  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        className={props.invalid ? "form-control is-invalid" : "form-control"}
        onChange={props.handleSearch}
        value={props.term}
      />
      <h3>{props.invalid ? "No Concerts In the Area for this Search" : ""}</h3>
    </div>
  )
}
export default Search
