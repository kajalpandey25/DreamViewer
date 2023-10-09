import { Box,Divider,Grid,Typography } from '@mui/material'
import React from 'react'

import bgImage2 from '../../../assert/images/portfolio_bg.jpg'
import { Container } from '@mui/system';
import image3 from '../../../assert/images/aboutCorner.jpg'
import style from './portDetailHeaderStyle.module.css'


const headerStyle = {
    backgroundImage: `url(${bgImage2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    paddingTop:6,
    height:'70vh',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  };


const PortDetailHeader = () => {
  return (
<>




<Box sx={headerStyle} >
  <Container sx={{
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  }}>

    <Grid item xs={12} md={6} lg={6}
    sx={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
    }}
    >
        <Typography  color="red"  fontSize={{
        lg: 75,
        md: 68,
        sm: 60,
        xs: 55
        }}
        sx={{textAlign:'center',
        fontFamily:"'Candara',sans-serif",
        lineHeight:'1.2'
        }}
      > Our Rich Portfolio
        </Typography>
        {/* <Divider sx={{width:'13%' ,borderBottom:".3rem solid #66FCF1",borderRadius:'5px',marginBottom:3}}/> */}
        <Typography component='div'
        fontSize={{
          lg: 31,
          md: 31,
          sm: 30,
          xs: 28
          }}
          sx={{textAlign:'center',
            fontFamily:"'Candara',sans-serif",
            mt:{xs:4,sm:4,md:2,lg:2}
          }}
        >
        Have a look at our portfolio.We are proud of what we do .
        </Typography>

    </Grid>

    {/* <Grid item xs={12} md={6} lg={6}  sx={{display:'flex',justifyContent:{xs:'center', md:'end'}} } >

    <Typography className={style.imageContainer} sx={{maxWidth:{md:"360px"}, 
  }}
  >

  <img src={image3}  className={style.image}/>
  </Typography>

    </Grid> */}
  </Container>
</Box>


</> 

)
}

export default PortDetailHeader