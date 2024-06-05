import React from 'react'

const TitleText = ({title,text}) => {
  return (
    <div>
         <h5 className=' font-medium text-xl	uppercase text-btnColor'>{title}</h5>
            <h4 className=' font-semibold text-3xl size-5/12 pr-16 pt-4 pb-10'>{text}</h4>
    </div>
  )
}

export default TitleText