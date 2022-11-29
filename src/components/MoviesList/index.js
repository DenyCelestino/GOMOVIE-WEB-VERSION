import React from 'react'
import { Link } from 'react-router-dom'

import './MoviesList.css'
const MoviesList = ({ data }) => {
  const Movies = data
  const IMAGENDPOINT = process.env.REACT_APP_IMAGE_ENDPOINT
  return (
    <div className="movielist-container">
      {Movies.map(item => (
        <>
          <Link
            className="cards"
            key={item.id}
            to={`/MovieDetail/${item.id}`}
          >
            <img
              className="cards__img"
              src={IMAGENDPOINT + item.banner}
            />
            <div className="cards__overlay">
              <div className="card__title">{item.title}</div>
              <div className="card__runtime">
                {item.year}
                <br />
                {item.what}
                <span className="card__rating">
                  {item.rate}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="card__description">
                {item ? item.sinopse.slice(0, 118) + '...' : ''}
              </div>
            </div>
          </Link>
        </>
      ))}
    </div>
  )
}

export default MoviesList
