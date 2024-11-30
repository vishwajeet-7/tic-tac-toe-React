import React, { useState } from 'react'

const Button = ({value,onSquareClick}) => {

  return <button style={{background:'blue',color:"white"}} className="square" onClick={onSquareClick}>{value}</button>
}

export default Button
