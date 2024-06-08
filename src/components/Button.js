import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`py-2 px-6 font-medium text-black text-base rounded-lg ring-2 ring-btnColor hover:bg-btnColor hover:text-white delay-100 ${className}`}>{text}</button>
  )
}

export default Button