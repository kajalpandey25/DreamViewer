import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import blog1Img from '../../assert/images/blogg/blog1.png'
import blog2Img from '../../assert/images/blogg/blog2.jpg'
import blog3Img from '../../assert/images/blogg/blog3.jpg'
import blog4Img from '../../assert/images/blogg/blog4.jpg'
import blog5Img from '../../assert/images/blogg/blog5.png'
import blog6Img from '../../assert/images/blogg/blog6.png'
import { Container } from '@mui/system';

const Image=[blog1Img,blog2Img,blog3Img,blog4Img,blog5Img]

    const carouselContainerStyle = {
  Width: "100%", 
  height:"80vh",
 
      margin: '0 auto',
    };



    const imageStyle = {
        Width: "100%",
        height:'100%',
        
       
      };

const DetailHeader = () => {
  return (
    <>
  

  
   <Container sx={{marginTop:'8rem'}}>
      <Carousel autoPlay={true} interval={1000} infiniteLoop={true}>
      {Image.map((item ,index)=>(
        <div  style={carouselContainerStyle}  id={index}>
          <img src={item} alt="Image 1" style={imageStyle} />
        </div>
         ))}
        </Carousel>
       
        </Container>
         
    
    </>
)}

export default DetailHeader