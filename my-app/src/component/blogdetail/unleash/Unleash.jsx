import { Typography ,Box,Paper, TextField, Button} from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import blog3bg from '../../../assert/images/blogdetailbg/blog3bg.jpg'
import Hoverrating from '../Hoverrating'

const containerStyle = {
    backgroundImage: ` url(${blog3bg})`, // Replace with your image URL
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '20px', // Adjust padding as needed
    color: 'white', // Text color
    marginTop:"2rem"
  };


const Unleash = () => {
  return (
 <>

<Container>
 <Box>
    <Container sx={containerStyle}>

   

        <Typography gutterBottom color="red" variant="h2">Unleash Your Online Presence with Our Top Notch Web Services - DreamViewer Made Easy!
for Your Business.</Typography>
<Typography gutterBottom  color="grey"  variant="body2">March 28,2023</Typography>

<Typography sx={{my:2}} gutterBottom variant="h5">Are you looking for a reliable and experienced company to handle your website, software, and game development needs? Look no further than DreamViewer Infotech! At DreamViewer Infotech, we specialize in providing top-notch web development services that cater to the needs of individuals and businesses alike. We have a team of skilled developers who are experts in website, software, and game development. We use cutting-edge technologies and the latest industry standards to ensure that your project is completed on time and to your specifications.</Typography>



<Typography gutterBottom  sx={{my:2.5 ,color:"red"}}variant="h3">Website Development</Typography>



<Typography gutterBottom variant="h5">We understand the importance of having a professional and user-friendly website in today's digital age. That's why we provide comprehensive website development services that cover everything from design to deployment. Our team of developers can create custom websites that are tailored to your specific needs, whether you need a simple brochure website or a complex e-commerce platform.</Typography>

<Typography gutterBottom variant="h3"sx={{my:2.5 ,color:"red"}}>Software Development</Typography>


<Typography gutterBottom variant="h5">Whether you need a standalone application or software that integrates with your existing systems, our team of developers has the expertise to deliver the solution you need. We use the latest software development methodologies to ensure that your project is completed on time and within budget.</Typography>



<Typography gutterBottom variant="h3"sx={{my:2.5 ,color:"red"}}>Game Development</Typography>

<Typography gutterBottom variant="h5">
If you're looking to create a game that will engage your audience and keep them coming back for more, our game development services are the perfect fit. Our developers have extensive experience in creating games for a wide range of platforms, including desktop, mobile, and web. Image.
</Typography>


<Typography gutterBottom variant="h5">In addition to our core services, we also provide Blockchain Consulting. We are committed to providing our clients with the highest level of service and support, and we pride ourselves on our ability to deliver exceptional results.</Typography>

<Typography gutterBottom variant="h3"sx={{my:2.5 ,color:"red"}}>Conclusion</Typography>

<Typography gutterBottom variant="h5">
So, if you're looking for a reliable and experienced partner for your website, software, or game development needs, look no further than DreamViewer Infotech. Contact us today to learn more about our services and how we can help you achieve your digital goals! #tumblr#web development#software development#game development.
</Typography>


 
    </Container>

 </Box>

    <Container sx={containerStyle}>
    <Typography gutterBottom color="black" variant="h5">Words given to this Blog by</Typography>
    <Typography sx={{marginBottom:3}} color="pink" gutterBottom variant="h4"> --Devesh </Typography>

    <Typography  variant="h4" color="neo">  Share Your Valuable Feedback </Typography>
    <TextField sx={{my:2.5}}
          id="outlined-multiline-static"
          label="Yours Words"
         
        
          defaultValue="Default Value"
        />
    <Hoverrating/>
    <Box>
    <Button color="error" sx={{m:3}} variant="contained">Submit</Button>
    </Box>
    </Container>
 </Container>

 
 
 </>
  )
}

export default Unleash
