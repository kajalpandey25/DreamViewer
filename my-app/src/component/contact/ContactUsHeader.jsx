import { Box,Divider,Grid,Typography } from '@mui/material'
import React from 'react'

import bgImage2 from '../../assert/images/contact_bg.jpg'
import { Container } from '@mui/system';
import image3 from '../../assert/images/jobs_hero1.jpg'
import style from './contact.module.css'


const headerStyle = {
    marginTop:{xs:'60px', sm:'60px',md:'80px',lg:'90x'},
    backgroundImage: `url(${bgImage2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    fontFamily:"Prompt",
    color:"rgb(255, 255, 255)",
    height:{xs:'92vh', sm:'92vh',md:'calc(100vh - 80px)',lg:'calc(100vh - 80px)'},
};


const ContactUsHeader = () => {
  return (
    <>  
        <Box sx={headerStyle}>
        <Box
            sx={{height:'100%',
            width:'100%',
            paddingLeft:{sm:1, md:4, lg:6},
            paddingRight:2
        }}>
            <Grid container
                sx={{      
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'end',
                    height: '100%',
                    textAlign: {xs:'center', sm:'center', md:'start', lg:'start'},
                }}
            >
                <Grid item
                // sx={{marginTop:{xs:'60px',sm:'60px', md:'100px', lg:'90px'}}}
                >
                    <Typography  color="red"  fontSize={{
                        lg: 54,
                        md: 54,
                        sm: 36,
                        xs: 32
                    }}
                    fontFamily="'Candara', sans-serif"
                    >
                        Get a Quote
                    </Typography>
                    <Divider sx={{
                        width:'100px' ,borderBottom:".3rem solid #66FCF1",borderRadius:'5px', marginBottom:3,
                        display:'block', 
                        '@media (max-width: 768px)': {
                            display: 'none',
                        },
                    }}/>
                    <Typography component='div'
                    fontSize={{
                        lg: 36,
                        md: 32,
                        sm: 24,
                        xs: 24
                    }}
                    sx={{lineHeight:1.2}}
                    fontFamily="'Candara', sans-serif"
                    >
                        We are here to serve you best services.                   
                    </Typography>
                    <Typography component='div'
                    fontSize={{
                        lg: 20,
                        md: 18,
                        sm: 16,
                        xs: 12
                    }}
                    sx={{mt:4}}
                    fontFamily="'Candara', sans-serif"
                    >
                        You still have queries?                   
                    </Typography>
                </Grid>
                {/* <Grid item xs={12} md={6} lg={6}  
                    sx={{display:'flex',
                    justifyContent:{xs:'center', md:'end'},
                    width:'100%',
                    height:'100%',
                    position:'relative'
                    }} 
                >
                    <Typography className={style.imageContainer} 
                    sx={{maxWidth:{xs:'350px', sm:"360px",md:'100%'},}} 
                    >
                        <img src={image3}  className={style.image}/>
                    </Typography>
                </Grid> */}
            </Grid>
        </Box>
        </Box> 
    </>
  )
}

export default ContactUsHeader