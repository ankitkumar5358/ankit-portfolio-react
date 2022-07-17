import React from 'react'
import './Testomonial.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css"
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { themeContext } from '../../Context'
import { useContext } from 'react'



const Testomonial = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
      const clients = [
            {
              img: profilePic1,
              review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
            },
            {
              img: profilePic2,
              review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
            },
            {
              img: profilePic3,
              review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
            },
            {
              img: profilePic4,
              review:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
            },
          ];

  return (
    <div className='t-wrapper' id='Testimonial'>
      <div className="t-heading">
            <span style={{color : darkMode ? 'white' : 'black'}}>Clients always get</span>
            <span>Exceptional Work</span>
            <span style={{color : darkMode ? 'white' : 'black'}}>from me....</span>
            <div className="blur t-blur1" style={{background: "var(--purple)" }} ></div>
            <div className="blur t-blur2" style={{background: "skyblue" }} ></div>
      </div>
      {/* slider */}
      <Swiper 
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{clickable : true}}
      >
            {clients.map((client, index) =>{
                  return (
                        <SwiperSlide key={index}>
                              <div className="testimonial">
                              <img src={client.img} alt='' />
                              <span style={{color : darkMode ? 'orange' : 'black'}}> {client.review} </span>
                              </div>
                        </SwiperSlide>
                  )
            })}
      </Swiper>
    </div>
  )
}

export default Testomonial