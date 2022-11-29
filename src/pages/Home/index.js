import React, { useEffect, useState } from 'react'
import './style.css'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Slide from '../../components/Slide'
import Loading from '../../components/Loading'

import axios from 'axios'

const Index = () => {
  const [popularMovies, setPopularMovies] = useState([])
  const [freemovies, setfreemovies] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getmoviews()
    getfree()
  }, [])

  async function getmoviews() {
    setLoading(true)
    let res = await axios.get(
      `${process.env.REACT_APP_ENDPOINT}getMostViewWeb.php`
    )
    setLoading(false)
    setPopularMovies(res.data.items)
  }
  async function getfree() {
    setLoading(true)
    let res = await axios.get(
      `${process.env.REACT_APP_ENDPOINT}getFree.php`
    )
    setLoading(false)
    setfreemovies(res.data.items)
  }

  return (
    <>
      <Header />
      <Hero />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Slide title={'Mais assistidos'} data={popularMovies} />
          <Slide title={'Assistir gratis'} data={freemovies} />
        </>
      )}
    </>
  )
}

export default Index
