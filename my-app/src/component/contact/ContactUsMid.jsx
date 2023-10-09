import React from 'react'
import ContactUsForm from './ContactUsForm'
import { Grid, Box, Typography } from '@mui/material'

const ContactDetailsFont = {
    fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
}

const ContactUsMid = () => {
  return (
    <>
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            textAlign:'center',
            mt:8
        }}
        >
            {/* heading  */}
            <Box>
                <Typography  color="red"  fontSize={{
                    lg: 42,
                    md: 42,
                    sm: 36,
                    xs: 32
                }}
                sx={{
                    fontFamily:ContactDetailsFont
                }}
                >
                    Stay in touch with us
                </Typography>
                <Typography component='div'
                    fontSize={{
                        lg: 20,
                        md: 20,
                        sm: 12,
                        xs: 12
                    }}
                    sx={{lineHeight:1.2, mt:2,
                        fontFamily:ContactDetailsFont
                    }}
                >
                    Feel free to connect with us. We will be back to you shortly.                  
                </Typography>
            </Box>
            {/* content */}
            <Box
            sx={{
                display:'flex',
                flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'},
                justifyContent:'space-between',
                px:{xs:2,sm:2,md:4,lg:4},
                py:{xs:2,sm:2,md:4,lg:4}, mt:8,
                height:{xs:'100%',sm:'100%', md:'750px', lg:'750px'}
            }}>
                {/* contact details */}
                <Box
                    sx={{
                        display:'flex',
                        flexDirection:'column',
                        width:'100%',
                        height:'100%',
                        mr:2, mb:2
                    }}
                >
                    <Box sx={{
                        display:'flex',
                        flexDirection:'column',
                        pl:4, pr:2,
                        boxShadow:'0 4px 6px rgba(255, 255, 255, 0.1), 0 1px 3px rgba(255, 255, 255, 0.06)',
                        height:'100%'
                    }}>
                        {/* 1 */}
                        <Box sx={{mt:{xs:4,sm:4,md:4,lg:4}}}>
                            <Typography color='#66FCF1'  fontSize={{
                                lg: 28,
                                md: 28,
                                sm: 18,
                                xs: 18
                            }}
                            sx={{textAlign:'left'}}
                            fontFamily={ContactDetailsFont}
                            >
                                Contact Us
                            </Typography>
                            <Typography component='div'
                                fontSize={{
                                    lg: 18,
                                    md: 18,
                                    sm: 12,
                                    xs: 12
                                }}
                                sx={{lineHeight:1.2, mt:1, textAlign:'left'}}
                                fontFamily={ContactDetailsFont}
                            >
                                As you might expect of a company that began as a high end solutions to all your business needs,we pay strict attention.                  
                            </Typography>
                        </Box>
                        {/* 2 */}
                        <Box sx={{mt:4}}>
                            <Typography color="#66FCF1"  fontSize={{
                                lg: 28,
                                md: 28,
                                sm: 18,
                                xs: 18
                            }}
                            sx={{textAlign:'left'}}
                            fontFamily={ContactDetailsFont}
                            >
                                Delhi,Noida
                            </Typography>
                            <Typography component='div'
                                fontSize={{
                                    lg: 18,
                                    md: 18,
                                    sm: 12,
                                    xs: 12
                                }}
                                sx={{lineHeight:1.2, mt:1, textAlign:'left'}}
                                fontFamily={ContactDetailsFont}
                            >
                                H-150, Sector 63, Delhi,
                            </Typography>
                            <Typography component='div'
                                fontSize={{
                                    lg: 18,
                                    md: 18,
                                    sm: 12,
                                    xs: 12
                                }}
                                sx={{lineHeight:1.2, mt:1, textAlign:'left'}}
                                fontFamily={ContactDetailsFont}
                            >
                                Noida, Uttar Pradesh - 201301 India
                            </Typography>
                        </Box>
                        {/* 3 (call us) */}
                        <Box sx={{mt:4}}>
                            <Typography color="#66FCF1"  fontSize={{
                                lg: 28,
                                md: 28,
                                sm: 18,
                                xs: 18
                            }}
                            sx={{textAlign:'left'}}
                            fontFamily={ContactDetailsFont}
                            >
                                Call Us
                            </Typography>
                            <Typography component='div'
                                fontSize={{
                                    lg: 18,
                                    md: 18,
                                    sm: 12,
                                    xs: 12
                                }}
                                sx={{lineHeight:1.2, mt:1, textAlign:'left'}}
                                fontFamily={ContactDetailsFont}
                            >
                                +918860464098,  +919599484325               
                            </Typography>
                            <Typography component='div'
                                fontSize={{
                                    lg: 18,
                                    md: 18,
                                    sm: 12,
                                    xs: 12
                                }}
                                sx={{lineHeight:1.2,mt:1, textAlign:'left'}}
                                fontFamily={ContactDetailsFont}
                            >
                                +919511229801,  +919142050882            
                            </Typography>
                        </Box>
                        {/* 4 */}
                        <Box sx={{mt:4}}>
                            <Typography color="#66FCF1"  fontSize={{
                                lg: 28,
                                md: 28,
                                sm: 18,
                                xs: 18
                            }}
                            sx={{textAlign:'left'}}
                            fontFamily={ContactDetailsFont}
                            >
                                Email Us
                            </Typography>
                            <Typography component='div'
                                fontSize={{
                                    lg: 18,
                                    md: 18,
                                    sm: 12,
                                    xs: 12
                                }}
                                sx={{lineHeight:1.2, mt:1, textAlign:'left'}}
                                fontFamily={ContactDetailsFont}
                            >
                                infotechdreamviewer@gmail.com                
                            </Typography>
                        </Box>
                        {/* 5 */}
                        <Box sx={{mt:4, mb:{xs:4,sm:4,md:4,lg:4}}}>
                            <Typography color="#66FCF1"  fontSize={{
                                lg: 28,
                                md: 28,
                                sm: 18,
                                xs: 18
                            }}
                            sx={{textAlign:'left'}}
                            fontFamily={ContactDetailsFont}
                            >
                                Open Hours
                            </Typography>
                            <Typography component='div'
                                fontSize={{
                                    lg: 18,
                                    md: 18,
                                    sm: 12,
                                    xs: 12
                                }}
                                sx={{lineHeight:1.2, mt:1, textAlign:'left'}}
                                fontFamily={ContactDetailsFont}
                            >
                                Monday - Saturday                 
                            </Typography>
                            <Typography component='div'
                                fontSize={{
                                    lg: 18,
                                    md: 18,
                                    sm: 12,
                                    xs: 12
                                }}
                                sx={{lineHeight:1.2,mt:1, textAlign:'left'}}
                                fontFamily={ContactDetailsFont}
                            >
                                9:00AM - 07:00PM              
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                {/* form */}
                <Box
                    sx={{
                        display:'flex',
                        // border:'1px solid white',
                        width:'100%',
                        height:'100%', mb:2
                    }}
                >
                    <ContactUsForm/>
                    {/* Hi */}
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default ContactUsMid