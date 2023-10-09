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
    px:{xs:1,sm:1,md:1,lg:1},
    my:{sm:4, md:6, lg:8},
    // backgroundColor: 'rgb(21, 22, 26)',
    height:{sm:'100%', md:'100%', lg:'100vh'},
    display: 'flex',
    flexDirection: {xs:'column', sm:'column', md:'column', lg:'row'},
    justifyContent: 'space-between',
    // backgroundColor:"rgb(21, 22, 26)"
  },
  card: {
    width: '25%',
    margin: '4px',
    padding: '16px',
    color: 'white',
    bgcolor:"#121212",
    boxShadow:"2px 4px 6px  #E7E9EB",
    '&:hover': {
        borderBottom: `4px solid red`,
    }
  },
  cardContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
};

function WhyUsCards() {
  return (
    <Box sx={styles.container}>
      <Card sx={{ ...styles.card, 
        height:{sm:'auto', md:'auto', lg:'100%'}, 
        width:{sm:'100%',md:'95%',lg:'19%'},
        mx:{xs:2,sm:2,md:4,lg:0},
        my:{xs:2,sm:2,md:2,lg:0}
      }}>
        <CardActionArea>
              <CardContent sx={styles.cardContent}>
                <Typography  gutterBottom component="div" 
                fontSize={{sm:'28px', md:'32px', lg:'32px'}}
                sx={{color:"red",textAlign:"center",
                lineHeight:1.2,
                fontFamily:"'Jost', sans-serif",
                lineHeight:'1'
                }}
                >
                    Unleash your creativity                
                </Typography>
                  <Typography
                    sx={{color:"white",
                      textAlign:"left",
                      textJustify: "justify",
                      px:1,
                      mt:1,
                    }}
                    fontSize={{xs:'12px', sm:'12px', md:'16px',lg:'16px'}}
                    fontFamily="'Jost', sans-serif"
                    // color="#66FCF1" 
                    >
                        Our projects are anything but ordinary. We're constantly working on new and exciting projects that require out-of-the-box thinking and innovative solutions. You'll have the opportunity to unleash your creativity and make a real impact on the world.                
                </Typography>

              </CardContent>
          </CardActionArea>
          <Divider />
      </Card>
      <Card sx={{ ...styles.card, 
      height:{sm:'auto', md:'auto', lg:'90%'}, 
      width:{sm:'100%',md:'95%',lg:'19%'},
      mx:{xs:2,sm:2,md:4,lg:0},
      my:{xs:2,sm:2,md:2,lg:0}
      }}>
        <CardActionArea>
              <CardContent sx={styles.cardContent}>
                <Typography  gutterBottom component="div" 
                fontSize={{sm:'28px', md:'32px',lg:'32px'}}
                sx={{color:"red",textAlign:"center", lineHeight:1.2}}
                fontFamily="'Jost', sans-serif"
                >
                 Collaborate with the best
                </Typography>
                  <Typography
                    fontSize={{sm:'12px', md:'16px',lg:'16px'}}
                    sx={{color:"white",
                    textAlign:"left",
                    textJustify: "justify",
                    px:1,
                    mt:1
                    }}
                    fontFamily="'Jost', sans-serif"
                    // color="#66FCF1" 
                  >
                    Our team is made up of some of the best and brightest minds in the industry. You'll have the opportunity to collaborate with talented individuals who are just as passionate about technology as you are.
                  </Typography>

              </CardContent>
          </CardActionArea>
          <Divider />
      </Card>
      <Card sx={{ ...styles.card, 
      height:{sm:'auto', md:'auto', lg:'80%'}, 
      width:{sm:'100%',md:'95%',lg:'19%'},
      mx:{xs:2,sm:2,md:4,lg:0},
      my:{xs:2,sm:2,md:2,lg:0}
      }}
      >
        <CardActionArea>
              <CardContent sx={styles.cardContent}>
                <Typography  gutterBottom component="div" 
                fontSize={{sm:'28px', md:'32px',lg:'32px'}}
                sx={{color:"red",textAlign:"center", lineHeight:1.2}}
                fontFamily="'Jost', sans-serif"
                >
                 Develop your skills
                </Typography>
                  <Typography
                    fontSize={{sm:'12px', md:'16px', lg:'16px'}}
                    sx={{color:"white",
                    textAlign:"left",
                    textJustify: "justify",
                    px:1, mt:1
                    }}
                    fontFamily="'Jost', sans-serif"
                    // color="#66FCF1" 
                  >
                We believe in investing in our employees' growth and development. You'll have access to training and mentorship programs that will help you develop your skills and advance your career.              
                </Typography>

              </CardContent>
          </CardActionArea>
          <Divider />
      </Card>
      <Card sx={{ ...styles.card, 
      height:{sm:'auto', md:'auto', lg:'90%'}, 
      width:{sm:'100%',md:'95%',lg:'19%'},
      mx:{xs:2,sm:2,md:4,lg:0},
      my:{xs:2,sm:2,md:2,lg:0}
      }}>
        <CardActionArea>
              <CardContent sx={styles.cardContent}>
                <Typography  gutterBottom component="div" 
                fontSize={{sm:'28px', md:'32px',lg:'32px'}}
                sx={{color:"red",textAlign:"center", lineHeight:1.2}}
                fontFamily="'Jost', sans-serif"
                >
                 Work on meaningful projects
                </Typography>
                  <Typography
                    fontSize={{sm:'12px', md:'16px', lg:'16px'}}
                    sx={{color:"white",
                    textAlign:"left",
                    textJustify: "justify",
                    px:1, mt:1
                    }}
                    fontFamily="'Jost', sans-serif"
                    // color="#66FCF1" 
                  >
                    Our projects aren't just about making money - they're about making a difference. You'll have the opportunity to work on projects that have a real impact on people's lives and the world around us.          
                </Typography>

              </CardContent>
          </CardActionArea>
          <Divider />
      </Card>
      <Card sx={{ ...styles.card, 
        height:{sm:'auto', md:'auto', lg:'100%'}, 
        width:{sm:'100%',md:'95%',lg:'19%'},
        mx:{xs:2,sm:2,md:4,lg:0},
        my:{xs:2,sm:2,md:2,lg:0}
      }}>
        <CardActionArea>
              <CardContent sx={styles.cardContent}>
                <Typography  gutterBottom component="div" 
                fontSize={{sm:'28px', md:'32px', lg:'32px'}}
                sx={{color:"red",textAlign:"center", lineHeight:1.2}}
                fontFamily="'Jost', sans-serif"
                >
                 Emyrace diversity and inclusivity
                </Typography>
                  <Typography
                    fontSize={{sm:'12px', md:'16px', lg:'16px'}}
                    sx={{color:"white",
                    textAlign:"left",
                    textJustify: "justify",
                    px:1, mt:1
                    }}
                    fontFamily="'Jost', sans-serif"
                    // color="#66FCF1" 
                  >
                        We believe that diversity of thought, experience, and background is essential to driving innovation and success. We're committed to creating a workplace that is inclusive and welcoming to everyone.             
                </Typography>

              </CardContent>
          </CardActionArea>
          <Divider />
      </Card>
    </Box>
  );
}

export default WhyUsCards ;