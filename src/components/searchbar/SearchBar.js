import React, { useState } from 'react'
import { UseForm } from '../customHooks/UseForm'
import '../../styles/searchbar/searchbar.css'
import { Button } from './Button'

export const SearchBar = ({setsearch}) => {
  
  const [{searchbar}, handleChange] = UseForm({searchbar:''})

  const handleSubmit = (e) => {
    e.preventDefault()
    setsearch(e.target.searchbar.value)
  }


  return (

      <form  className='searchbar' onSubmit={handleSubmit}>
        <input placeholder='REALIZA UNA BÚSQUEDA' autoComplete='off' type="text" onChange={handleChange} value={searchbar} name="searchbar" />
        <Button></Button>
      </form>

  )
}
