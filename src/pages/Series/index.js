import React, { useEffect, useState } from 'react'

import axios from 'axios'

import './Series.css'
import Header from '../../components/Header'
import MoviesList from '../../components/MoviesList'
import Loading from '../../components/Loading'
const Series = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getmoviews()
  }, [])

  async function getmoviews() {
    setLoading(true)
    let res = await axios.get(
      `${process.env.REACT_APP_ENDPOINT}getSerieWeb.php`
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

export default Series
