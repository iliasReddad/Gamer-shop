import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: linear-gradient(rgba(10,10,10,.6),rgba(0,0,0,.9)), repeating-linear-gradient(0, transparent, transparent 2px, black 3px, black 3px),
		url('https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=7118759521e3184778a3b5e010e202c6');
	background-size: cover;
	background-position: center;
	z-index: 1;

`;
const TitleCont = styled.div`
height: 10vh;
width: 100vw;
padding:  20px 20px;
display: flex;
justify-content: center;
align-content:center;
`;

const Logo2 = styled.h1`
font-weight:lighter;  
display: flex;
justify-content: center;
align-items: center;
color: #eb1a1a;
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
    animation: anim1 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite
      alternate;
  }
  span:last-child {
    animation: anim2 1s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards
      infinite alternate;
  }
}

@keyframes anim1 {
  0% {
    transform: scale(0.9);
  }
  50%,
  100% {
    transform: scale(1.2);
  }
}

@keyframes anim2 {
  0% {
    transform: scale(0.9);
  }
  80%,
  100% {
    transform: scale(1.5) rotateZ(3deg);
  }
`

const Products = () => {
  return (
    <Container>
          <TitleCont> 
          <Logo2 > 
                    <span style={{marginRight:55}}>"Trending</span><span >games"</span>
                    </Logo2>
             </TitleCont>

      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
