import { Typography ,Box,Paper, TextField, Button} from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import blog1bg from '../../../assert/images/blogdetailbg/blog1bg.jpg'
import Hoverrating from '../Hoverrating'

const containerStyle = {
    backgroundImage: ` url(${blog1bg})`, // Replace with your image URL
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '20px', // Adjust padding as needed
    color: 'white', // Text color
    marginTop:"2rem"
  };


const CustomDevSection = () => {
  return (
 <>

<Container>
 <Box>
    <Container sx={containerStyle}>

   

        <Typography gutterBottom color="red" variant="h2">The Importance of Custom Development
for Your Business.</Typography>
<Typography gutterBottom  color="grey"  variant="body2">April 15,2023</Typography>

<Typography sx={{my:2}} gutterBottom variant="h5">In today’s fast-paced digital world, having a strong online presence is essential for businesses of all sizes. Whether you’re a startup or an established enterprise, investing in custom development can help you stand out from the competition and achieve your business goals.
At DreamViewer Infotech, we specialize in web, software, and game development that is tailored to the unique needs of our clients. We believe that custom development is the key to success in the digital landscape, and here’s why:</Typography>

<Typography gutterBottom variant="h5">At DreamViewer Infotech, we specialize in web, software, and game development that is tailored to the unique needs of our clients. We believe that custom development is the key to success in the digital landscape, and here’s why:</Typography>

<Typography gutterBottom  sx={{my:2.5 ,color:"red"}}variant="h3">1-Unique solutions for your business</Typography>



<Typography gutterBottom variant="h5">Custom development allows us to create solutions that are unique to your business needs. Rather than relying on pre-packaged software or off-the-shelf solutions, we can build custom applications and websites that are specifically designed for your business.</Typography>

<Typography gutterBottom variant="h3"sx={{my:2.5 ,color:"red"}}>2-Better user experience</Typography>


<Typography gutterBottom variant="h5">A custom-developed application or website will be designed with your users in mind, providing a better user experience that can help increase engagement and conversions. By understanding your users’ needs and behaviors, we can create a seamless and intuitive experience that will keep them coming back</Typography>



<Typography gutterBottom variant="h3"sx={{my:2.5 ,color:"red"}}>3-Improved scalability and flexibility</Typography>

<Typography gutterBottom variant="h5">Custom development allows for greater scalability and flexibility than off-the-shelf solutions. As your business grows and evolves, your custom applications and websites can be easily adapted to meet your changing needs.

At DreamViewer Infotech, we have years of experience in custom development for a wide range of industries. Our team of experts uses the latest technologies and best practices to deliver high-quality solutions that are both effective and cost-efficient.</Typography>


<Typography gutterBottom variant="h5">Whether you need a custom website, software application, or game development, we’ve got you covered. Contact us today to learn more about our services and how we can help take your business to the next level. www.techdreamview.com For more information on the latest trends in web, software, and game development, visit our partner site Techdreamview.</Typography>


 
    </Container>

 </Box>

    <Container sx={containerStyle}>
    <Typography gutterBottom color="black" variant="h5">Words given to this Blog by</Typography>
    <Typography sx={{marginBottom:3}} color="pink" gutterBottom variant="h4"> --Devesh Goswami</Typography>

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

export default CustomDevSection