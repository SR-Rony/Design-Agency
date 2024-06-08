import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h2 className={`font-bold ${className}`}>{text}</h2>
  )
}

export default Heading