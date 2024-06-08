import React from 'react'

const Paragraph = ({text,className}) => {
  return (
    <p className={`font-normal text-xl ${className}`}>{text}</p>
  )
}

export default Paragraph