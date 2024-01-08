import React from 'react'

const Square = ({onCklick,text}) => {
  return (
    <button className='col-4 border h-1' onClick={onCklick}>{text}</button>
  )
}

export default Square