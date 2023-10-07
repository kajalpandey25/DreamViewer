import { Grid,Typography,Box ,Divider} from '@mui/material'
import React from 'react'
import style from './aboutBar.module.css'
import { Container } from '@mui/system'
import aboutSection from '../../../assert/images/aboutSection.webp'
import aboutCarrier from '../../../assert/images/aboutCareier.jpg'
const AboutMiddleSection = () => {
  return (



   <>
      {/* Our Story */}
      <Grid container spacing={3} 
        sx={{marginTop:"5rem",display:"flex",
        justifyContent:"space-between",p:2,
        // backgroundColor:'rgb(21, 22, 26)',
      }}>
        {/* images */}
        <Grid item sm={12} md={6} lg={6} sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
        }}>
        <div className={style.frame}
          style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
          }}
        >
          <img src={aboutSection} alt="Image" />
        </div>
        </Grid>
        {/* content */}
        <Grid item sm={12} md={6} lg={6}
        >
          <Typography color="red"  fontSize={{
            lg: 54,
            md: 54,
            sm: 42,
            xs: 36
          }}
          fontFamily="'Verdana',sans-serif"
          sx={{display:'flex',justifyContent:"start"}}
          >
            Our Story
          </Typography>
          <Box sx={{display:'flex',justifyContent:"start"}}>  
            <Divider sx={{width:'20%' ,borderBottom:".3rem solid #66FCF1",
            borderRadius:'5px',marginBottom:3}}
            />
          </Box>
          <Typography variant="h3" textAlign="left" gutterBottom
            fontFamily="'Verdana',sans-serif"
          >
          We are Creative Tech Enthusiast working since 2021.
          </Typography>
          <Typography variant="h6" sx={{my:2}} 
          fontFamily="'Verdana',sans-serif"
          >
            Our business is helping you grow your business. We offer Best Web & Applications Solutions, Project Management, Software Update, Google Cloud, SEO optmization, Social Media Services...
          </Typography>
          <Typography variant="h6" gutterBottom sx={{my:2}}
            fontFamily="'Verdana',sans-serif"
          >
          DreamViewer is leading technology providing solutions according to uour business needs since 2021. We are here to provide touch notch solution for your website or web application that helps you to make your website look attractive designs & efficient in handling by creating useful plugins thats you need. We are a dynamic team of professionals dedicated to providing innovative solutions in the field of technology. Our company was founded in 2021, and since then, we have been working tirelessly to deliver exceptional services to our clients.

          </Typography>
          <Typography variant="h6" gutterBottom sx={{my:2}}
            fontFamily="'Verdana',sans-serif"
          >
          Our team consists of highly skilled individuals with expertise in various areas of technology, including software development, web design, blockchain development, gaming and more. We take pride in our ability to stay up-to-date with the latest industry trends and advancements, allowing us to offer cutting-edge solutions that exceed our clients' expectations.
          </Typography>
          <Typography variant="h6" gutterBottom sx={{my:2}}
            fontFamily="'Verdana',sans-serif"
          >
          Our commitment to quality and customer satisfaction is evident in everything we do. We believe that every project is unique and requires a personalized approach. That's why we work closely with our clients to understand their needs and tailor our solutions to meet their specific requirements.
          </Typography>
          <Typography variant="h6" gutterBottom sx={{my:2}}
            fontFamily="'Verdana',sans-serif"
          >
          At our core, we value creativity, innovation, and collaboration. We believe that by working together and leveraging our diverse expertise, we can achieve extraordinary results. We look forward to working with you and helping you take your business to new heights.
          </Typography>
          <Typography variant="h6" sx={{my:2}} gutterBottom 
            fontFamily="'Verdana',sans-serif"
          >
          We are here to serve you next level quality that currently in trend to match you with your expertise. 
          </Typography>
        </Grid>
      </Grid>
      {/* Future Scope */}
      <Grid container spacing={3} 
        sx={{ 
          backgroundColor:'rgb(21, 22, 26)',
          marginTop:"5rem",marginBottom:"5rem", display:"flex",justifyContent:"space-around",p:2, pl:4,
        }}
      >
        <Grid item sm={12} md={6} lg={6}
        sx={{textAlign:'start'}}
        >
          <Typography color="red"  fontSize={{
              lg: 54,
              md: 54,
              sm: 42,
              xs: 36
              }}
            fontFamily="'Verdana',sans-serif"
            sx={{display:'flex',justifyContent:"start"}}
        >
          Our Future Goal
          </Typography>
          <Box sx={{display:'flex',justifyContent:"start"}}>  
            <Divider sx={{width:'20%' ,
              borderBottom:".3rem solid #66FCF1",
              borderRadius:'5px',
              marginBottom:3
            }}/>
          </Box>
          <Typography variant="h3" textAlign="start" gutterBottom sx={{my:2}}
          fontFamily="'Verdana',sans-serif"
          >
            We want to lead in Innovation & Technology
          </Typography> 
          <Typography variant="h6" gutterBottom sx={{my:2}} 
          fontFamily="'Verdana',sans-serif"
          >
            We work on UI/UX and functionality as well so that a plugins comes with proper stucture & stunning looks which suits to your web app & website.
          </Typography>
          <Typography variant="h6" 
            fontFamily="'Verdana',sans-serif"
          >
              Our business is helping you grow your business. We offer Best Web & Applications Solutions, Project Management, Software Update, Google Cloud, SEO optmization, Social Media Services...
          </Typography>
          <Typography variant="h6" gutterBottom sx={{my:2}}
          fontFamily="'Verdana',sans-serif"
          >
          We also work on blockchain technologies and gaming development with proper planning and functionalities.
          </Typography>
          <Typography variant="h6" gutterBottom sx={{my:2}}
          fontFamily="'Verdana',sans-serif"
          >
          We try our best level to give our clients the utmost satisfaction by providing our top notch services to them.
          </Typography>
          <Typography variant="h6" gutterBottom sx={{my:2}}
          fontFamily="'Verdana',sans-serif"
          >
          Here you can also share the content you create, if our technical team likes it, then we will also share it on our blog.
          </Typography>
          <Typography variant="h6" gutterBottom sx={{my:2}}
          fontFamily="'Verdana',sans-serif"
          >
          In the end, I would say keep visiting our website and enjoy the quality content.
          </Typography>
        </Grid>
        <Grid item sm={12} md={6} lg={6} 
          sx={{display:"flex",
          justifyContent:"center",
          alignItems:"center"}}
        >
            <div className={style.frame2}>
              <img src={aboutCarrier} alt="Image" />
            </div>
        </Grid>
      </Grid>
   </>
  )
}

export default AboutMiddleSection