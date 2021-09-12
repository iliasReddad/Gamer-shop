import styled from "styled-components";

import CategoryItem from "../Components/CategoryItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Container = styled.div`
  padding: 50px 30px;
  background-color: #f5f5f5;
  grid-template-columns: repeat(3,1fr);
  overflow: hidden;

  .slick-arrow {
    background-color: red;
    height: 35px;
    width: 35px;
    border-radius: 100px;
    z-index: +2;
  }
  .slick-arrow:hover,
  .slick-arrow:active,
  .slick-arrow:focus {
    background-color: #270808 !important;
  }

`;

const TitleCont = styled.div`
height: 10vh;
background-color: #f5f5f5;

width: 100%;
display: flex;
justify-content: center;
overflow: hidden;
align-content:center;
`;
const Title = styled.h1`
font-weight: 500;
color: cadetblue;
font-size: 40px;
letter-spacing: 2px;
padding: 20px;
`;

const Categories = (props) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <>
    <TitleCont> <Title> {props.title}  </Title>
</TitleCont>

    <Container>
          <Slider {...settings}>
      {props.data.map((item) => (
        <CategoryItem item={item} key={item.id} border={props.border} radius={props.radius} txt={props.txt} />
      ))}
          </Slider>

    </Container>
    </>
  );
};

export default Categories;
