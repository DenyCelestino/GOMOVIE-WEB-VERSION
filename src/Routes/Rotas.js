import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Filmes from '../pages/Filmes'
import Animation from '../pages/Animation'
import Series from '../pages/Series'
import MovieDetail from '../pages/MovieDetail'
const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/filmes" exact element={<Filmes />} />
        <Route path="/animacao" exact element={<Animation />} />
        <Route path="/Series" exact element={<Series />} />
        <Route
          path="/MovieDetail/:id"
          exact
          element={<MovieDetail />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas
