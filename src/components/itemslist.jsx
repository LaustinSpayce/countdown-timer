import React from 'react'
import CountdownItem from './countdownitem'

export default function ItemsList(props) {

  return (
    <div className='flex bg-gray-500'>
      <div className='rounded-lg m-auto w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-gray-400'>
        <h2 className='text-center'>Here's a list of your items:</h2>
        <CountdownItem/>
      </div>
    </div>
  )
}