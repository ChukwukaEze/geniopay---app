import React from 'react'

import search from "../../assets/images/search-normal.png"

const Input = ({type, placeholder}) => {
  return (
    <div className='input_nav'>
      <img src={search} alt="search" />
      <input type={type} placeholder={placeholder}/>
    </div>
  )
}

export default Input