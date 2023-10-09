// SocialMediaSection.js

import React from 'react';
import { Button, Typography, Box ,IconButton} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from './SocialMedia.module.css';
import { Link } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';

const socialLinks = [
    { icon: <FacebookIcon />, link: 'https://www.facebook.com/' },
    { icon: <TwitterIcon />, link: 'https://twitter.com/' },
    { icon: <InstagramIcon />, link: 'https://www.instagram.com/' },
    { icon: <LinkedInIcon />, link: 'https://www.linkedin.com/' },
];


function SocialMediaSection() {
  return (
    <Box className={styles.socialMediaSection}
    sx={{
      paddingX:{xs:'1rem',sm:'1rem',md:'4rem',lg:'4rem'},
      paddingY:{xs:'2rem',sm:'2rem',md:'4rem',lg:'4rem'},
      width:'100%',
      height:'100%'
    }}
    >
      <Box className={styles.socialIcons}>
        {socialLinks.map((item, index) => (
        <IconButton
          sx={{
            color:"white",border:"1px solid black",
            '&:hover':{
              background:'red',
              border:'1px solid white'
            }
            }}
          key={index}
          className={item.socialIcon}
          component={Link}
          to={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </IconButton>
      ))}
      </Box>
      <Typography color='red' gutterBottom variant="h2"
        sx={{
          fontFamily: "'Candara', sans-serif",
          fontWeight:500
        }}
      >
        Have any projects in mind?
      </Typography>
      <Typography  gutterBottom variant="h4" 
      sx={{
        marginBottom:5,
        fontFamily: "'Candara', sans-serif",
      }}>
        Want to start something great?
      </Typography>

      {/* <Link to='/contact'>
        <Button variant='outlined ' size="large"  sx={{ 
          color: "white " ,border:"1px solid red", 
          fontFamily: "'Candara', sans-serif",
          }}>
          <h3>Contact Us <ArrowForward sx={{ fontSize: 16, pt:'3px' }}/></h3>
        </Button>
        </Link>  */}
        <Link to='/contact'>
                      <Button
                        variant='contained'
                        sx={{
                          size:{sm:'small',md:'medium',md:'medium'},
                          color: 'white',
                          bgcolor: 'transparent',
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
                          size={{xs:'12px',sm:'small',md:'medium',lg:'medium'}}
                        >
                          Contact Us <ArrowForward sx={{ fontSize: 16, pt:'3px' }}/>
                        </Typography>
                      </Button>
        </Link> 

        
    </Box>
  );
}

export default SocialMediaSection;