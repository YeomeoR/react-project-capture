import React from 'react';
// styled
import styled from 'styled-components';
//routing
import { Link } from 'react-router-dom';
// Images
import athlete from '../images/athlete-small.png';
import theracer from '../images/theracer-small.png';
import goodtimes from '../images/goodtimes-small.png';

const OurWork = () => {
  return (
    <StyleWork>
      <StyledMovie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link>
        <img src={athlete} alt="athlete" /></Link>
      </StyledMovie>
      <StyledMovie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link>
        <img src={theracer} alt="racer" /></Link>
      </StyledMovie>
      <StyledMovie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link>
        <img src={goodtimes} alt="goodtimes" /></Link>
      </StyledMovie>
    </StyleWork>
  );
};

const StyleWork = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }

`;

const StyledMovie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
