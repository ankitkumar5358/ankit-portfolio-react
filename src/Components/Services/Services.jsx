import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from './Resume.pdf';
import Card from '../Card/Card';
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'


function Services() {
      const transition = { duration: '1', type: 'spring' }
      const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'> 

      {/* left side */}
      <div className="awesome">
      <span style={{color : darkMode ? 'white' : 'black'}}>My Awesome</span>
      <span>Services</span>
      <div className='service-text' >
      <span style={{color : darkMode ? 'white' : 'black'}}>
      Implemented websites, mobile applications, and landing pages  <br/> from concept through deployment.
      Standardized all output with a new, responsive, mobile-first   <br/>approach and strategy.
      <br/>
      Assessed UX and UI designs for technical feasibility.
      <br/>
      Collaborated with product team members  <br/>to implement new feature developments.
      </span>
      </div>
            
      
      <a href= {Resume} download >
      <button className='button s-button'>Download CV</button>
      </a>
      <div className="blur s-blur1" style={{background: '#ABF1FF94'}} ></div>
      </div>

      {/* right side */}
      <div className="cards">
            {/* 1st card */}
            <motion.div
                      initial={{ left: "25rem" }}
                      whileInView={{ left: "14rem" }}
                      transition={transition}
            
            style={{
                  left: '14rem'
            }}>
                  <Card
                  emoji = {HeartEmoji}
                  heading ={'Design'}
                  detail ={'Figma , Sketch, Photoshop,  Mateial_UI, Bootstrap etc..'}
                  />
            </motion.div>
            {/* second card  */}
            <motion.div
             initial={{ left: "-11rem", top: "12rem" }}
             whileInView={{ left: "-4rem" }}
             transition={transition}
            style={{
                  top:'12rem', left: '-4rem'
            }}>
                  <Card
                  emoji={Glasses}
                  heading={"Developer"}
                  detail={
                        "HTML5, CSS5, JAVASCRIPT, REACT-JS ,etc.."
                  }
                  />
            </motion.div>
            {/* third card  */}
            <motion.div
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}
            
            style={{
                  top:'19rem', left: '12rem'
            }}>
                  <Card
                  emoji={Humble}
                  heading={"CMS / WORDPRESS"}
                  detail={
                        "Wordpress Development, Plugin Modfication, Woocommerce  etc.."
                  }
                  />
            </motion.div>
            {/* blur     */}
            <div className='blur s-blur2' style={{background : "var(--purple)"}} ></div>


      </div>

    </div>
  )
}

export default Services