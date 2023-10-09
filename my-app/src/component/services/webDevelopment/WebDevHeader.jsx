import { Box,Button,Link,Typography } from '@mui/material'
import React from 'react'
import bannerImageTop from '../../../assert/images/webdev_img2.jpg'
import bannerImageBottom from '../../../assert/images/webdev_img.jpg'

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

const WebDevHeader = () => {
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
          Revolutionize your online presence with cutting-edge web development strategies!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { sm: '12px', md: '20px' },
            whiteSpace: 'normal',
            fontFamily: "'Candara', sans-serif",
          }}
        >
        The importance of having a strong online presence through web development is necessary.The businesses and individuals need to stay up-to-date with the latest strategies in order to attract and engage users. By implementing cutting-edge techniques, businesses can improve user experience and increase conversions. If you want to make an impact in the online world, it's time to revolutionize your approach to web development.        
    </Typography>
      </Box>
    ):
    (
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
            Revolutionize your online presence with cutting-edge web development strategies!          
        </Typography>
            <Typography variant="body1" 
            sx={{
                fontSize:{sm:'12px',md:'20px'},
                whiteSpace:'normal'
            }}
            fontFamily="'Candara', sans-serif"
          >
            The importance of having a strong online presence through web development is necessary.The businesses and individuals need to stay up-to-date with the latest strategies in order to attract and engage users. By implementing cutting-edge techniques, businesses can improve user experience and increase conversions. If you want to make an impact in the online world, it's time to revolutionize your approach to web development.            
        </Typography>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
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
            marginTop:'1rem'
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
          Shop Online with Ease: Discover Our Extensive Range of Products on Our Ecommerce Website.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { sm: '12px', md: '20px' },
            whiteSpace: 'normal',
            fontFamily: "'Candara', sans-serif",
          }}
        >
        An ecommerce website is an online platform that allows businesses to sell products or services to customers over the internet. These websites provide an easy and convenient way for consumers to shop and make purchases without having to visit a physical store. Typically, ecommerce websites include features such as a product catalog, shopping cart, payment gateway, and order management system. They also often include marketing and promotional tools, such as email marketing and social media integration, to help businesses reach and engage with potential customers. In addition, many ecommerce websites offer customer support features, such as a FAQ section, live chat, and customer reviews, to help customers make informed purchasing decisions and resolve any issues they may encounter. Overall, ecommerce websites have become an essential tool for businesses of all sizes to reach a global customer base and increase their sales revenue.
        </Typography>
        <Typography variant="body1" 
                sx={{
                    fontSize:{sm:'12px',md:'18px'},
                    whiteSpace:'normal', 
                    mt:2
                }}
                fontFamily="'Candara', sans-serif"
            >
                To know more about ecommerce websites and web development.
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
            sx={{
                fontSize:{sm:'28px',md:'40px'},
                whiteSpace:'normal'
            }}
                fontFamily="'Verdana', sans-serif"
                marginBottom={1}
            >
                Shop Online with Ease: Discover Our Extensive Range of Products on Our Ecommerce Website.            
        </Typography>
            <Typography variant="body1" 
                sx={{
                    fontSize:{sm:'8px',md:'16px'},
                    whiteSpace:'normal', 
                    mt:2
                }}
                fontFamily="'Candara', sans-serif"
            >
                An ecommerce website is an online platform that allows businesses to sell products or services to customers over the internet. These websites provide an easy and convenient way for consumers to shop and make purchases without having to visit a physical store.
                Typically, ecommerce websites include features such as a product catalog, shopping cart, payment gateway, and order management system. They also often include marketing and promotional tools, such as email marketing and social media integration, to help businesses reach and engage with potential customers.
                In addition, many ecommerce websites offer customer support features, such as a FAQ section, live chat, and customer reviews, to help customers make informed purchasing decisions and resolve any issues they may encounter. Overall, ecommerce websites have become an essential tool for businesses of all sizes to reach a global customer base and increase their sales revenue.     
            </Typography>
            <Typography variant="body1" 
                sx={{
                    fontSize:{sm:'12px',md:'18px'},
                    whiteSpace:'normal', 
                    mt:2
                }}
                fontFamily="'Candara', sans-serif"
            >
                To know more about ecommerce websites and web development.
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
     {/* container 3*/}
     <Box sx={{...bannerStyle2,
        display:"flex", 
        flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'}
      }}
        marginTop='10px'
      >
        
        <Box sx={{ flex: 1 }}>
            <Typography variant="body1" 
                sx={{
                    fontSize:{sm:'8px',md:'16px'},
                    whiteSpace:'normal', 
                    mt:2
                }}
                fontFamily="'Candara', sans-serif"
            >
                Our company is proud to offer top-notch development services to clients in various industries. Our team of experienced developers is dedicated to providing high-quality solutions that meet our clients' specific needs and requirements. Whether it's developing a custom web application, creating a mobile app, or building an e-commerce platform, we have the expertise and resources to deliver exceptional results. We use the latest technologies and best practices to ensure that our clients' projects are delivered on time and within budget. Our goal is to help our clients achieve their business objectives and succeed in the competitive digital landscape.    
            </Typography>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start',
          padding:'1rem'
          // mr:{xs:'auto', sm:'auto',md:'4',lg:'4'}
         }}>
          <img src={bannerImageBottom} alt="Banner" 
            style={{ height: '100%',width:'100%', 
            borderRadius:'1rem', 
            // padding:'1rem' 
          }} />
        </Box>
      </Box>
    </>
  )
}

export default WebDevHeader;