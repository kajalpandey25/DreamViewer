import { Box,Divider,Grid,Typography } from '@mui/material'
import React from 'react'

import bgImage2 from '../../../assert/images/portfolio_bg.jpg'
import { Container } from '@mui/system';
import image3 from '../../../assert/images/aboutCorner.jpg'
import style from './AboutHeader.module.css'

const headerStyle = {
    backgroundImage: `url(${bgImage2})`,
    backgroundSize: 'cover',
    height:{xs:'100%',sm:'100%', md:'98vh',lg:'98vh'},
    backgroundPosition: 'center',
    width: '100%',
    fontFamily:"Prompt",
    paddingTop:12,
    color:"rgb(255, 255, 255)",
};


const AboutHeader = () => {
  return (
    <>
      <Box sx={headerStyle}>
        <Container sx={{ width:'100%', height:'100%',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6} lg={6}>
              <Typography  color="red"  fontSize={{
                lg: 75,
                md: 68,
                sm: 60,
                xs: 55
                }}
                fontFamily="'Candara', sans-serif"
              >
                ABOUT US
              </Typography>
              <Divider sx={{width:'20%' ,borderBottom:".3rem solid #66FCF1",borderRadius:'5px',marginBottom:3}}/>
              <Typography component='div'
              fontSize={{
                lg: 35,
                md: 31,
                sm: 30,
                xs: 28
              }}
              fontFamily="'Candara', sans-serif"
              >
              CRAFTING YOUR DIGITAL DREAMS INTO DIGITAL REALITY.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={6}  
              sx={{display:'flex',justifyContent:{xs:'center', md:'end'}} } 
            >
              <Typography className={style.imageContainer} 
                sx={{maxWidth:{xs:"360px",sm:'360px',md:'500px',lg:'500px'}, 
              }}
              >
                <img src={image3}  className={style.image}/>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

    
    </>
  )
}

export default AboutHeader