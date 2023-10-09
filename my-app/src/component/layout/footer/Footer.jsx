import React from 'react'
import {  Typography, Box,List,ListItem, Divider } from '@mui/material';


import {  NavLink } from 'react-router-dom';
import {pages} from '../../navBar/navOption'
import { Container } from '@mui/system';
import footerbg from '../../../assert/images/footer-background.jpg'
import styles from '../../getStart/SocialMedia.module.css';
import { Email, KeyboardArrowRight, LocationOn, Phone } from '@mui/icons-material';
import footer_bg from '../../../assert/images/footer_bg1.jpg'

const ourServices=[
  {
    title:"UI/UX",
    link:"/uiux"
  },
  {
    title:"Web Development",
    link:"/WebDevelopement"
  },
  {
    title:"App Development",
    link:"/mobileApp"
  },
  {
    title:"ERP Software",
    link:"/erpSoftware"
  },
  {
    title:"Game Development",
    link:"/gaming"
  },
  {
    title:"Blockchain",
    link:"/blockchain"
  },
  {
    title:" AI/ML Chatbots",
    link:"/chatbot"
  },
]

const Footer = () => {
  return (
    <>
    <Box 
      sx={{
        backgroundImage: `url(${footer_bg})`,
        backgroundSize: 'cover',
        // backgroundAttachment: 'fixed', 
        width:'100%',
        height:'100%',
        // padding: '5rem 9rem',
        // color: '#f4f1f1',
        // textAlign: 'center',
        
        // marginTop:8,
        mx:0, 
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        paddingX:{xs:1, sm:1, md:4, lg:4},
        paddingTop:{xs:2, sm:2, md:4, lg:4},
      }}
    >
      <Container sx={{py:0}} maxWidth='xl'> 
        <Box
        sx={{
          display:"flex",
          justifyContent:"center",
          justifyContent:"space-between",
          flexDirection:{xs:"column",lg:"row"}
        }}  
      >       
        {/* contact box */}
          <Box
            sx={{marginTop:3, 
                fontFamily:"'Open Sans', sans-serif",
            }}
          >
            <Typography variant="h2" 
            fontSize={{sm:'16px',md:'30px'}} 
            sx={{
              textAlign:"center",color:"red",
              fontFamily:"'Arial', sans-serif",
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
            }} 
            >
              Contact us 
            </Typography>
            <Box sx={{textAlign:"left",
                mt:1,
                ml:{xs:4,sm:1, md:2,lg:2},
            }}>
              <Typography variant="body2"
              fontFamily="'Open Sans', sans-serif"
              >
                <LocationOn sx={{mr:1, fontSize:'20px'}}/>
                 H-150, Sector 63, Delhi,
              </Typography>
            <Typography variant="body2" sx={{mt:0.5}}
              fontFamily="'Open Sans', sans-serif"
            >
              Noida, Uttar Pradesh - 201301 India
            </Typography>
            <Typography  variant="body2" sx={{mt:1,
            display:'flex',
            alignItems:'center'
            }}
              fontFamily="'Open Sans', sans-serif"
            >
              <Phone sx={{mr:1, fontSize:'20px'}}/> +918860464098
            </Typography>
            <Typography variant="body2" sx={{my:0.5}}
              fontFamily="'Open Sans', sans-serif"
            >
              +919599484325
            </Typography>
            <Typography variant="body2" sx={{
              display:'flex',
              flexWrap:'wrap',
              alignItems:'center',
              marginTop:{sm:2,md:2},
              }}
              fontFamily="'Open Sans', sans-serif"
            >
              <Email sx={{mr:1, fontSize:'20px'}}/> infotechdreamviewer@gmail.com
            </Typography>
            </Box>
          </Box>
        
          {/* Quick Links */}
          <Box sx={{marginTop:3, 
              fontFamily:"'Open Sans', sans-serif"
          }}>
            <Typography 
            fontSize={{sm:'16px',md:'30px'}}
            sx={{textAlign:"center",color:"red",
              fontFamily:"'Arial', sans-serif"
            }}  variant="h2">Quick Links</Typography>
            <List >
                {/* {pages.map((page) => (
                  <ListItem 
                    component={NavLink} to={page.link} exact
                  key={page.title}
                  sx={{

                    color: 'white', display: 'flex', textAlign:"left",
                    alignItems:'center',
                    ml:{xs:2,sm:1, md:2,lg:2},
                    '&:hover': {
                    color: 'red',
                  } 
                  }}
                  >
                    <KeyboardArrowRight sx={{mr:1, fontSize:'20px'}}/> {page.title}
                  </ListItem>
                ))} */}
                {/* Home */}
                <ListItem 
                    component={NavLink} to='/' exact
                  key='home'
                  sx={{

                    color: 'white', display: 'flex', textAlign:"left",
                    alignItems:'center',
                    ml:{xs:2,sm:1, md:2,lg:2},
                    '&:hover': {
                    color: 'red',
                  } 
                  }}
                  >
                    <KeyboardArrowRight sx={{mr:1, fontSize:'20px'}}/> Home
                  </ListItem>
                  {/* about */}
                  <ListItem 
                    component={NavLink} to='/about'
                  key='about'
                  sx={{

                    color: 'white', display: 'flex', textAlign:"left",
                    alignItems:'center',
                    ml:{xs:2,sm:1, md:2,lg:2},
                    '&:hover': {
                    color: 'red',
                  } 
                  }}
                  >
                    <KeyboardArrowRight sx={{mr:1, fontSize:'20px'}}/> About
                  </ListItem>
                  {/* Services */}
                  <ListItem 
                    // component={NavLink} to='/services' exact
                  key='services'
                  sx={{

                    color: 'white', display: 'flex', textAlign:"left",
                    alignItems:'center',
                    ml:{xs:2,sm:1, md:2,lg:2},
                    '&:hover': {
                    color: 'red',
                  } 
                  }}
                  >
                    <KeyboardArrowRight sx={{mr:1, fontSize:'20px'}}/>
                    <a href="/#services" style={{
                      textDecoration:'none', color:'inherit'
                    }}> Services </a>
                  </ListItem>
                  {/* blog */}
                  <ListItem 
                    component={NavLink} to='/blog' exact
                  key='blog'
                  sx={{

                    color: 'white', display: 'flex', textAlign:"left",
                    alignItems:'center',
                    ml:{xs:2,sm:1, md:2,lg:2},
                    '&:hover': {
                    color: 'red',
                  } 
                  }}
                  >
                    <KeyboardArrowRight sx={{mr:1, fontSize:'20px'}}/> Blog
                  </ListItem>
                  {/* portfolio */}
                  <ListItem 
                    component={NavLink} to='/portfolio' exact
                  key='portfolio'
                  sx={{

                    color: 'white', display: 'flex', textAlign:"left",
                    alignItems:'center',
                    ml:{xs:2,sm:1, md:2,lg:2},
                    '&:hover': {
                    color: 'red',
                  } 
                  }}
                  >
                    <KeyboardArrowRight sx={{mr:1, fontSize:'20px'}}/> Portfolio
                  </ListItem>
                  {/* Testimonials */}
                  <ListItem 
                    // component={NavLink}
                  key='testimonials'
                  sx={{

                    color: 'white', display: 'flex', textAlign:"left",
                    alignItems:'center',
                    ml:{xs:2,sm:1, md:2,lg:2},
                    '&:hover': {
                    color: 'red',
                  } 
                  }}
                  >
                    <KeyboardArrowRight sx={{mr:1, fontSize:'20px'}}/> 
                    <a href="/#testimonials" style={{
                      textDecoration:'none', color:'inherit'
                    }}
                    >Testimonials</a>
                  </ListItem>

                </List>
          
          </Box>

          {/* Our Services */}
          <Box sx={{marginTop:3,
              fontFamily:"'Open Sans', sans-serif"
          }}>
            <Typography 
            fontSize={{sm:'16px',md:'30px'}}
            sx={{textAlign:"center",color:"red",
              fontFamily:"'Arial', sans-serif"
            }} variant="h2">Our Services</Typography>
            <List >
                {ourServices.map((service) => (
                  <ListItem 
                    component={NavLink} to={service.link}
                    key={service.title}
                    sx={{
                      color: 'white', display: 'flex', textAlign:"left",
                      alignItems:'center',
                      ml:{xs:2,sm:1, md:2,lg:2},
                      '&:hover': {
                      color: 'red',
                      } 
                      }}
                    >

                  <KeyboardArrowRight sx={{mr:1, fontSize:'20px'}}/> {service.title}
                  </ListItem>
                    ))}
                </List>

          </Box>
        </Box>
        <Divider />
     
   {/* Footer Bottom */}
      <Box
        sx={{display:"flex",justifyContent:"center",padding:".7rem",}}
      >
        <Typography  color="white"
        fontFamily="'Candara',sans-serif"
        >
          &copy; 2022 <b>DreamViewer</b> <span style={{marginRight:'15px'}}> </span>All rights reserved
          </Typography>
      </Box>

      </Container>
      </Box>
    </>
  )
}

export default Footer