import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import './carousel.css'
import { Link } from 'react-router-dom'

const Slide = ({ data, title }) => {
  const Movies = data
  const Title = title
  const carousel = useRef()
  const [width, setWidth] = useState(0)
  const IMAGENDPOINT = process.env.REACT_APP_IMAGE_ENDPOINT
  useEffect(() => {
    console.log(
      carousel.current?.scrollWidth,
      carousel.current?.offsetWidth
    )
    setWidth(
      carousel.current?.scrollWidth - carousel.current?.offsetWidth
    )
  }, [])
  return (
    <div className="container-carousel">
      <h1 className="category">{Title}</h1>

      <motion.div
        ref={carousel}
        whileTap={{ cursor: 'grabbing' }}
        className="carousel"
      >
        {' '}
        <motion.div
          drag="x"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          dragConstraints={{ right: 0, left: -width }}
          className="inner"
        >
          {Movies.map(item => (
            <Link key={item.id} to={`/MovieDetail/${item.id}`}>
              <motion.div className="item ">
                <img
                  src={IMAGENDPOINT + item.banner}
                  alt={item.title}
                />
                <motion.div className="overlay">
                  <h1>{item.title}</h1>
                  <h1>{item.year}</h1>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slide
