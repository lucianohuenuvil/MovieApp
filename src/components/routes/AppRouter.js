import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AddCategory } from '../categories/addCategory/AddCategory'
import { Addmovie } from '../movies/addMovie/Addmovie'
import { Categories } from '../categories/Categories'
import { CategoriesMovies } from '../categories/CategoriesMovies'
import { HomePage } from '../homepage/HomePage'
import { Movie } from '../movies/Movie'
import { Navbar } from '../navbar/Navbar'
import { ModifyMovies } from '../movies/modifyMovie/ModifyMovies'
import { MovieChange } from '../movies/modifyMovie/MovieChange'

export const AppRouter = () => {



  return (
    <BrowserRouter>


      <Navbar></Navbar>

      <Routes > 
          <Route path="/" element={<HomePage/>} />  

          <Route path="categories" element ={<Categories/>} />

          <Route path="addCategory" element ={<AddCategory/>} />

          <Route path="addMovie" element ={<Addmovie/>} />

          <Route path="movie/:movie_id" element ={<Movie/>} />


          <Route path="changeMovie/" element ={<ModifyMovies/>} />

          <Route path="changeMovie/:movie_id" element ={<MovieChange/>} /> 


{/* 
          <Route path="changeMovie/:movie_id" element ={<Movie/>} />

          <Route path="changeCategory/:category" element ={<Movie/>} /> */}

          <Route path="categories/:category" element ={<CategoriesMovies/>} />

          <Route path="/*" element={ <Navigate to ="/" />  } />  

      </Routes>

    
    </BrowserRouter>
  )
}
