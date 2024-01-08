import React from 'react'
import Square from './Square'
import useSquere from '../hooks/useSquere'

const Bord = () => {
    const {squere,hundelCklick}=useSquere()
    console.log(squere)
  return (
    <div className='row border mx-auto'>
        {
            squere.map((s,index)=>(
                 <Square index={index} text={s} key={index} onCklick={()=>hundelCklick(index)}/>
            ))
        }
       
        
    </div>
  )
}

export default Bord