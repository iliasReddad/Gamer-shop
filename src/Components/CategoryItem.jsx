import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 72vh;
  position: flex;
  padding: 10px 10px;
  margin-left: 10px;
  width: fit-content;

`;

const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;

`;

const Info = styled.div`

  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:black;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: black;
    color:white;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item , border , radius , txt}) => {
  return (
    <Container style={{  border: border   }}>
      <Image src={item.img} style={{ borderRadius :  radius }} />
      <Info>
        <Title>{item.title}</Title>
        <Button>{txt}</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
