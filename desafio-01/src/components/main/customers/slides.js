import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import logo from '../../../assets/images/logo.svg'
import logo2 from '../../../assets/images/logo2.svg'
import logo3 from '../../../assets/images/logo3.svg'
import logo4 from '../../../assets/images/logo4.svg'
import logo5 from '../../../assets/images/logo5.svg'
import logo6 from '../../../assets/images/logo6.svg'
import logo7 from '../../../assets/images/logo7.svg'
import logo8 from '../../../assets/images/logo8.svg'

const Slides = () => {
  let images = [logo, logo2, logo3, logo4, logo5, logo6, logo7, logo8]
  return (
    <>
      <div className="col-12 col-md-12 col-sm-12 grab">
        <Swiper className="mySwiper">
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt="" width={500}></img>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Slides
