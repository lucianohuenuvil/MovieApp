import React from 'react'
import '../../styles/title/title.css'

export const Title =(prop) => {


  return (
    <div className='title'>
        <h1>{prop.title}</h1>
    </div>
  )
}
