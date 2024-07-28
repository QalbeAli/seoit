import AboutStory from '@/components/AboutStory'
import CardGrid from '@/components/CardGrid'
import MoreService from '@/components/MoreService'
import Motto from '@/components/Motto'
import ProfileGrid from '@/components/ProfileGrid'
import Team from '@/components/Team'
import React from 'react'

const About = () => {
  return (
    <>
    <div className='my-20'>
      <AboutStory />
      <Motto />
      <MoreService />
      <CardGrid />
      <Team />
      <ProfileGrid />
    </div>
    </>
  )
}

export default About