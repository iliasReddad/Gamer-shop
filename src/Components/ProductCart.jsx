import styled from 'styled-components';
import React from 'react'
import Play from "../play.png";
import Card from './Card';
import {data} from './data';



const Container = styled.div`
height: 88vh;
width: 100%;
display: flex;
background-color:teal;
overflow: hidden;
background-image: url(https://static.vecteezy.com/system/resources/previews/002/426/808/original/modern-vibrant-circuit-board-gaming-background-design-vector.jpg);
background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;


`

const Wrapper = styled.div`
height: max-content;
width: 100%; 
margin: 4vw 20vw;
background: #eee;
display: flex;
padding: 20px ;
align-items: center;
justify-content: center;
border-radius: 2%;
    ;
    
    
    `
const Title = styled.h1`
color: #0f0101;
font-size: 30px;
margin-top: 10px;
padding:  15px ;

`
const ImageContainer = styled.div`
   position: relative;
    width: 50%;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
    border: 2px solid #fff;
    box-shadow: 0px 4px 7px rgba(0,0,0,.5);
    cursor: pointer;
    transition: all .5s cubic-bezier(.8,.5,.2,1.4);

`
const Info = styled.div`

    height: 100%;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    margin-left: 20px;
    background: white;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid transparent;
    border-color: black;

`
const Cover = styled.div`
box-shadow: 0 0 8px 0 rgb(0 0 0 / 10%);
transition: all .5s cubic-bezier(.8,.5,.2,1.4);

`
const Subinfo = styled.div`
    border: 1px solid rgba(62,62,62,.2);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    margin: 10px 0;
    background: rgba(0,0,0,.04);
    flex-wrap: wrap;
    padding:  10px 5px;
`
const Choice = styled.div`
  margin: 6px 5px;
text-align: center; 
display: flex;
align-items: center;
justify-content: center;
padding:  5px 5px;


`
const Buy = styled.div`
margin-top: 10px;
    text-align: center;
    display: flex;
    width: calc(100% + 10px);
    background: #000;
    padding: 15px;
    min-height: 60px;
    align-items: center;
    justify-items: center;

`
const Download = styled.div`
    display: inline-block;
    padding: 8px 17px 7px 15px;
    border-right: 1px solid rgba(62,62,62,.23);
    vertical-align: top;
    font-weight: 700;
    font-size: 13px;
    color: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      width: fit-content;

`

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`

const Edition = styled.button`
    width: fit-content;
  border: none;
  border-radius: 10px;
  background-color: #010102;
  color: white;
  font-size: 20px;
  padding: 10px 10px;
  margin-left: 5px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;

`
const Tag = styled.a`
border: 1px solid hsla(0,0%,46.7%,.65);
    color: #3b3737;
    border-radius: 3px;
    font-size: 14px;
    padding: 10px 12px;
    display: inline-block;
    margin: 0px 4px;
    cursor: pointer;
    vertical-align: top;
    letter-spacing: px;
    width: fit-content;

`
const Price = styled.div`
flex :1;
text-align: left;
    margin-right: 20px;
    margin-left: 20px;
    `
const PriceTexte = styled.p`
    color: white;
    font-weight: 500;
    font-size: 17px;
    margin-right: 5px;
    width: fit-content;

    `
const Swap = styled.div`
width: 100%;
height: 100%;
flex :1;

`

const Purshache = styled.button`
font-size: 19px;
    width: 100%;
    min-height: 60px;
    padding: 0 15px;
    line-height: 20px;
    cursor: pointer;
    background: #ff5400;
    color: #fff;
    border-radius: 5px;
`




const Product = () => {

    return (
        <>
        <Container>
            <Wrapper>
            <ImageContainer>
            <Card data={data} >  </Card>

            </ImageContainer>
            <Info>
            <Title>{data.title}</Title>
            <Subinfo>
            <Download>
            <Icon src="https://s3.gaming-cdn.com/themes/igv1/modules/product/images/ticked2.png"/> <h2>{data.dev}</h2> 
            </Download>
            <Download>
            <Icon src="https://s3.gaming-cdn.com/themes/igv1/modules/product/images/ticked2.png"/>  <h2>En stock</h2> 
            </Download>
            <Download>
            <Icon src="https://s3.gaming-cdn.com/themes/igv1/modules/product/images/ticked2.png" style={{borderRight:0}} /><h2>ddddddddddddimmédiat</h2>  
            </Download>
            
                 </Subinfo>
            <Choice>
             {data.genre.map( (e) =>{
            return  <Edition > <Icon src={Play} /> {e} </Edition>
             }
              
              )
            
            }


             </Choice>
             <Choice>
             <Tag> Edition Standart </Tag>
            <Tag>  Edition Deluxe  </Tag>
            <Tag>  Edition Ultimate  </Tag>


             </Choice>
             <Choice>
            <Tag> Action </Tag>
            <Tag>  Aventure </Tag>
            <Tag>  Rpg </Tag>

             </Choice>
             <Choice >
             <PriceTexte style={{color:"blue"}}> {data.gameLeft} jeux restant à ce prix </PriceTexte>
             <PriceTexte style={{color:"red"}}> (!!!) </PriceTexte>

             </Choice>

            <Buy>
             <Price>
             <PriceTexte style={{color:"red"}}> Promo : -40% </PriceTexte>

             <PriceTexte> Prix de Vente Conseillé :  <b style={{color:"green"}}> {data.price} £</b> </PriceTexte>

   
            </Price> 
             <Swap>
             <Purshache> BUY</Purshache>

            </Swap>  
            </Buy>
            </Info>
            </Wrapper>

        </Container>
      </>  
    )
}

export default Product
