import React from 'react';
import styled from 'styled-components';
import{Badge} from"@material-ui/core";
import { Search, ShoppingCartOutlined } from '@material-ui/icons';


const Container = styled.div`
height: 60px;
background: radial-gradient(
    circle,
    rgba(255, 252, 0, 1) 0%,
    rgba(240, 237, 23, 1) 100%
  );

`





const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
`
const Left = styled.div`
flex :1;
display: flex;
align-items: center;
`
const Center = styled.div`
flex :1;
text-align: center;

`
const Right = styled.div`
flex :1;
display: flex;
align-items: center;
justify-content:flex-end;

`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
`
const ShearContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;

`
const Inpute = styled.input`
border:none ;
`
const Logo = styled.h1`
font-weight:bold;  
display: flex;
justify-content: center;
align-items: center;
color: white;
  text-shadow: 0 0.1em 20px rgba(0, 0, 0, 1), 0.05em -0.03em 0 rgba(0, 0, 0, 1),
    0.05em 0.005em 0 rgba(0, 0, 0, 1), 0em 0.08em 0 rgba(0, 0, 0, 1),
    0.05em 0.08em 0 rgba(0, 0, 0, 1), 0px -0.03em 0 rgba(0, 0, 0, 1),
    -0.03em -0.03em 0 rgba(0, 0, 0, 1), -0.03em 0.08em 0 rgba(0, 0, 0, 1),
    -0.03em 0 0 rgba(0, 0, 0, 1);
  span {
    transform: scale(0.9);
    display: inline-block;
  }
  span:first-child {
    animation: bop1 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite
      alternate;
  }
  span:last-child {
    animation: bopB1 1s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards
      infinite alternate;
  }
}

@keyframes bop1 {
  0% {
    transform: scale(0.9);
  }
  50%,
  100% {
    transform: scale(1);
  }
}

@keyframes bopB1 {
  0% {
    transform: scale(0.9);
  }
  80%,
  100% {
    transform: scale(1) rotateZ(-3deg);
  }
`

const MenuItems = styled.div`
font-size:14px;
cursor: pointer;
margin-right: 10px;
`



const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left><Language>EN</Language>
                    <ShearContainer>
                        <Inpute></Inpute>
                        <Search style={{color:"gray" ,fontSize:16}}></Search>
                    </ShearContainer>
                </Left>
                <Center>
                    <Logo > 
                    <span style={{marginRight:5}}>"Gamer</span><span >Shope"</span>
                    </Logo>
                </Center>
                <Right>
                    <MenuItems>Register</MenuItems>
                    <MenuItems>Sign In</MenuItems>
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartOutlined />
                    </Badge>

                </Right>
            </Wrapper>

        </Container>
    )
}

export default Navbar
