import React from 'react'
import CountdownItem from './countdownitem'

const boxColour = {
  backgroundColor: '#EEEEEE66',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)'
}

export default function ItemsList(props) {

  return (
    <div className='flex font-mono'>
      <div className='m-auto my-32 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2'>
        <div className='rounded-lg w-full mb-4' style={boxColour}>
          <h2 className='text-center font-sans'>Tasks</h2>
          <CountdownItem active={true}/>
        </div>

        <div className='flex my-8'>
          <div className='flex-1 h-16 rounded-lg py-2 text-center' style={boxColour}>+1</div>
          <div className='flex-1 h-16 rounded-lg mx-4 text-center px-4 py-2' style={boxColour}>+5</div>
          <div className='flex-1 h-16 rounded-lg py-2 text-center' style={boxColour}>+10</div>
        </div>

        <div className='rounded-lg w-full mb-4' style={boxColour}>
          <h2 className='text-center font-sans'>Tasks</h2>
          <CountdownItem active={false}/>
        </div>
      </div>
    </div>
  )
}