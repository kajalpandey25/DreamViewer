import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { ServiceData } from './ServiceData';
import { CardActionArea} from '@mui/material';
import { Box } from '@mui/system';
import websitelogo from '../../assert/images/serviceLogo/web.webp'


const ServiceCards=()=> {
  return (
   <>
      <Box sx={{
        display:"flex",
        justifyContent:"space-between" ,
        justifyContent:"space-evenly",
        my:3,
        px:1,
        flexWrap:"wrap",
       
        }}
   >
      {ServiceData.map((item) => (
        <Card key={item.id} sx={{
            maxWidth:400,
            my:2,
            bgcolor:"#121212",
            boxShadow:"5px 8px 15px  #E7E9EB",
           
            '&:hover': {
              
              borderRight: `2.5px solid red` ,
              borderBottom: `4px solid red`,
              
        }}}>

          <CardActionArea>
         
              <CardContent>
             
                <Typography  sx={{textAlign:"center" ,p:1}}>
                  <img src={item.logo} width="60px" height="60px" alt='serviceLogo'/>
                </Typography>
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
                    
                  >
                    {item.des}
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

export default ServiceCards;



// import React from 'react';

// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import { ServiceData } from './ServiceData';
// import { CardMedia ,CardActionArea} from '@mui/material';
// import { Box } from '@mui/system';


// const ServiceCards=()=> {
//   return (
//    <>
//       <Box sx={{
//         display:"flex",
//         justifyContent:"space-evenly" ,
//         my:3,
//         px:1,
//         flexWrap:"wrap"
//         }}
//    >
//       {ServiceData.map((item) => (
//         <Card key={item.id} sx={{
//             maxWidth: 350,
//             my:2,
//             bgcolor:"#121212",
//             boxShadow:"5px 8px 15px  #E7E9EB",
//             '&:hover': {
//               borderBottom: `4px solid red`,
//         }}}>

//           <CardActionArea>
//             <CardMedia
//               component="img"
//               height="50"
//               width="50"
//               image={item.logo} 
//               alt={item.title}
//             >
//               </CardMedia>
//               <CardContent>
//                 <Typography  gutterBottom variant="h3" component="div" 
//                 sx={{color:"red",textAlign:"center"}}
//                 fontFamily="'Open Sans', sans-serif"
//                 >
//                   {item.title}
//                 </Typography>
//                   <Typography variant="body2"
//                     sx={{color:"white",
//                     textAlign:"left",
//                     textJustify: "justify",
//                     px:1
//                     }}
//                     fontFamily="'Open Sans', sans-serif"
//                     // color="#66FCF1" 
//                   >
//                     {item.des}
//                   </Typography>

//               </CardContent>
//           </CardActionArea>
//           <Divider />
//         </Card>
       
//       ))}
//       </Box>
//     </>
//   );
// }

// export default ServiceCards;