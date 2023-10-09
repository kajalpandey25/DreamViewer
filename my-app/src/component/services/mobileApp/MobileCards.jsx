import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { CardMedia ,CardActionArea} from '@mui/material';
import { Box } from '@mui/system';


const MobileCards=({cardsData})=> {
  return (
   <>
      <Box sx={{
        display:"flex",
        justifyContent:"space-evenly" ,
        my:3,
        px:1,
        flexWrap:"wrap"
        }}
   >
      {cardsData.map((item) => (
        <Card key={item.id} sx={{
            maxWidth: 350,
            my:2,
            bgcolor:"#121212",
            boxShadow:"5px 8px 15px  #E7E9EB",
            '&:hover': {
              borderBottom: `4px solid red`,
        }}}>

          <CardActionArea>
            {/* <CardMedia
              component="img"
              height="50"
              width="50"
              image={item.logo} 
              alt={item.title}
            >
              </CardMedia> */}
              <CardContent>
                <Typography  gutterBottom variant="h3" component="div" 
                sx={{color:"red",textAlign:"center"}}
                fontFamily="'Open Sans', sans-serif"
                >
                  {item.title}
                </Typography>
                  <Typography variant="body2"
                    sx={{color:"white",
                    textAlign:"left",
                    textJustify: "justify",
                    px:1
                    }}
                    fontFamily="'Open Sans', sans-serif"
                    // color="#66FCF1" 
                  >
                    {item.text}
                  </Typography>

              </CardContent>
          </CardActionArea>
          <Divider />
        </Card>
       
      ))}
      </Box>
    </>
  );
}

export default MobileCards;