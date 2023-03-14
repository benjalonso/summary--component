import React from 'react'

const Square = ({onClick, value,key, id }) => {

  return (
    <div onClick={onClick} className="border-2 border-current hover:cursor-pointer text-center h-[90px] text-5xl text-[rgba(92,92,95,0.7)]">
        {value}
      </div>
  )
}

export default Square
