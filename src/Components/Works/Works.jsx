import React from 'react'
import './Works.css'
import nextjs from "../../img/nextjs.png"
import css from "../../img/css.png"
import html from "../../img/html.png"
import js from "../../img/js.png"
import react from "../../img/react.png"
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'



const Works = () => {
      const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;
  return (
      <div className='works'>
            {/* left */}
      <div className="awesome">
      <span style={{color : darkMode ? 'white' : 'black'}}>Works  efficiently for all these</span>
      <span>Language & Tools</span>
      <span style={{color : darkMode ? 'white' : 'black'}}>
            Use markup languages like HTML to create user-friendly web pages
            <br/>
            Maintain and improve website
            <br/>
            Optimize applications for maximum speed
            Design mobile-based features in CSS & Javascript
            <br/>
            Collaborate with back-end developers and web designers to improve usability
            <br/>
            Get feedback from, and build solutions for, users and customers
            <br/>
            Write functional requirement documents and guides
            <br/> 
            Create quality mockups and prototypes
            <br/>
            Help back-end developers with coding and troubleshooting
            <br/>
            Ensure high quality graphic standards and brand consistency
            <br/>
            Stay up-to-date on emerging technologies like ReactJS and NextJS
            <br/>

            </span>
      {/* <button className='button s-button'>Hire Me</button> */}
      <button className='button s-button'> 
        <a  style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/ankit-kumar-1401/" target="_blank">HIRE ME</a>
        </button>
      <div className="blur s-blur1" style={{background: '#ABF1FF94'}} ></div>
      </div>
            {/* right */}
      <div className="w-right">
            <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-mainCircle">
                  <div className="w-secCircle">
                        <img src={nextjs} alt='' />
                  </div>
                  <div className="w-secCircle">
                        <img src={css} alt='' />
                  </div>
                  <div className="w-secCircle">
                        <img src={html} alt='' />
                  </div>
                  <div className="w-secCircle">
                        <img src={js} alt='' />
                  </div>
                  <div className="w-secCircle">
                        <img src={react} alt='' />
                  </div>
            </motion.div>
            {/* background circle */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
      </div>
      </div>
  )
}

export default Works