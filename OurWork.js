import React from 'react';
// styled
import styled from 'styled-components';
//routing
import { Link } from 'react-router-dom';
// Images
import athlete from '../images/athlete-small.png';
import theracer from '../images/theracer-small.png';
import goodtimes from '../images/goodtimes-small.png';
//animations
import { motion } from 'framer-motion';
import {
  fade,
  pageAnimation,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from '../animation';
// import { useScroll } from '../components/useScroll'
import ScrollTop from '../components/ScrollTop'

const OurWork = () => {
  // const [element, controls] = useScroll();
  // const [element2, controls2] = useScroll();
  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: '#fff' }}
    >
      <motion.div variants={sliderContainer}>
        <StyledFrame1 variants={slider}></StyledFrame1>
        <StyledFrame2 variants={slider}></StyledFrame2>
        <StyledFrame3 variants={slider}></StyledFrame3>
        <StyledFrame4 variants={slider}></StyledFrame4>
      </motion.div>
      <ScrollTop />
      <StyledMovie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <StyledHide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </StyledHide>
        </Link>
      </StyledMovie>
      <StyledMovie >
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <motion.img variants={photoAnim} src={theracer} alt="racer" />
        </Link>
      </StyledMovie>
      <StyledMovie>
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <motion.img variants={photoAnim} src={goodtimes} alt="goodtimes" />
        </Link>
      </StyledMovie>
      
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

const StyledMovie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

const StyledFrame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const StyledFrame2 = styled(StyledFrame1)`
  background: #ff8efb;
`;
const StyledFrame3 = styled(StyledFrame1)`
  background: #8ed2ff;
`;
const StyledFrame4 = styled(StyledFrame1)`
  background: #8effa0;
`;

export default OurWork;
