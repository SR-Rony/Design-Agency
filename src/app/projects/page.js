
import AllProject from '@/components/AllProject'
import NavbarOtherPage from '@/components/NavbarOtherPage'
import NewsLetter from '@/components/NewsLetter'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* <NavbarOtherPage pageName="All Project"/> */}
      <AllProject/>
      <NewsLetter/>
    </div>
  )
}

export default page