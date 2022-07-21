import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import Ecommerce from "../../img/ecommerce.png";
import ekitchenhouse from "../../img/ekitchenhouse.png"
import etechcube from "../../img/etechcube.png"
import sensitive from "../../img/sensitive.png"
import { themeContext } from '../../Context'
import { useContext } from 'react'


const Portfolio = () => {
      const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio' id='Portfolio'>
      {/* heading */}
      <span style={{color : darkMode ? 'white' : 'black'}}>Recent projects</span>
      <span>TESTIMONIALS</span>

      {/* slider */}
      <Swiper 
              spaceBetween={20}
              slidesPerView={3}
              grabCursor={true}
              className="portfolio-slider"
      >
            <SwiperSlide>
                  <img src={ekitchenhouse}  alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                  <img src={Ecommerce}  alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                  <img src={etechcube}  alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                  <img src={sensitive}  alt=''/>
            </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Portfolio