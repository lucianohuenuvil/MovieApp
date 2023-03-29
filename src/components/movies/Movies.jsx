import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/movies/movies.css"


export const Movies = ({moviesList}) => {


  return (
      <>
        {
          moviesList.map( movie => {
            return  <div key={movie.id} className="movie">
                        {/* <p >{movie.movieName} </p> */}
                        <Link to={"/movie/" + movie.id}>
                          <figure>
                            <img src={"../../media/" + movie.imageURL} />
                            <figcaption className='centrado'>{movie.movieName}</figcaption>
                          </figure>

                        </Link>
                    </div>
          })
        }
      </>
  )
}
