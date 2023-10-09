import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { CardActionArea } from '@mui/material';

const styles = {
  container: {
    backgroundColor: 'rgb(21, 22, 26)',
    height: {xs:'100%',sm:'100%',md:'102vh',lg:'102vh'},
    display: 'flex',
    flexDirection: {xs:'column',sm:'column',md:'row',lg:'row'},
    justifyContent: 'space-between',
    marginX:'1rem'
  },
  card: {
    // width: '25%',
    marginY: '10px',
    padding: '16px',
    color: 'white',
    bgcolor:"#121212",
    boxShadow:"5px 8px 15px  #E7E9EB",
    '&:hover': {
        borderBottom: `4px solid red`,
    }
  },
};

function BlockchainCards() {
  return (
    <Box sx={styles.container}>
      <Card sx={{ ...styles.card, 
      height: {xs:'100%',sm:'100%',md:'100%',lg:'100%'}, 
      width:{xs:'100%',sm:'100%',md:'45%',lg:'45%'},
       }}>
        <CardActionArea>
              <CardContent>
                <Typography  gutterBottom component="div" 
                fontSize={{xs:'28px',sm:'28px', md:'40px'}}
                sx={{color:"red",textAlign:"center",
                fontFamily:"'Jost', sans-serif",
                lineHeight:'1'
                }}
                >
                 With the assistance of our professionals, introduce your blockchain products to the market.
                </Typography>
                  <Typography
                    sx={{color:"white",
                    textAlign:"left",
                    textJustify: "justify",
                    px:1
                    }}
                    fontSize={{sm:'12px', md:'16px'}}
                    fontFamily="'Jost', sans-serif"
                    // color="#66FCF1" 
                  >
                    Our company offers expert assistance to businesses and individuals looking to launch their blockchain products. With our team's extensive knowledge of blockchain technology and experience in product launches, we can help ensure a successful roll-out. By working with us, clients can benefit from our expertise in marketing and market penetration. We emphasize the importance of a well-executed launch, which is why we offer our services to help clients achieve their goals. Let us help you bring your blockchain products to the market with confidence.                  
                </Typography>

              </CardContent>
          </CardActionArea>
          <Divider />
      </Card>
      <Card sx={{ ...styles.card, 
      height: {xs:'100%',sm:'100%',md:'90%',lg:'90%'}, 
      width:{xs:'100%',sm:'100%',md:'23%',lg:'23%' },
      }}>
        <CardActionArea>
              <CardContent>
                <Typography  gutterBottom component="div" 
                fontSize={{xs:'28px',sm:'28px', md:'40px'}}
                sx={{color:"red",textAlign:"center"}}
                fontFamily="'Jost', sans-serif"
                >
                 Hash Key
                </Typography>
                  <Typography
                    fontSize={{sm:'12px', md:'16px'}}
                    sx={{color:"white",
                    textAlign:"left",
                    textJustify: "justify",
                    px:1
                    }}
                    fontFamily="'Jost', sans-serif"
                    // color="#66FCF1" 
                  >
                   HashKey is a digital asset management platform that provides end-to-end solutions for institutional and individual clients. It offers services such as trading, custody, research, and investment management for cryptocurrencies and other digital assets. The platform focuses on security, transparency, and innovation to deliver a comprehensive suite of services for its clients.
                  </Typography>

              </CardContent>
          </CardActionArea>
          <Divider />
      </Card>
      <Card sx={{ ...styles.card, 
      height: {xs:'100%',sm:'100%',md:'80%',lg:'80%'}, 
      width:{xs:'100%',sm:'100%',md:'23%',lg:'23%'} }}>
        <CardActionArea>
              <CardContent>
                <Typography  gutterBottom component="div" 
                fontSize={{xs:'28px',sm:'28px', md:'40px'}}
                sx={{color:"red",textAlign:"center"}}
                fontFamily="'Jost', sans-serif"
                >
                 Crypto
                </Typography>
                  <Typography
                    fontSize={{sm:'12px', md:'16px'}}
                    sx={{color:"white",
                    textAlign:"left",
                    textJustify: "justify",
                    px:1
                    }}
                    fontFamily="'Jost', sans-serif"
                    // color="#66FCF1" 
                  >
                Cryptocurrency is a digital or virtual currency that utilizes cryptographic techniques to secure and verify transactions and to control the creation of new units. It operates independently of traditional financial institutions and is often decentralized, with transactions recorded on a public ledger called a blockchain.                  
                </Typography>

              </CardContent>
          </CardActionArea>
          <Divider />
      </Card>
    </Box>
  );
}

export default BlockchainCards;