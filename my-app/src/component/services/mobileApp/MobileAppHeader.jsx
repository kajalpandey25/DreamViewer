import { Box,Button,Link,Typography } from '@mui/material'
import React from 'react'
import bannerImageTop from '../../../assert/images/appDev_hero1.png'
import bannerImageBottom from '../../../assert/images/appDev_hero2.jpg'

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
    height:'100%',
    padding: '2rem',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    flex:'1'
  };

const MobileAppHeader = () => {
  const isSmallScreen = window.innerWidth <= 768;

  return (
    <>
    {/* container 1 */}
    {isSmallScreen ? (
      <Box
        marginTop='20px'
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
          Revolutionizing the Digital Landscape: The Power and Potential of Application Development        
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { sm: '12px', md: '20px' },
            whiteSpace: 'normal',
            fontFamily: "'Candara', sans-serif",
          }}
        >
         With the increasing use of mobile and internet devices, the demand for applications has increased, and businesses are seeking to harness the power of application development to reach their target audience and improve customer engagement. This emphasizes the significant impact of application development on the digital landscape and how it has transformed the way businesses operate in the digital world.
        </Typography>
      </Box>
    ) : (
      <Box sx={bannerStyle1} marginTop={{sm:'60px', md:'80px',lg:'80px'}}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h1" color="red"
          sx={{
            fontSize:{sm:'28px',md:'40px'},
            whiteSpace:'normal'
          }}
            fontFamily="'Verdana', sans-serif"
            marginBottom={1}
          >
            Revolutionizing the Digital Landscape: The Power and Potential of Application Development          </Typography>
          <Typography variant="body1" 
            sx={{
                fontSize:{sm:'12px',md:'20px'},
                whiteSpace:'normal'
            }}
            fontFamily="'Candara', sans-serif"
          >
            With the increasing use of mobile and internet devices, the demand for applications has increased, and businesses are seeking to harness the power of application development to reach their target audience and improve customer engagement. This emphasizes the significant impact of application development on the digital landscape and how it has transformed the way businesses operate in the digital world.
            </Typography>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <img src={bannerImageTop} alt="Banner" 
          style={{ maxWidth: '100%', height: '100%', borderRadius:'1rem' }} />
        </Box>
      </Box>
    )}
    {/* container 2 */}
    {isSmallScreen ? (
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
            marginTop:'1rem',
            marginBottom: '2rem',
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
          livhealthyfi - The Health App      
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { sm: '12px', md: '20px' },
            whiteSpace: 'normal',
            fontFamily: "'Candara', sans-serif",
          }}
        >
         livhealthyfi is a health and fitness app that offers personalized diet plans, nutrition advice, and workout plans to help users achieve their health goals. The app has a user-friendly interface that allows users to track their calorie intake, monitor their progress, and connect with certified nutritionists and fitness coaches for support and guidance. livhealthyfi also offers challenges and rewards to keep users motivated on their health journey. It is a comprehensive health app that provides users with the tools and resources they need to live a healthier life.
        </Typography>
        <Typography variant="h1" color="red"
                sx={{
                    fontSize:{xs:'20px', sm:'20px',md:'36px'},
                    whiteSpace:'normal',
                    mt:2
                }}
                    fontFamily="'Verdana', sans-serif"
                    marginBottom={1}
                >
                Do you want to know more about applicaton services?
        </Typography>
            {/* contact us button */}
            <Box sx={{display:"flex",justifyContent:"start", mt:4}}>
                    <Link to='/contact'>
                        <Button
                        variant='contained'
                        sx={{
                            size:{sm:'small',md:'large',lg:'large'},
                            color: 'white',
                            bgcolor: 'red',
                            border: '1px solid red',
                            borderRadius: '5px',
                            padding: '5px 10px',
                            textTransform: 'uppercase',
                            '&:hover': {
                            backgroundColor: 'darkred',
                            },
                        }}
                        >
                        <Typography variant='h6' fontFamily="'Roboto', sans-serif"
                            size={{sm:'small',md:'large',lg:'large'}}
                        >
                            Contact Us
                        </Typography>
                        </Button>
                    </Link>
            </Box>
      </Box>
    ) : (
      <Box sx={bannerStyle2} marginTop={{sm:'60px', md:'80px',lg:'80px'}}
      backgroundColor='rgb(21, 22, 26)'
      >
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start', mr:4 }}>
          <img src={bannerImageBottom} alt="Banner" 
          style={{ height: '85vh', borderRadius:'1rem' }} />
        </Box>
        <Box sx={{ flex: 1 }}>
            <Typography variant="h1" color="red"
            sx={{
                fontSize:{sm:'28px',md:'40px'},
                whiteSpace:'nowrap'
            }}
                fontFamily="'Verdana', sans-serif"
                marginBottom={1}
            >
                    livhealthyfi - The Health App
            </Typography>
            <Typography variant="body1" 
                sx={{
                    fontSize:{sm:'12px',md:'18px'},
                    whiteSpace:'normal', 
                    mt:2
                }}
                fontFamily="'Candara', sans-serif"
            >
                livhealthyfi is a health and fitness app that offers personalized diet plans, nutrition advice, and workout plans to help users achieve their health goals. The app has a user-friendly interface that allows users to track their calorie intake, monitor their progress, and connect with certified nutritionists and fitness coaches for support and guidance. livhealthyfi also offers challenges and rewards to keep users motivated on their health journey. It is a comprehensive health app that provides users with the tools and resources they need to live a healthier life.      
            </Typography>
            <Typography variant="h1" color="red"
                sx={{
                    fontSize:{sm:'20px',md:'36px'},
                    whiteSpace:'normal',
                    mt:2
                }}
                    fontFamily="'Verdana', sans-serif"
                    marginBottom={1}
                >
                Do you want to know more about applicaton services?
            </Typography>
            {/* contact us button */}
            <Box sx={{display:"flex",justifyContent:"start", mt:4}}>
                    <Link to='/contact'>
                        <Button
                        variant='contained'
                        sx={{
                            size:{sm:'small',md:'large',lg:'large'},
                            color: 'white',
                            bgcolor: 'red',
                            border: '1px solid red',
                            borderRadius: '5px',
                            padding: '5px 10px',
                            textTransform: 'uppercase',
                            '&:hover': {
                            backgroundColor: 'darkred',
                            },
                        }}
                        >
                        <Typography variant='h6' fontFamily="'Roboto', sans-serif"
                            size={{sm:'small',md:'large',lg:'large'}}
                        >
                            Contact Us
                        </Typography>
                        </Button>
                    </Link>
            </Box>
        </Box>
      </Box>
    )}
    </>
  )
}

export default MobileAppHeader