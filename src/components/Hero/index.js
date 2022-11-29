import React, { useEffect, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import axios from 'axios'
import './herostyle.css'
import Star from './download.png'
const IMAGEENDPOINT = process.env.REACT_APP_IMAGE_ENDPOINT
const Hero = () => {
  const [destaque, setDestaque] = useState([])

  useEffect(() => {
    getDestaque()
  }, [])

  async function getDestaque() {
    let res = await axios.post(
      `${process.env.REACT_APP_ENDPOINT}getMostView.php?page=${1}`
    )

    setDestaque(res.data.items)
    console.log(res.data.items)
  }
  return (
    <Carousel
      autoPlay={true}
      transitionTime={500}
      showThumbs={false}
      showIndicators={false}
      infiniteLoop={true}
      showStatus={false}
      showArrows={true}
      swipeable={false}
    >
      {destaque.map(item => (
        <div key={item.id} className="hero">
          <img className="banner" src={IMAGEENDPOINT + item.banner} />

          <div className="info-container">
            <h1 className="title">{item.title}</h1>
            <div className="info-subcontainer">
              <img
                style={{ width: 20 }}
                className="star"
                src={Star}
              />
              <span>{item.rate}</span>
              &#8226;
              <span>{item.year}</span>
            </div>
            <p className="sinopse">
              {item.sinopse.lenght < 100
                ? item.sinopse
                : item.sinopse.substring(0, 100) + '...'}
            </p>

            <div className="button-container">
              <button className="watch-button">assistir agora</button>
              <button className="trailer-button">Trailer</button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default Hero
