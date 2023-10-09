import React from 'react'
import { Button, Box, Typography ,Card,CardContent} from '@mui/material'


import styles from '../BlogBoxStyle.module.css'

import  { BlogBoxData} from '../BlogBoxData'

import { Link } from 'react-router-dom'


const BlogSectionContent = () => {
  return (
  
   
    
      
    
   <Box sx={{
        display:"flex",
        justifyContent:"space-between" ,
        justifyContent:"space-evenly",
        my:3,
        px:1,
        flexWrap:"wrap",
       
        }}
   >

{BlogBoxData.slice(0,6).map((item) => (

<Card 
key={item.id} sx={{
  maxWidth:650,
  my:10,
  bgcolor:"#121212",
  boxShadow:"5px 8px 15px  #E7E9EB",
 bgcolor:"black",
  '&:hover': {
    
    borderRight: `2.5px solid red` ,
    borderBottom: `4px solid red`,
    
}}}>
<CardContent>
<Typography  className={styles.imageContainer}>
          <img src={item.image} alt="Image 1" className={styles.image}
          /> 

          
           <div className={styles.boxOverlay}>
            <div className={styles.text}>
                
                <Typography color="red "  gutterBottom sx={{textAlign:"center" ,fontFamily:"sans-serif",fontWeight:"bold",my:2}} variant="h3">{item.title}</Typography>
                
                <Typography gutterBottom sx={{textAlign:"center" ,color:'white',my:2}} variant="h5">{item.overlayText} </Typography>
                <Button variant="outlined" component={Link} to={item.link} sx={{bgcolor:"pink",
              color :'red'
              }}  >For this Blog</Button>
                </div>
            </div>
            </Typography>
            <Box sx={{bgcolor:""}}>
            <Typography  sx={{color :"red",padding:"9px"}} variant='body2'>{item.date}</Typography>
              <Typography variant='h4' color="white">Title :{item.overlayText}</Typography>
            </Box>
          


</CardContent>



</Card>

))}
</Box>
   
        
 
  )
}

export default BlogSectionContent