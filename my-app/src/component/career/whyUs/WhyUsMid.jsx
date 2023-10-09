import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const WhyUsMid = () => {
  return (
    <>
        <Box textAlign='center' py={4} 
            // sx={{
            //     backgroundColor:"rgb(21, 22, 26)"
            // }}
        >
            <Typography variant='h2' component='h2'
            fontFamily="'Verdana',sans-serif"
            sx={{
                mt:{xs:4, sm:4, md:6, lg:8},
                color:'red',
                fontWeight:500
            }}
            >
                Why Join Us?
            </Typography>
            <Typography variant='h3'
            color='white'
            fontFamily="'Verdana',sans-serif"
            sx={{
                mt:{xs:2, sm:2, md:3, lg:4},
                px:{xs:2, sm:3, md:4, lg:6},
                lineHeight: 1.5
            }}
            >
                Welcome to DreamViewer Infotech, where innovation and technology are at the forefront of everything we do. If you're looking for a dynamic and challenging workplace that values creativity, collaboration, and personal growth, then we are the perfect fit for you.
            </Typography>
        </Box>
    </>
  )
}

export default WhyUsMid