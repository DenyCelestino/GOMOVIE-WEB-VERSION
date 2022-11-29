import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './animation.css'
import Header from '../../components/Header'
import Loading from '../../components/Loading'
import MoviesList from '../../components/MoviesList'
const Animation = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getmoviews()
  }, [])

  async function getmoviews() {
    setLoading(true)
    let res = await axios.get(
      `${process.env.REACT_APP_ENDPOINT}getAnimationWeb.php`
    )
    setLoading(false)
    setMovies(res.data.items)
  }
  return (
    <>
      <Header />
      {loading ? <Loading /> : <MoviesList data={movies} />}
    </>
  )
}

export default Animation
