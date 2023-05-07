import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return <Wrapper>
    <h5>
      &copy;{new Date().getFullYear()} <span>ComfySloth</span>
    </h5>
    <p>All Rights Reserved</p>
  </Wrapper>
}

const Wrapper = styled.div`
height:5rem;
background-color:var(--clr-black);
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
color:white;
text-align:center;
p{
  color:white;
}
span{
  color:var(--clr-primary-5);
}
h5{

  margin:0.1rem;
  font-weight:400;
  text-transform:none;
  line-height:1.25;
}
@media (min-width:776px){
  flex-direction:row;
}
p{
  margin-bottom:0;
}
`


export default Footer
