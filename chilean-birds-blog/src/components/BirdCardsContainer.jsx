import React from 'react'
import BirdsCard from './BirdsCard'

const BirdCardsContainer = () => {
  return (
    <div className="md:max-2xl:ml-[11vw]">
    <h1 className="ml-5 my-3 text-teal-900">All of them</h1>
    <div className="grid grid-cols-2 md:max-2xl:grid-cols-4 ">
      <BirdsCard/>
      <BirdsCard/>
      <BirdsCard/>
      <BirdsCard/>
      <BirdsCard/>
      <BirdsCard/>
      <BirdsCard/>
      <BirdsCard/>
      <BirdsCard/>
      <BirdsCard/>
      <BirdsCard/>
      <BirdsCard/>
      <BirdsCard/>
      <BirdsCard/>
      <BirdsCard/>
    </div>
  </div>  )
}

export default BirdCardsContainer