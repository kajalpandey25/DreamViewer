import { Box,Typography } from '@mui/material'
import React from 'react'
import bannerImageTop from '../../../assert/images/uiux_hero2.jpg'
import bannerImageBottom from '../../../assert/images/uiux_hero1.jpg'

const bannerStyle1 = {
    // backgroundImage: `url(${bgImage2})`,
   
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height:'87vh',
    padding: '2rem',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    flex:'1'
  };
  const bannerStyle2 = {
    // backgroundImage: `url(${bgImage2})`,
   
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height:'87vh',
    padding: '2rem',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    flex:'1'
  };

const Uiux_header = () => {
  const isSmallScreen = window.innerWidth <= 768;
  return (
    <>
    {/* container 1 */}
    {isSmallScreen ? (
      <Box
        marginTop='70px'
        sx={{
          padding:'2rem'
        }}
        flexDirection="column"
      >
        <img
          src={bannerImageTop}
          alt="Banner"
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '1rem',
            marginBottom: '1rem',
          }}
        />
        <Typography
          variant="h1"
          color="red"
          sx={{
            fontSize: { xs:'28px', sm: '28px', md: '44px' },
            whiteSpace: 'normal',
            fontFamily: "'Verdana', sans-serif",
            marginBottom: '1rem',
          }}
        >
          Understanding the Importance of UX/UI in Designing a Successful Product
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { sm: '12px', md: '20px' },
            whiteSpace: 'normal',
            fontFamily: "'Candara', sans-serif",
          }}
        >
          At our company, we specialize in providing top-notch UX/UI design services to help businesses create successful products. We understand the importance of a great user experience and how it can make all the difference in the success of a product. Our team of skilled designers has years of experience creating intuitive, engaging, and visually appealing designs that resonate with users.
        </Typography>
      </Box>
    ):
    (
      <Box sx={bannerStyle1} marginTop={{sm:'60px', md:'80px',lg:'80px'}}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h1" color="red"
          sx={{
            fontSize:{xs:'28px', sm:'28px',md:'44px'},
            whiteSpace:'normal'
          }}
            fontFamily="'Verdana', sans-serif"
            marginBottom={1}
          >
            Understanding the Importance of UX/UI in Designing a Successful Product
          </Typography>
          <Typography variant="body1" 
            sx={{
                fontSize:{sm:'12px',md:'20px'},
                whiteSpace:'normal'
            }}
            fontFamily="'Candara', sans-serif"
          >
            At our company, we specialize in providing top-notch UX/UI design services to help businesses create successful products. We understand the importance of a great user experience and how it can make all the difference in the success of a product. Our team of skilled designers has years of experience creating intuitive, engaging, and visually appealing designs that resonate with users.          
            </Typography>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <img src={bannerImageTop} alt="Banner" 
          style={{ maxWidth: '100%', height: '75vh', borderRadius:'1rem' }} />
        </Box>
      </Box>
    )}
    {/* container 2 */}
    {isSmallScreen?(
      <Box
        marginTop='20px'
        sx={{
          padding:'2rem'
        }}
        flexDirection="column"
        backgroundColor='rgb(21, 22, 26)'
      >
        <img
          src={bannerImageBottom}
          alt="Banner"
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '1rem',
            marginBottom: '1rem',
          }}
        />
        <Typography
          variant="h1"
          color="red"
          sx={{
            fontSize: { xs:'28px', sm: '28px', md: '44px' },
            whiteSpace: 'normal',
            fontFamily: "'Verdana', sans-serif",
            marginBottom: '1rem',
          }}
        >
          UX/UI-Wireframing and Prototyping        
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { sm: '12px', md: '20px' },
            whiteSpace: 'normal',
            fontFamily: "'Candara', sans-serif",
          }}
        >
          UX/UI refers to the design of a digital product or service with the user experience (UX) and user interface (UI) in mind. UX design focuses on understanding the needs and behaviors of users and creating products that are intuitive, efficient, and enjoyable to use. UI design, on the other hand, involves creating a visually appealing interface that allows users to interact with the product or service seamlessly. Both UX and UI design play a critical role in creating successful products, as they ensure that users can easily navigate and interact with the product, resulting in a positive user experience.
        </Typography>
      </Box>
    ):(
      <Box sx={bannerStyle2} marginTop={{sm:'60px', md:'80px',lg:'80px'}}
      backgroundColor='rgb(21, 22, 26)'
      >
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start', mr:4 }}>
          <img src={bannerImageBottom} alt="Banner" 
          style={{ maxWidth: '100%', height: '75vh', borderRadius:'1rem' }} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h1" color="red"
          sx={{
            fontSize:{xs:'28px', sm:'28px',md:'44px'},
            whiteSpace:'normal'
          }}
            fontFamily="'Verdana', sans-serif"
            marginBottom={1}
          >
            UX/UI-Wireframing and Prototyping          
        </Typography>
          <Typography variant="body1" 
            sx={{
                fontSize:{sm:'12px',md:'20px'},
                whiteSpace:'normal'
            }}
            fontFamily="'Candara', sans-serif"
          >
            UX/UI refers to the design of a digital product or service with the user experience (UX) and user interface (UI) in mind. UX design focuses on understanding the needs and behaviors of users and creating products that are intuitive, efficient, and enjoyable to use. UI design, on the other hand, involves creating a visually appealing interface that allows users to interact with the product or service seamlessly. Both UX and UI design play a critical role in creating successful products, as they ensure that users can easily navigate and interact with the product, resulting in a positive user experience.         
            </Typography>
        </Box>
        
      </Box>
    )}
    </>
  )
}

export default Uiux_header