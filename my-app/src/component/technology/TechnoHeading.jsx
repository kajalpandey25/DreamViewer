import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';

const TechnoHeading = () => {
  return (
    <div>
        <Container sx={{mt:8,mb:4}}
        >
        <Box
          display='flex'
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
                <span style={{whiteSpace:'nowrap'}}>Technologies</span> 
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ 
              m:1,
            }} 
              fontFamily="'Open Sans', sans-serif"
              color='#66FCF1'
            >
              Have a look at we use more efficient and reliable technology
            </Typography>
          </Box>
        {/* view all link */}
          {/* <Box sx={{display:"flex",justifyContent:"end"}}>
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
              <h3> View All Projects <ArrowForward sx={{ fontSize: 16, mt:'5px' }}/> </h3>
              </Button>
            </Link>
          </Box> */}
        </Box>
      </Container>
      
    </div>
  );
};

export default TechnoHeading;