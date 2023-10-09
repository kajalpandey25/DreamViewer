import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';

const ServiceHeading=()=> {


  return (
    <>
       <Container sx={{mb:3, mt:10}}>
        <Box display="flex" alignItems="center">
        <Divider sx={{ width: '85px', mx:2, borderBottom: '.4rem solid red'  }} />
          <Typography variant="h2" 
            fontFamily="'Open Sans', sans-serif"
          >
            Services
          </Typography>
        </Box>
        <Typography variant="body2" sx={{color: "#66FCF1",m:1.5}} 
        fontFamily="'Open Sans', sans-serif"
        >
          {/* OUR BEST SERVICES FOR CLIENTS */}
          Our Best Services For Clients
        </Typography>
        </Container>
    
    </>
   
  );
}

export default ServiceHeading;