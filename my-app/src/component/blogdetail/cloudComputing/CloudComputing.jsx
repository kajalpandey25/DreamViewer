// cloudComputing
import { Typography ,Box,Paper, TextField, Button} from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import blog4bg from '../../../assert/images/blogdetailbg/blog4bg.jpg'
import Hoverrating from '../Hoverrating'

const containerStyle = {
    backgroundImage: ` url(${blog4bg})`, // Replace with your image URL
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '20px', // Adjust padding as needed
    color: 'white', // Text color
    marginTop:"2rem"
  };


const CloudComputing = () => {
  return (
 <>

<Container>
 <Box>
    <Container sx={containerStyle}>

   

        <Typography gutterBottom color="red" variant="h2">Cloud Computing- The Civilization of Art and Sciences
for Your Business.</Typography>
<Typography gutterBottom  color="grey"  variant="body2">Feb 14,2023</Typography>

<Typography sx={{my:2}} gutterBottom variant="h5">Cloud computing also known as virtualisation, is one of the most the most trending topic in the market. It has been increasing at very fast rate because of its internet based development which provides virtual environment to the users with the help of engineering tools.</Typography>



<Typography gutterBottom  sx={{my:2.5 ,color:"red"}}variant="h3">Cloud Computing- The Data Processing</Typography>



<Typography gutterBottom variant="h5">Cloud computing is a virtualized unite of resources in which customers are allowed to acquire the resources in such a way that is flexible, fruitful and in demand. When the word cloud is combined with computing the meaning gets wider</Typography>

<Typography gutterBottom variant="h3"sx={{my:2.5 ,color:"red"}}>“Technology is a gift of god, perhaps the god’s greatest gift after life.”</Typography>

<Typography gutterBottom variant="h3"sx={{my:2.5 ,color:"red"}}>Importance of Virtualised Technology</Typography>


<Typography gutterBottom variant="h5">Cloud computing is possibly the exuberant high tech change within the 21st century. It is because it has shown the short acquisition onto the mainstream then the other tech within the domain. This adoption has been fueled mainly by the expanding number of smartphones and electronic gadgets which are able to access the web. Cloud computing isn’t only for organizations and business cooperations; it’s also useful for the conventional person likewise. It enables us to run software programs without installing them on our computers; it enables us to store and access our multimedia content via web, it enables us to develop and test programs without necessarily having servers so on. Cloud computing could be a 21st century marvel that holds its importance in almost every field you are going to be able to consider</Typography>



<Typography gutterBottom variant="h3"sx={{my:2.5 ,color:"red"}}>Conclusion</Typography>

<Typography gutterBottom variant="h5">
If you're looking to create a game that will engage your audience and keep them coming back for more, our game development services are the perfect fit. Our developers have extensive experience in creating games for a wide range of platforms, including desktop, mobile, and web. Image.
</Typography>


<Typography gutterBottom variant="h5">Researches are being carried out in the field of parallel computing which an extended part of cloud are computing. Several other researches are also being doing research in various other sectors to explore the cloud further. Very soon cloud computing is going to replace the traditional methods of computing</Typography>





 
    </Container>

 </Box>

    <Container sx={containerStyle}>
    <Typography gutterBottom color="black" variant="h5">Words given to this Blog by</Typography>
    <Typography sx={{marginBottom:3}} color="pink" gutterBottom variant="h4"> --Harsimran Kaur</Typography>

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

export default CloudComputing