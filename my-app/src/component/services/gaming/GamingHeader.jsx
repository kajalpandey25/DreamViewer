import { Box,Button,Link,Typography } from '@mui/material'
import React from 'react'
import bannerImageTop from '../../../assert/images/gaming_img1.jpg'
import bannerImageBottom from '../../../assert/images/gaming_img2.jpg'

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

const GamingHeader = () => {
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
          Experience Immersive Gaming with Our Wide Range of Services
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { sm: '12px', md: '20px' },
            whiteSpace: 'normal',
            fontFamily: "'Candara', sans-serif",
          }}
        >
          Our company provides a wide range of gaming services designed to give gamers the ultimate gaming experience. Our services include game development, game design, game testing, game optimization, and game hosting. We are committed to providing our clients with high-quality, engaging games that cater to their unique preferences and interests. With our experienced team of developers and designers, we are constantly pushing the boundaries of what's possible in the world of gaming. Whether you're a casual or hardcore gamer, our services are designed to enhance your gaming experience and keep you coming back for more.
        </Typography>
      </Box>
    ):
    (
      <Box sx={bannerStyle1} marginTop='110px'
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
            Experience Immersive Gaming with Our Wide Range of Services
        </Typography>
            <Typography variant="body1" 
            sx={{
                fontSize:{sm:'12px',md:'20px'},
                whiteSpace:'normal'
            }}
            fontFamily="'Candara', sans-serif"
          >
            Our company provides a wide range of gaming services designed to give gamers the ultimate gaming experience. Our services include game development, game design, game testing, game optimization, and game hosting. We are committed to providing our clients with high-quality, engaging games that cater to their unique preferences and interests. With our experienced team of developers and designers, we are constantly pushing the boundaries of what's possible in the world of gaming. Whether you're a casual or hardcore gamer, our services are designed to enhance your gaming experience and keep you coming back for more.
          </Typography>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end',ml:2 }}>
          <img src={bannerImageTop} alt="Banner" 
          style={{ maxWidth: '100%', height: '75vh', borderRadius:'1rem' }} />
        </Box>
      </Box>
    )}
    {/* container 2 */}
    {isSmallScreen ? (
      <Box
        marginTop='70px'
        sx={{
          padding:'2rem'
        }}
        flexDirection="column"
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
          Our Game Application-Bricks
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { sm: '12px', md: '20px' },
            whiteSpace: 'normal',
            fontFamily: "'Candara', sans-serif",
          }}
        >
          Bricks is a gaming app that is designed for Lego enthusiasts of all ages. With its intuitive interface and engaging gameplay, Bricks offers a unique and immersive experience that allows players to create, design, and share their own Lego models. The app includes a range of features such as "Scan My Bricks," which enables users to scan their existing Lego sets and import them into the app, "My MOCS" which allows users to showcase their creations to the community, and "Purchase New Bricks," which enables users to browse and buy new Lego sets directly from the app. With Bricks, users can unleash their creativity, connect with other Lego enthusiasts, and explore endless possibilities of the Lego universe.
        </Typography>
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
    ):
    (
      <Box sx={bannerStyle2} marginTop={{sm:'60px', md:'80px',lg:'80px'}}
      backgroundColor='rgb(21, 22, 26)'
      >
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start', mr:4 }}>
          <img src={bannerImageBottom} alt="Banner" 
          style={{ height: '85vh',width:'100%', borderRadius:'1rem' }} />
        </Box>
        <Box sx={{ flex: 1 }}>
            <Typography variant="h1" color="red"
            textAlign='left'
            sx={{
                fontSize:{sm:'28px',md:'40px'},
                whiteSpace:'nowrap'
            }}
                fontFamily="'Verdana', sans-serif"
                marginBottom={1}
            >
              Our Game Application-Bricks        
            </Typography>
            <Typography variant="body1" 
                sx={{
                    fontSize:{sm:'12px',md:'20px'},
                    whiteSpace:'normal', 
                    mt:2
                }}
                fontFamily="'Candara', sans-serif"
            >
               Bricks is a gaming app that is designed for Lego enthusiasts of all ages. With its intuitive interface and engaging gameplay, Bricks offers a unique and immersive experience that allows players to create, design, and share their own Lego models. The app includes a range of features such as "Scan My Bricks," which enables users to scan their existing Lego sets and import them into the app, "My MOCS" which allows users to showcase their creations to the community, and "Purchase New Bricks," which enables users to browse and buy new Lego sets directly from the app. With Bricks, users can unleash their creativity, connect with other Lego enthusiasts, and explore endless possibilities of the Lego universe.
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

export default GamingHeader;