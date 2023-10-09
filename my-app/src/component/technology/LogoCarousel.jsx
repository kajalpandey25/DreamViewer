import React from 'react';

import Slider from 'react-slick';

import styles from './LogoCarousel.module.css'
// Import the CSS files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import img1 from '../../assert/images/technologyLogo/Angular.png'
import img2 from '../../assert/images/technologyLogo/bootstrap.png'
import img3 from '../../assert/images/technologyLogo/Google-Cloud-Monitoring.png'
import img4 from '../../assert/images/technologyLogo/GraphQL_.png'
import img5 from '../../assert/images/technologyLogo/ReactNativeIcon.png'
import img6 from '../../assert/images/technologyLogo/android.png'
import img7 from '../../assert/images/technologyLogo/aws.png'

import img13 from '../../assert/images/technologyLogo/java.png'
import img8 from '../../assert/images/technologyLogo/exppressIcon.jpeg'
import img9 from '../../assert/images/technologyLogo/mongodb.png'
import img10 from '../../assert/images/technologyLogo/mysql_.png'
import img11 from '../../assert/images/technologyLogo/python.png'
import img12 from '../../assert/images/technologyLogo/react.png'

import { Container } from '@mui/system';



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
 
  
const logos = [
  {image:img1},
  {image:img2},
  {image:img3},
  {image:img4},
  {image:img5},
  {image:img6},
  {image:img13},
  {image:img7},
  {image:img8},   {image:img9},   {image:img10}
  ,
  {image:img11},
  {image:img12},
  ]
  
function LogoCarousel() {
  const settings = {
    // breakPoints:{breakPoints},
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (

  
  <>
  
  <Slider {...settings}>
    {logos.map((logo)=>(

<div className={styles.container}>
<img src={logo.image} alt="image1" />
</div>


    ) )} 
          </Slider>
  
  </> 
)
 
    }


export default LogoCarousel;