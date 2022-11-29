import React, { useEffect, useState } from 'react'
import './details.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const MovieDetail = () => {
  const [currentMovieDetail, setMovie] = useState([])
  const [isLoading, setLoading] = useState(false)
  const IMAGENDPOINT = process.env.REACT_APP_IMAGE_ENDPOINT
  const { id } = useParams()
  console.log(id)
  useEffect(() => {
    getDetail()
  }, [])
  async function getDetail() {
    setLoading(true)
    let res = await axios.get(
      `${process.env.REACT_APP_ENDPOINT}getMovieDetailWeb.php?id=${id}`
    )
    console.log(res.data.items)
    setLoading(false)
    setMovie(res.data.items)
  }

  return (
    <>
      {currentMovieDetail.map(item => (
        <div
          className="detail-container"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.9)) , url(${
              IMAGENDPOINT + item.backdrop
            })`
          }}
        >
          <div className="detail-wrapper">
            <div className="detail-container">
              <img
                src={IMAGENDPOINT + item.banner}
                alt={item.title}
              />
              <div className="detail-info">
                <h1>{item.title}</h1>
                <p>genero: {item.category}</p>
                <p> criadores: {item.creator}</p>
                <p>{item.sinopse}</p>

                <div className="button-container-detail">
                  <button className="watch-button-detail">
                    assistir agora
                  </button>
                  <button className="trailer-button-detail">
                    Trailer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default MovieDetail
