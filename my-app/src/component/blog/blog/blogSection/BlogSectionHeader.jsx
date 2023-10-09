import { Box,Divider,Grid,Typography } from '@mui/material'
import React from 'react'

import bgImage2 from '../../../../assert/images/aboutbg4.jpg'
import { Container } from '@mui/system';
import image3 from '../../../../assert/images/aboutCorner.jpg'
import style from './BlogHeaderStyle.module.css'


const headerStyle = {
  
    backgroundImage: `url(${bgImage2})`,
   
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    width: '100%',
  
   
    paddingTop:12,

   
  };


const BlogSectionHeader = () => {
  return (
<>




<Box sx={headerStyle} >
  <Container >

  <Grid container  >

  <Grid item xs={12} md={6} lg={6}>
  <Typography  color="red"  fontSize={{
   lg: 75,
   md: 68,
   sm: 60,
   xs: 55
  }}
  fontFamily="'Candara',sans-serif"
  textAlign='left'
 >Our Latest Blog</Typography>
          <Divider sx={{width:'13%' ,borderBottom:".3rem solid #66FCF1",borderRadius:'5px',marginBottom:3}}/>

          <Typography component='div'
          fontSize={{
            lg: 31,
            md: 31,
            sm: 30,
            xs: 28
           }}
          fontFamily="'Candara',sans-serif"
          textAlign='left'
          >
         Have a look at our portfolio.We are proud of what we do .
      </Typography>

</Grid>

  <Grid item xs={12} md={6} lg={6}  sx={{display:'flex',justifyContent:{xs:'center', md:'end'}} } >

  <Typography className={style.imageContainer} sx={{maxWidth:{md:"360px"}, 
}}
 >

<img src={image3}  className={style.image}/>
</Typography>

</Grid>



</Grid>
  </Container>
        
 
      </Box>


</> 

)
}

export default BlogSectionHeader