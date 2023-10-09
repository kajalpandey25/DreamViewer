import { Box,Button,Link,Typography } from '@mui/material'
import React from 'react'
import bannerImageTop from '../../../assert/images/blockchain_img1.jpg'
import bannerImageBottom from '../../../assert/images/blockchain_img2.jpg'
import BlockchainCards from './BlockchainCards';

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

const BlockchainHeader = () => {
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
          The Future is Here: How Blockchain is Revolutionizing Industries Across the Globe
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { sm: '12px', md: '20px' },
            whiteSpace: 'normal',
            fontFamily: "'Candara', sans-serif",
          }}
        >
        We offer a range of blockchain services designed to help businesses harness the power of this revolutionary technology.We also provide guidance on the best blockchain platforms to use, as well as help with implementation and integration.       
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
            The Future is Here: How Blockchain is Revolutionizing Industries Across the Globe        </Typography>
            <Typography variant="body1" 
            sx={{
                fontSize:{sm:'12px',md:'20px'},
                whiteSpace:'normal'
            }}
            fontFamily="'Candara', sans-serif"
          >
We offer a range of blockchain services designed to help businesses harness the power of this revolutionary technology.We also provide guidance on the best blockchain platforms to use, as well as help with implementation and integration.        </Typography>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end',ml:2 }}>
          <img src={bannerImageTop} alt="Banner" 
          style={{ maxWidth: '100%', height: '75vh', borderRadius:'1rem' }} />
        </Box>
      </Box>
    )}
      {/* Cards */}
      <Box
      backgroundColor='rgb(21, 22, 26)'
      sx={{
          height:'100%',
          backgroundColor: 'rgb(21, 22, 26)',
          paddingY:8,
          my:4,  
      }}
      >
        <BlockchainCards/>
      </Box>

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
          Blockchain-Trading App
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { sm: '12px', md: '20px' },
            whiteSpace: 'normal',
            fontFamily: "'Candara', sans-serif",
          }}
        >
       A trading app built with blockchain is a mobile application that enables users to buy, sell, and trade various assets, including cryptocurrencies, tokens, and other digital assets, using blockchain technology. One of the key features of a blockchain trading app is the ability to provide a secure and transparent platform for trading. Blockchain technology ensures that all transactions are recorded on a public ledger, which cannot be tampered with or altered, providing a high level of security and transparency for users. Overall, a blockchain trading app can provide a secure, transparent, and efficient platform for buying, selling, and trading various digital assets. With its advanced features and user-friendly interface, it can make trading more accessible to a wider range of users and help drive the growth of the blockchain ecosystem.  
    </Typography>
    <Typography variant="h1" color="white"
            textAlign='left'
            sx={{
                fontSize:{xs:'20px',sm:'20px',sm:'28px',md:'24px'},
                whiteSpace:'normal',
                mt:2
            }}
                fontFamily="'Verdana', sans-serif"
                marginBottom={1}
            >
                Our experts will help you solve your queries            
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
                Blockchain-Trading App
        </Typography>
            <Typography variant="body1" 
                sx={{
                    fontSize:{sm:'8px',md:'16px'},
                    whiteSpace:'normal', 
                    mt:2
                }}
                fontFamily="'Candara', sans-serif"
            >
                A trading app built with blockchain is a mobile application that enables users to buy, sell, and trade various assets, including cryptocurrencies, tokens, and other digital assets, using blockchain technology. One of the key features of a blockchain trading app is the ability to provide a secure and transparent platform for trading. Blockchain technology ensures that all transactions are recorded on a public ledger, which cannot be tampered with or altered, providing a high level of security and transparency for users.
                Overall, a blockchain trading app can provide a secure, transparent, and efficient platform for buying, selling, and trading various digital assets. With its advanced features and user-friendly interface, it can make trading more accessible to a wider range of users and help drive the growth of the blockchain ecosystem.
            </Typography>
            <Typography variant="h1" color="white"
            textAlign='left'
            sx={{
                fontSize:{sm:'28px',md:'24px'},
                whiteSpace:'normal',
                mt:2
            }}
                fontFamily="'Verdana', sans-serif"
                marginBottom={1}
            >
                Our experts will help you solve your queries            
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

export default BlockchainHeader;