import React from 'react';

import home1 from '../images/home1.png';
// framer-motion
// styled components!!!!!!!!!!!!! AWESOME!
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from '../styles';

import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './wave';
import SendEmail from '../components/SendEmail'

const AboutSection = () => {
  
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any ideas that you have. We can turn your dreams into
          reality.
        </motion.p>
        <motion.button variants={fade} onClick={SendEmail}>Contact Us</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={photoAnim} src={home1} alt="Guy with a camera" />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default AboutSection;
