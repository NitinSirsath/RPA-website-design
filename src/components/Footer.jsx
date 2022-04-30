import React from 'react'
import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 40px 30px 10px;
  background: #302E34;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 40px;
`;
   
export const Row = styled.div`
margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  /* font-size: 16px; */
  cursor: pointer;
  color: #fff;
  margin-bottom: 30px;
  font-weight: bold;
  &:hover{
      color: gray;
  }
`;

function Footer() {
  return (
      <div>
           <Box>
      <h1 style={{ color: "grey", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
       
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="/">Aim</FooterLink>
            <FooterLink href="/">Vision</FooterLink>
            <FooterLink href="/">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="/">Writing</FooterLink>
            <FooterLink href="/">Internships</FooterLink>
            <FooterLink href="/">Coding</FooterLink>
            <FooterLink href="/">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="/">Uttar Pradesh</FooterLink>
            <FooterLink href="/">Ahemdabad</FooterLink>
            <FooterLink href="/">Indore</FooterLink>
            <FooterLink href="/">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="/">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="/">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="/">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="/">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
      </div>
  
  )
}

export default Footer