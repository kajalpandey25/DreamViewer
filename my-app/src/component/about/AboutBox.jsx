import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';

const boxesData = [
  {
    title: 'Who We Are',
    description: 'DreamViewer is leading technology providing solutions according to uour business needs since 2021. We are here to provide touch notch solution for your website or web application.',
  },
  {
    title: 'Our Vision',
    description: 'We want to lead in Innovation & Technology .We work on UI/UX and functionality as well so that a plugins comes with proper stucture & stunning looks which suits to your web app & website.',
  },
  {
    title: 'Our Mission' ,
    description: 'Our commitment to quality and customer satisfaction is evident in everything we do. We believe that every project is unique and requires a personalized approach. ' 
  },
];

const AboutBox = () => {
  return (
        <Container sx={{marginBottom:6}}>
          <Grid container spacing={2}>
            {boxesData.map((box, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper  sx={{ padding: '16px', height: '100%',bgcolor:"black" ,boxShadow: '0px 0px 6px 0px rgba(255, 255, 255, 0.6)'}}>
                  <Typography gutterBottom
                    fontSize={{xs:'12px ',sm:'24px', md:'28px', lg:'28px'}}
                    sx={{
                      color:"red",
                      textAlign:"center",
                      // fontFamily:"'Jost',sans-serif"
                      fontFamily: "'Candara', sans-serif",
                    }}
                  >
                    {box.title}
                  </Typography>
                  <Typography variant="body2" 
                    sx={{
                      color:"white",
                      fontFamily:"'Candara', sans-serif"
                    }} 
                  >
                  {box.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
  );
};

export default AboutBox;