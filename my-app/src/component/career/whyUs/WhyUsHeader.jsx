import { Box,Divider,Grid,Typography } from '@mui/material'
import React from 'react'

import bgImage2 from '../../../assert/images/jobs_bg.jpg'
import { Container } from '@mui/system';
import image3 from '../../../assert/images/jobs_hero1.jpg'
import style from './whyus.module.css'

const headerStyle = {
    backgroundImage: `url(${bgImage2})`,
    backgroundSize: 'cover',
    height:{xs:'100%',sm:'100%', md:'98vh',lg:'98vh'},
    backgroundPosition: 'center',
    width: '100%',
    fontFamily:"Prompt",
    paddingTop:12,
    color:"rgb(255, 255, 255)",
};


const WhyUsHeader = () => {
  return (
    <>
      <Box sx={headerStyle}>
        <Container sx={{ width:'100%', height:'100%',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6} lg={6}>
              <Typography  color="red"  fontSize={{
                lg: 60,
                md: 60,
                sm: 42,
                xs: 36
                }}
                fontFamily="'Candara', sans-serif"
              >
                Career/ Why To Join Us?
              </Typography>
              <Divider sx={{width:'20%' ,borderBottom:".3rem solid #66FCF1",borderRadius:'5px',marginBottom:3}}/>
              <Typography component='div'
              fontSize={{
                lg: 35,
                md: 31,
                sm: 30,
                xs: 28
              }}
              fontFamily="'Candara', sans-serif"
              >
                Turning Ideas into Reality
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={6}  
              sx={{display:'flex',justifyContent:{xs:'center', md:'end'}} } 
            >
              <Typography className={style.imageContainer} 
                sx={{maxWidth:{xs:"360px",sm:'360px',md:'500px',lg:'500px'}, 
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

export default WhyUsHeader


// import { Box,Divider,Grid,Typography } from '@mui/material'
// import React from 'react'

// import bgImage2 from '../../../assert/images/jobs_bg.jpg'
// import { Container } from '@mui/system';
// import image3 from '../../../assert/images/jobs_hero1.jpg'
// import style from './whyus.module.css'

// const headerStyle = {
//     marginTop:{xs:'60px', sm:'60px',md:'80px',lg:'90x'},
//     backgroundImage: `url(${bgImage2})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     width: '100%',
//     fontFamily:"Prompt",
//     color:"rgb(255, 255, 255)",
//     height:{xs:'calc(100vh - 60px)', sm:'calc(100vh - 60px)',md:'calc(100vh - 90px)'},
// };

// const WhyUsHeader = () => {
//   return (
//     <>  
//       <Box sx={headerStyle}>
//         <Box
//             sx={{height:'100%',
//             width:'100%',
//             paddingLeft:{sm:1, md:4, lg:6},
//             paddingRight:2
//         }}>
//             <Grid container spacing={2}
//             sx={{      
//                     display: 'flex',
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     height: '100%',
//                     textAlign: 'start',
//                 }}
//             >
//                 <Grid item xs={12} md={6} lg={6}
//                 sx={{marginTop:{xs:'100px',sm:'100px', md:'100px', lg:'auto'}}}
//                 >
//                     <Typography  color="red"  fontSize={{
//                         lg: 54,
//                         md: 54,
//                         sm: 36,
//                         xs: 24
//                     }}
//                     fontFamily="'Candara', sans-serif"
//                     >
//                         Career/ Why To Join Us?
//                     </Typography>
//                     <Divider sx={{width:'100px' ,borderBottom:".3rem solid #66FCF1",borderRadius:'5px', marginBottom:3}}/>
//                     <Typography component='div'
//                     fontSize={{
//                         lg: 35,
//                         md: 31,
//                         sm: 30,
//                         xs: 28
//                     }}
//                     xs={{width:'100vw'}}
//                     fontFamily="'Candara', sans-serif"
//                     >
//                         Discover your path to success through our job openings                    
//                     </Typography>
//                 </Grid>
//                 <Grid item xs={12} md={6} lg={6}  
//                     sx={{display:'flex',
//                     justifyContent:{xs:'center', md:'end'},
//                     width:'100%',
//                     height:'100%',
//                     position:'relative'
//                     }} 
//                 >
//                     <Typography className={style.imageContainer} 
//                     sx={{maxWidth:{xs:'350px', sm:"360px",md:'100%'},}} 
//                     >
//                         <img src={image3}  className={style.image}/>
//                     </Typography>
//                 </Grid>
//             </Grid>
//         </Box>
//     </Box> 
//     </>
//   )
// }

// export default WhyUsHeader