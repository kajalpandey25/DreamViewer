import React from 'react';
import Grid from '@mui/material/Grid';
import image1 from '../../assert/images/about_team.jpg'
import image2 from '../../assert/images/about_philosopy.jpg'
import image3 from '../../assert/images/about_work.jpg'
import { Box, Container } from '@mui/system';


import {Typography} from '@mui/material'
import './ImageWithTextOverlay.css';

const AboutImage=() =>{
  return (
    <Container>  
    <Box
      sx={{
        my:8,
        px:{sm:1, md:2}
      }}
    >
      <Grid container spacing={2}>
        {/* First Column */}
        <Grid item xs={12} md={6} lg={6} 
        sx={{
          height:{xs:'300px',sm:'300px',md:'612px'}
        }}
        >
        <div className="image-container">
          <img src={image1} alt="Image 1" className="image-container"
          />
          <div className="text-overlay">
            <Typography color="red " gutterBottom 
            sx={{
              textAlign:"center",px:5
              }} variant="h4">
              TEAM WORK
            </Typography>
            <Typography gutterBottom
              sx={{textAlign:"center"}} 
              variant="body2">
              Committed and creative
            </Typography>
          </div>
        </div>

        </Grid>
        {/* Second Column */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {/* First Row */}
            <Grid item xs={12} height='300px'>
            <div className="image-container">
              <img src={image2} alt="Image 2" className="image-container"  />
              <div className="text-overlay" >
                <Typography gutterBottom sx={{textAlign:"center",px:5}} color="red " variant="h5"> PHILOSOPHY</Typography>
                <Typography   gutterBottom sx={{textAlign:"center"}} variant="body2">Trust pays off</Typography>
              </div>
            </div>
            </Grid>
            {/* Second Row */}
            <Grid item xs={12} height='300px'>
            <div className="image-container">
              <img src={image3} alt="Image 3"
              className="image-container"  />
               <div className="text-overlay" >
               <Typography color="red "  gutterBottom sx={{textAlign:"center",px:5}}  variant="h4">OFFICE</Typography>
                <Typography   gutterBottom  sx={{textAlign:"center"}} variant="body2">
                  Somewhere on earthK
                </Typography>
              </div>
            </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}

export default AboutImage;