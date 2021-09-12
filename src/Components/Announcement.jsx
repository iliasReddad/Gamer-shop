import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
height: 30px;
background: black;
font-family: 'Urbanist', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
color:whitesmoke;
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
font-weight: 300;
animation: neon .08s  infinite alternate;
@keyframes neon {
  from {
    text-shadow:
    0 0 6px #040707ea,
    0 0 30px rgba(202,228,225,0.34),
    0 0 12px rgba(30,132,242,0.52),
    0 0 21px rgba(30,132,242,0.92),
    0 0 34px rgba(30,132,242,0.78),
    0 0 54px rgba(30,132,242,0.92);
  }
  to {
    text-shadow:
    0 0 6px rgba(202,228,225,0.98),
    0 0 30px #eb51516b,
    0 0 12px rgba(30,132,242,0.58),
    0 0 22px #f75d5dd6,
    0 0 38px #f34750e0,
    0 0 60px #eb0e45;
  }
}

`


const Announcement = () => {
    return (
        <Container>
           Super Deal ! Free coupons for new Client until 10 September !! 
        </Container>
    )
}

export default Announcement
