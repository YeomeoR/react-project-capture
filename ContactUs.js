import React from 'react';
//animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
//styled
import styled from 'styled-components';
import ScrollTop from '../components/ScrollTop'
import SendEmail from '../components/SendEmail'

const ContactUs = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: '#fff' }}
    >
      <ScrollTop />
      <StyledTitle>
        <StyledHide>
          <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
        </StyledHide>
      </StyledTitle>
      <div>
        <StyledHide>
        <StyledSocial variants={titleAnim}>
          <StyledCircle />
          <h2 id="contact">Send us a message</h2>
        </StyledSocial>
        </StyledHide>
        <StyledHide>
          <StyledSocial variants={titleAnim}>
          <StyledCircle />
          <h2 id="contact" onClick={SendEmail}>Send an email</h2>
          </StyledSocial>
        </StyledHide>
        <StyledHide>
        <StyledSocial variants={titleAnim}>
          <StyledCircle />
          <h2 id="contact">Social Media</h2>
          </StyledSocial>
          </StyledHide>
      </div>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const StyledTitle = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1300px) {
    margin-top: 5rem;
    padding: 2rem;
    font-size: 1rem;
  }
`;
const StyledHide = styled.div`
  overflow: hidden;
`;
const StyledCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const StyledSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
