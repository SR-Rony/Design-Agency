
import NavbarOtherPage from '@/components/NavbarOtherPage'
import NewsLetter from '@/components/NewsLetter'
import TeamMember from '@/components/TeamMember'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* <NavbarOtherPage pageName="Team"/> */}
      <TeamMember/>
      <NewsLetter/>
    </div>
  )
}

export default page