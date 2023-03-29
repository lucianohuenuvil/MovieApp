import React, { useState } from 'react'

export const UseForm = (inputForm) => {


  const [form, setform] = useState(inputForm)


  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]:e.target.value
    })
    
  } 

  const handleEmptyValues = () => {
    setform(inputForm)
  }



  return [form, handleChange, handleEmptyValues]
}
