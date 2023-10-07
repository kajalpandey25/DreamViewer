import { Box,Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import bannerImage from '../../assert/images/hero.png'
import bgImage2 from '../../assert/images/hero_bg6.jpg'
import NavBar from '../navBar/NavBar';


const bannerStyle = {
    backgroundImage: `url(${bgImage2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height:{xs:'100vh', sm:'100vh', md:'90vh', lg:'90vh'},
    padding: '2rem',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    flex:'1',
};


const Banner = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <>
    {isMobile ? 
      <Box sx={bannerStyle} marginTop={{sm:'60px', md:'80px',lg:'80px'}}
      flexDirection='column' alignItems='center' justifyContent='center'
      >
        <Box sx={{display: 'flex', }}>       
              <img
                src={bannerImage}
                alt="Banner"
                style={{ maxWidth: '100%', height: '100%' }}
              />
          </Box>
        <Box sx={{ width:'100%', mt:4,
         }}>
          <Typography variant="h1" color="red"
          sx={{
            fontSize:{xs:'32px', sm:'36px', md:'52px', lg:'54px'},
            textAlign:{xs:'center',sm:'center',md:'left',lg:'left'}
          }}
            fontFamily="'Verdana', sans-serif"
            marginBottom={1}
          >
            Welcome to our Website
          </Typography>
          <Typography variant="body1" 
            fontFamily="'Candara', sans-serif"
            sx={{
              textAlign:{xs:'center',sm:'center',md:'left',lg:'left'},
              mt:4
            }}
          >
            Our business is helping you grow your business. We offer Best Web & Applications Solutions, Project Management, Software Update, Google Cloud, SEO optmization, Social Media Services...
          </Typography>
        </Box>
      </Box>
      : 
      <Box sx={bannerStyle} marginTop={{sm:'60px', md:'80px',lg:'80px'}}
      flexDirection='row'
      >
        <Box sx={{ width:'100%', display:'flex',
          flexDirection:'column', justifyContent:'center', alignItems:'center'
         }}>
          <Typography variant="h1" color="red"
          sx={{
            fontSize:{xs:'32px', sm:'36px', md:'52px', lg:'54px'},
            textAlign:'center'
          }}
            fontFamily="'Verdana', sans-serif"
            marginBottom={1}
          >
            Welcome to our Website
          </Typography>
          <Typography variant="body1" 
            fontFamily="'Candara', sans-serif"
            sx={{
              textAlign:'center'
            }}
          >
            Our business is helping you grow your business. We offer Best Web & Applications Solutions, Project Management, Software Update, Google Cloud, SEO optmization, Social Media Services...
          </Typography>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'flex-end',
          width:'100%' 
         }}>            
          <img
            src={bannerImage}
            alt="Banner"
            style={{ maxWidth: '100%', height: '75vh' }}
          />
        </Box>
      </Box>
    }
    </>
  )
}

export default Banner