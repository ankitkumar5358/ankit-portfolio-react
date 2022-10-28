import React from 'react'
import './Intro.css'
import Github from '..//../img/github.png'
import Linkedin from '..//../img/linkedin.png'
import Instagram from '..//../img/instagram.png'
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
// import boy from "../../img/boy.png";
import profileankit from '../../img/profileankit.png'
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from '..//FloatingDiv/FlaotingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

const Intro = () => {
  const transition = { duration: '2', type: 'spring' }
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? 'white' : 'black' }}>Hello 🙏, I Am</span>
          <span>Ankit Kumar</span>
          <span>Frontend Developer with intermediate level
            of experience in Creating web and mobile applications.

            Maintaining, optimizing, troubleshooting, and improving websites and webapps.
          </span>
        </div>
        <button className='button i-button'> 
        <a  style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/ankit-kumar-1401/">HIRE ME</a>
        </button>
        <div className="i-icons">
          {/* // import link here */}
          
          <a  rel='' href='https://github.com/ankitkumar5358'>
            <img className='f-img' src={Github} alt='' />
          </a>
          <a href='https://www.linkedin.com/in/ankit-kumar-1401/'>
            <img src={Linkedin} alt='' />
          </a>
          <a href='https://mail.google.com/mail/u/0/#inbox'>
            <img src={Instagram} alt='' />
          </a>

        </div>

      </div>

      {/* // right side */}
      <div className="i-right">
        <img src={Vector1} alt='' />
        <img src={Vector2} alt='' />
        <img src={profileankit} alt='' />
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}

          src={glassesimoji} alt='' />
        <motion.div
          initial={{top: '-4%', left: '74%' }}
          whileInView={{ left: '68%' }}
          transition={transition}
          style={{ top: '-4%', left: '68%' }}
          className='floating-div'
          >
          <FloatingDiv image={crown} txt1='Web' txt2=' Developer  ' />
        </motion.div>

        <motion.div
          initial={{top: '18rem', left: '9rem' }}
          whileInView={{ left: '0rem' }}
          transition={transition}
        style={{ top: '18rem', left: '0rem' }}
        className='floating-div'
        >
          <FloatingDiv image={thumbup} txt1='Software' txt2='Engineer' />
        </motion.div>
        {/* blur divs */}
        <div className='blur' style={{ backgroundColor: "rgb(238 210 255)" }} >
        </div>
        <div className='blur'
          style={{
            background: '#C1F5FF',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem'
          }}
        ></div>
      </div>
    </div>
  )
}

export default Intro