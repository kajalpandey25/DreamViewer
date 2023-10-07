import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';

const AboutHeading = () => {
  return (
    <div>
        <Container sx={{mt:{xs:8,sm:8,md:20,lg:20}}}
        >
        <Box
          display='flex'
          sx={{flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'}}}
          justifyContent='space-between'
          alignItems='center'
        >
        {/* heading */}
          <Box display="flex" alignItems="flex-start"
          justifyContent='flex-start'
          flexDirection="column"
          >
            <Box display='flex' alignItems='center' justifyContent='flex-start'>
              <Divider sx={{ width: '85px', mx:2,
               borderBottom: '.4rem solid  red',
               }} />
              <Typography color="white" variant="h2"
                fontFamily="'Open Sans', sans-serif"
              >
                <span style={{whiteSpace:'nowrap'}}>About</span> 
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ 
              m:1,
            }} 
              fontFamily="'Open Sans', sans-serif"
              color='#66FCF1'
            >
              Crafting Your Digital Dreams into Your Digital Reality
            </Typography>
          </Box>
        {/* view all link */}
          <Box sx={{display:"flex",justifyContent:"end",
           width:{xs:'100%', sm:'100%', md:'auto',lg:'auto'}
          }}>
            <Link to='/about'>
              <Button variant='outlined ' size="medium"  sx={{ 
                color: "white " ,border:"1px solid red", px:2,
                fontFamily: "'Candara', sans-serif",
                "&:hover": {
                  backgroundColor: "red",
                  color: "white",
                  border: "1px solid white",
                },
                }}
              >
              <h3> Know More <ArrowForward sx={{ fontSize: 16, pt:'3px' }}/> </h3>
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
      
    </div>
  );
};

export default AboutHeading;