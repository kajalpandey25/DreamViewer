import React from 'react'
import { Box,Button,Link,Typography } from '@mui/material'

const bannerStyle = {
    // backgroundImage: `url(${bgImage2})`,
   
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    padding: '2rem',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    flex:'1'
  };

const GamingMid = () => {
  return (
    <>
        <Box sx={bannerStyle} marginTop={{sm:'60px', md:'80px',lg:'80px'}}
      >
        <Box sx={{ flex: 1,mt:0 }}>
          <Typography variant="h1" color="red"
          sx={{
            fontSize:{xs:'28px', sm:'28px',md:'40px'},
            whiteSpace:'normal',
            textAlign:'center'
          }}
            fontFamily="'Verdana', sans-serif"
            marginBottom={1}
          >
            Reasons that make us a suitable choice for your gaming applications.
            </Typography>
          <Typography variant="body1" 
            sx={{
                fontSize:{sm:'12px',md:'16px'},
                whiteSpace:'normal',
                mt:2
            }}
            fontFamily="'Candara', sans-serif"
          >
          We offer gaming services that may be a good choice who are looking for reliable and experienced partner in the gaming industry. We at DreamViewer Infotech, provides expertise in game development,platform management, customer support and and other aspects of gaming business.With a team of experienced professionals, we can offer gaming services that can help you create high-quality games, manage gaming platforms, and provide excellent customer service to your players. Additionally, we offer gaming services which are cost effective and provide flexibilty in terms of the size and scope of gaming services needed.        
        </Typography>
        </Box>
        </Box>
    </>
  )
}

export default GamingMid