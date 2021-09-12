import React from 'react';
import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { sliderItems } from "../data";
import { useState } from "react";



const Container = styled.div`
height: calc(100vh-90px);
width: 100%;
display: flex;
position: relative;
background-color: #f5f5f5;
overflow: hidden;

`
const Arrowe = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
display: flex;
justify-content: center;
position: absolute;
align-items: center;
top: 0;
bottom: 0;
margin: auto;
cursor: pointer;
z-index: 2;
opacity: 0.5;
left: ${props =>
        props.direction === "left" && "10px"};
right: ${props =>
        props.direction === "right" && "10px"};

background-color: #fff7f7
;
`

const Wrapper = styled.div`
height: 100vh;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 100%;

`
const ImageCont = styled.div`
flex: 1;
height: 100%;
margin-top: 20px;
padding-left:10px;

`
const InfoCon = styled.div`
flex: 1;
padding : 50px;
font-family: 'Poppins', sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
`
const Image = styled.img`
margin-top: 50px;

height: 80%;
`
const Title = styled.h1`
`
const Description = styled.p`
margin: 50px 0px;
font-size: 18px;
font-weight: 500;
letter-spacing: 3px;
`
const Buton = styled.button`
padding: 10px;
background-color: transparent;
font-size: 20px;
cursor: pointer;
`


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleclick = (direction) => {
        if (direction === "left") {
          setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
          setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
      };
    return (
        <Container>
            <Arrowe direction="left" onClick={() => handleclick("left")}>
                <ArrowLeftOutlined ></ArrowLeftOutlined>
            </Arrowe>
            <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageCont>
              <Image src={item.img} />
            </ImageCont>
            <InfoCon>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Buton>SHOW NOW</Buton>
            </InfoCon>
          </Slide>
        ))}
      </Wrapper>

            
            <Arrowe direction="right" onClick={() => handleclick("right")}>
                <ArrowRightOutlined></ArrowRightOutlined>
            </Arrowe>


        </Container>
    )
}

export default Slider
