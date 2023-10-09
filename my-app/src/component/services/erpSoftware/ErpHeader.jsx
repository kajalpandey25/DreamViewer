import { Box,Button,Link,Typography } from '@mui/material'
import React from 'react'
import bannerImageTop from '../../../assert/images/erp_software2.jpg'
import bannerImageBottom from '../../../assert/images/webdev_img.jpg'

const bannerStyle1 = {
    // backgroundImage: `url(${bgImage2})`,
   
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height:'87vh',
    padding: '2rem',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    flex:'1'
};
const bannerStyle2 = {
// backgroundImage: `url(${bgImage2})`,

backgroundSize: 'cover',
backgroundPosition: 'center',
width: '100%',
height:'100%',
padding: '2rem',
color: '#ffffff',
display: 'flex',
alignItems: 'center',
flex:'1'
};

const ErpHeader = () => {
  const isSmallScreen = window.innerWidth <= 768;
  return (
    <>
    {/* container 1 */}
    {isSmallScreen ? (
      <Box
        marginTop='70px'
        sx={{
          padding:'2rem'
        }}
        flexDirection="column"
      >
        <img
          src={bannerImageTop}
          alt="Banner"
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '1rem',
            marginBottom: '1rem',
          }}
        />
        <Typography
          variant="h1"
          color="red"
          sx={{
            fontSize: { xs:'28px', sm: '28px', md: '44px' },
            whiteSpace: 'normal',
            fontFamily: "'Verdana', sans-serif",
            marginBottom: '1rem',
          }}
        >
          Streamline Your Business Operations with our Comprehensive ERP Solutions
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { sm: '12px', md: '20px' },
            whiteSpace: 'normal',
            fontFamily: "'Candara', sans-serif",
          }}
        >
        Our ERP (Enterprise Resource Planning) services provide comprehensive solutions for businesses looking to streamline their operations and improve efficiency. We have a team of experienced consultants who work closely with clients to select the right ERP system and customize it to their unique business needs. Our focus on customer service means that we are committed to building strong relationships with our clients and helping them achieve their business objectives.
    </Typography>
      </Box>
    ):
    (
      <Box sx={bannerStyle1} marginTop={{sm:'60px', md:'80px',lg:'80px'}}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h1" color="red"
          sx={{
            fontSize:{sm:'28px',md:'40px'},
            whiteSpace:'normal'
          }}
            fontFamily="'Verdana', sans-serif"
            marginBottom={1}
          >
            Streamline Your Business Operations with our Comprehensive ERP Solutions
        </Typography>
            <Typography variant="body1" 
            sx={{
                fontSize:{sm:'12px',md:'20px'},
                whiteSpace:'normal'
            }}
            fontFamily="'Candara', sans-serif"
          >
            Our ERP (Enterprise Resource Planning) services provide comprehensive solutions for businesses looking to streamline their operations and improve efficiency. We have a team of experienced consultants who work closely with clients to select the right ERP system and customize it to their unique business needs. Our focus on customer service means that we are committed to building strong relationships with our clients and helping them achieve their business objectives.        
        </Typography>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <img src={bannerImageTop} alt="Banner" 
          style={{ maxWidth: '100%', height: '80vh', borderRadius:'1rem' }} />
        </Box>
      </Box>
    )}
    {/* container 2 */}
    {isSmallScreen ? (
      <Box
        marginTop='70px'
        sx={{
          padding:'2rem'
        }}
        flexDirection="column"
      >
        <img
          src={bannerImageBottom}
          alt="Banner"
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '1rem',
            marginBottom: '1rem',
          }}
        />
        <Typography
          variant="h1"
          color="red"
          sx={{
            fontSize: { xs:'28px', sm: '28px', md: '44px' },
            whiteSpace: 'normal',
            fontFamily: "'Verdana', sans-serif",
            marginBottom: '1rem',
          }}
        >
          ERP- Tax Services
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { sm: '12px', md: '20px' },
            whiteSpace: 'normal',
            fontFamily: "'Candara', sans-serif",
          }}
        >
        A tax services app is a mobile application designed to help individuals and businesses manage their tax-related tasks and obligations. The app typically provides features such as tax calculators, tax filing assistance, and tax payment options. One of the key features of a tax services app is the ability to prepare and file tax returns. Users can input their income, expenses, and other relevant information, and the app will calculate the amount of taxes owed or the refund due. The app can then generate the necessary forms and schedules, and users can file their taxes directly from the app. Another important feature of a tax services app is the ability to provide tax advice and guidance. Users can ask questions about specific tax situations, such as deductions or credits, and the app can provide answers and suggestions. Additionally, the app can provide notifications and reminders about important tax deadlines and changes to tax laws. The tax services app may also offer additional features such as budgeting tools, expense tracking, and financial planning advice. This can help users better manage their finances and make informed decisions about their taxes and other financial matters. Overall, a tax services app can provide a convenient and efficient way for individuals and businesses to manage their tax obligations and stay on top of their finances.
        </Typography>
        <Typography variant="body1" 
              sx={{
                  fontSize:{sm:'12px',md:'18px'},
                  whiteSpace:'normal', 
                  mt:2
              }}
              fontFamily="'Candara', sans-serif"
          >
              To know more about ecommerce websites and web development.
          </Typography>
          {/* contact us button */}
          <Box sx={{display:"flex",justifyContent:"start", mt:4}}>
                  <Link to='/contact'>
                      <Button
                      variant='contained'
                      sx={{
                          size:{sm:'small',md:'large',lg:'large'},
                          color: 'white',
                          bgcolor: 'red',
                          border: '1px solid red',
                          borderRadius: '5px',
                          padding: '5px 10px',
                          textTransform: 'uppercase',
                          '&:hover': {
                          backgroundColor: 'darkred',
                          },
                      }}
                      >
                      <Typography variant='h6' fontFamily="'Roboto', sans-serif"
                          size={{sm:'small',md:'large',lg:'large'}}
                      >
                          Contact Us
                      </Typography>
                      </Button>
                  </Link>
          </Box>
      </Box>
    ):
    (
      <Box sx={bannerStyle2} marginTop={{sm:'60px', md:'80px',lg:'80px'}}
      backgroundColor='rgb(21, 22, 26)'
      >
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start', mr:4 }}>
          <img src={bannerImageBottom} alt="Banner" 
          style={{ height: '85vh',width:'100%', borderRadius:'1rem' }} />
        </Box>
        <Box sx={{ flex: 1 }}>
            <Typography variant="h1" color="red"
            textAlign='center'
            sx={{
                fontSize:{sm:'28px',md:'40px'},
                whiteSpace:'nowrap'
            }}
                fontFamily="'Verdana', sans-serif"
                marginBottom={1}
            >
                ERP- Tax Services           
        </Typography>
            <Typography variant="body1" 
                sx={{
                    fontSize:{sm:'8px',md:'16px'},
                    whiteSpace:'normal', 
                    mt:2
                }}
                fontFamily="'Candara', sans-serif"
            >
                A tax services app is a mobile application designed to help individuals and businesses manage their tax-related tasks and obligations. The app typically provides features such as tax calculators, tax filing assistance, and tax payment options.
                One of the key features of a tax services app is the ability to prepare and file tax returns. Users can input their income, expenses, and other relevant information, and the app will calculate the amount of taxes owed or the refund due. The app can then generate the necessary forms and schedules, and users can file their taxes directly from the app.
                Another important feature of a tax services app is the ability to provide tax advice and guidance. Users can ask questions about specific tax situations, such as deductions or credits, and the app can provide answers and suggestions. Additionally, the app can provide notifications and reminders about important tax deadlines and changes to tax laws. The tax services app may also offer additional features such as budgeting tools, expense tracking, and financial planning advice. This can help users better manage their finances and make informed decisions about their taxes and other financial matters.
                Overall, a tax services app can provide a convenient and efficient way for individuals and businesses to manage their tax obligations and stay on top of their finances.    
            </Typography>
            <Typography variant="body1" 
                sx={{
                    fontSize:{sm:'12px',md:'18px'},
                    whiteSpace:'normal', 
                    mt:2
                }}
                fontFamily="'Candara', sans-serif"
            >
                To know more about ecommerce websites and web development.
            </Typography>
            {/* contact us button */}
            <Box sx={{display:"flex",justifyContent:"start", mt:4}}>
                    <Link to='/contact'>
                        <Button
                        variant='contained'
                        sx={{
                            size:{sm:'small',md:'large',lg:'large'},
                            color: 'white',
                            bgcolor: 'red',
                            border: '1px solid red',
                            borderRadius: '5px',
                            padding: '5px 10px',
                            textTransform: 'uppercase',
                            '&:hover': {
                            backgroundColor: 'darkred',
                            },
                        }}
                        >
                        <Typography variant='h6' fontFamily="'Roboto', sans-serif"
                            size={{sm:'small',md:'large',lg:'large'}}
                        >
                            Contact Us
                        </Typography>
                        </Button>
                    </Link>
            </Box>
        </Box>
      </Box>
    )}
    </>
  )
}

export default ErpHeader;