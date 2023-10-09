import React from 'react'
import { Box,Button,Link,Typography } from '@mui/material'
import MobileCards from './MobileCards';


const mobileCardsData1 = [
    {
      title: 'Expertise and Experience',
      text: 'We have a team reputed experienced developers with expertise in various technologies and platforms. We are able to provide you solutions that meet your specific business needs.',
    },
    {
      title: 'Quality Assurance',
      text: 'We at DreamViewer Infotech provides a robust quality assurance process in place to ensure that the applications delivered are bug-free, secure, and reliable.',
    },
    {
      title: 'Communication and Support',
      text: 'Effective communication is essential when it comes to application development. We provide timely updates and support during and after the development process.',
    },
    {
        title: 'Cost-effectiveness',
        text: 'We provide cost-effective solutions without compromising on the quality of the application.',
      },
      {
        title: 'Customization',
        text: 'Every business has unique requirements, and a good application services provider we provide customized solutions that meet those requirements.',
      },
  ];

  const mobileCardsData2 = [
    {
      title: 'Planning and Research',
      text: "The first step is we understand the client's requirements, target audience, and the purpose of the app. Then we conduct market research and competitor analysis that helps in developing an effective strategy for the app.",
    },
    {
      title: 'Wireframing and Design',
      text: "Once the strategy is in place, the next step is we create a wireframe or prototype of the app's design. This helps us to identify any usability issues and make necessary changes before moving to the development stage.",
    },
    {
      title: 'Development',
      text: 'After the design phase, our development team begins coding the app. This stage involves writing the code, integrating APIs, creating user interfaces, and ensuring the app is optimized for performance and scalability.',
    },
    {
        title: 'Testing',
        text: 'The app is then tested for bugs, functionality, and compatibility with different devices and platforms. The testing phase involves manual testing and automated testing to ensure the app is error-free and ready for launch.',
      },
      {
        title: 'Deployment',
        text: 'After testing, the app is deployed to the relevant app stores, such as the App Store or Google Play Store. This stage involves submitting the app for review, optimizing metadata, and ensuring the app meets all requirements for submission.',
      },
      {
        title:'Maintenance and Support',
        text:'Once the app is live, our development team provides ongoing maintenance and support, such as fixing bugs, updating features, and responding to user feedback.'
      }
  ];


const bannerStyle = {
    // backgroundImage: `url(${bgImage2})`,
   
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    padding: '2rem',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    flex:'1'
  };

const MobileAppMid = () => {
  return (
    <>
    {/* part 1 */}
        <Box sx={bannerStyle} marginTop={{sm:'60px', md:'80px',lg:'80px'}}
      >
        <Box sx={{ flex: 1, }}>
          <Typography variant="h1" color="red"
          sx={{
            fontSize:{xs:'28px', sm:'28px',md:'40px'},
            whiteSpace:'normal',
            textAlign:'center'
          }}
            fontFamily="'Verdana', sans-serif"
            marginBottom={1}
          >
            Why choose us for Application Services?     
            </Typography>
          <Typography variant="body1" 
            sx={{
                fontSize:{sm:'12px',md:'20px'},
                whiteSpace:'normal'
            }}
            fontFamily="'Candara', sans-serif"
          >
            At DreamViewer Infotech,We have a proven track record of delivering high-quality and innovative applications. The following are some reasons why you might choose our company for application services : 
        </Typography>
        </Box>
      </Box>
      <MobileCards cardsData={mobileCardsData1}/>
    {/* part 2 */}
    <Box
      backgroundColor='rgb(21, 22, 26)'
    >
    <Box sx={bannerStyle} marginTop={{sm:'60px', md:'80px',lg:'80px'}}
      >
        <Box sx={{ flex: 1, }}>
          <Typography variant="h1" color="red"
          sx={{
            fontSize:{xs:'28px', sm:'28px',md:'40px'},
            whiteSpace:'normal',
            textAlign:'center'
          }}
            fontFamily="'Verdana', sans-serif"
            marginBottom={1}
          >
                Process followed for App Development Services
            </Typography>
          <Typography variant="body1" 
            sx={{
                fontSize:{sm:'12px',md:'20px'},
                whiteSpace:'normal',
                margin:'1rem'
            }}
            fontFamily="'Candara', sans-serif"
          >
            Steps are as follows: 
        </Typography>
        </Box>
      </Box>
      <MobileCards cardsData={mobileCardsData2}/>
    </Box>
    </>
  )
}

export default MobileAppMid