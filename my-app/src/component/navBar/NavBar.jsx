import React, { useEffect, useState } from 'react';
import styles from './navBar.module.css'
// import { makeStyles } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import logo from '../../assert/images/logo (1).png'
import { Link, NavLink } from 'react-router-dom';
import { ListItem,List, CssBaseline, Grid, createTheme } from '@mui/material';

import  {pages} from '../navBar/navOption'
import { Image, KeyboardArrowDown } from '@mui/icons-material';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const NavBar=()=> {
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isCareerMenuOpen, setIsCareerMenuOpen] = useState(false);
  const [anchorElService, setAnchorElService] = React.useState(null);
  const [anchorElCareer, setAnchorElCareer] = React.useState(null);
// handle service menu
  const handleServicesMenuOpen = (event) => {
    setAnchorElService(event.currentTarget);
    setIsServicesMenuOpen(true);
  };
  const handleServicesMenuClose = () => {
    setAnchorElCareer(null);
    setIsServicesMenuOpen(false);
  };
// handle career menu
  const handleCareerMenuOpen = (event) => {
    setAnchorElCareer(event.currentTarget);
    setIsCareerMenuOpen(true);
  };
  const handleCareerMenuClose = () => {
    setAnchorElCareer(null);
    setIsCareerMenuOpen(false);
  };
   // Define a class for the active link
   const activeLinkStyle = {
    color: 'red', // Set the color for the active link
  };

  const [isGreyBackground, setIsGreyBackground] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  // const handleScroll = () => {
  //   const scrollThreshold = 100; // Change this value as needed

  //   if (window.scrollY > scrollThreshold) {
  //     setIsGreyBackground(true);
  //   } else {
  //     setIsGreyBackground(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
      <AppBar position='fixed'
        sx={{bgcolor:"#5D5D5D",
          fontFamily:"'Roboto', sans-serif",
          height:{sm:'60px',md:'80px', lg:'90px'},
        }}
      // className={isGreyBackground ? styles.greyAppbar : styles.transparentAppbar}
      >
        <Container maxWidth="xl" m='0' p='0'>
          <Toolbar disableGutters m='0' p='0'>
            <Typography
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                px:1.4,
              }}
            >
              <Link   to='/'>
                <img src={logo} alt='noName' height='50px' />
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                <MenuIcon/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <div style={{
              display:'flex',
              flex:'1',
              justifyContent:'space-between',
              alignItems:'center',
              width:'100%'
            }}>
            {/* logo */}
              <Typography
                variant="h5"
                noWrap
                component="navLink"
                to="/"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  p:1.3
                }}
              >
                <Image src={logo} height='60px' alt='noName' />
              </Typography>
              <div style={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                flex:'1',
                width:'100%'
              }}>
                {/* menu items */}
                  <Box sx={{ 
                    flexGrow: 1, 
                    display: { xs: 'none', md: 'flex',justifyContent:"end" },
                    mr:4
                  }}
                  > 
                      <List sx={{
                          display:'flex',
                          alignItems:'center',
                          justifyContent:'center'
                        }}
                      >
                      {/* {pages.map((page) => (
                        <ListItem 
                          component={NavLink} to={page.link} exact
                          activeStyle={activeLinkStyle}
                          key={page.title}
                          onClick={handleCloseNavMenu}
                          sx={{
                          my: 2, color: 'white', 
                          display:'flex',
                          alignItems:'center',
                          justifyContent:'center',
                          width:'100%',
                          '&:hover': {
                            color: 'red',
                            borderBottom:'1px solid red'
                          } 
                          }}
                        >
                          <span style={{ whiteSpace: 'nowrap'}}>
                            {page.title}
                          </span>
                        </ListItem>
                      ))} */}
                        {/* Home */}
                        <ListItem 
                          component={NavLink} to={'/'} exact
                          activeStyle={activeLinkStyle}
                          key={'Home'}
                          onClick={handleCloseNavMenu}
                          sx={{
                          my: 2, color: 'white', 
                          display:'flex',
                          alignItems:'center',
                          justifyContent:'center',
                          width:'100%',
                          '&:hover': {
                            color: 'red',
                            borderBottom:'1px solid red'
                          } 
                          }}
                        >
                          <span style={{ whiteSpace: 'nowrap'}}>
                            Home
                          </span>
                        </ListItem>
                        {/* about */}
                        <ListItem 
                          component={NavLink} to={'/about'}
                          activeStyle={activeLinkStyle}
                          key={'Home'}
                          onClick={handleCloseNavMenu}
                          sx={{
                          my: 2, color: 'white', 
                          display:'flex',
                          alignItems:'center',
                          justifyContent:'center',
                          width:'100%',
                          '&:hover': {
                            color: 'red',
                            borderBottom:'1px solid red'
                          } 
                          }}
                        >
                          <span style={{ whiteSpace: 'nowrap'}}>
                            About
                          </span>
                        </ListItem>
                        {/* Services */}
                        <ListItem 
                          onMouseEnter={handleServicesMenuOpen}
                          onMouseLeave={handleServicesMenuClose}
                          // component={NavLink} to={'/service'}
                          activeStyle={activeLinkStyle}
                          key={'Home'}
                          onClick={handleCloseNavMenu}
                          sx={{
                          my: 2, color: 'white', 
                          display:'flex',
                          alignItems:'center',
                          justifyContent:'center',
                          width:'100%',
                          '&:hover': {
                            color: 'red',
                            borderBottom:'1px solid red'
                          } 
                          }}
                        >
                          <span style={{ whiteSpace: 'nowrap',
                          display:'flex',
                          alignItems:'center',
                          justifyContent:'center'
                          }}>
                            Services <KeyboardArrowDown/>
                          </span>
                          {/* menu */}
                          {isServicesMenuOpen && (
                            <Menu
                              anchorEl={anchorElService}
                              anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                              }}
                              transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                              }}
                              open={isServicesMenuOpen}
                              onClose={handleServicesMenuClose}
                              PaperProps={{
                                sx: {
                                  backgroundColor: '#0B0C10',
                                  color:'white'
                                },
                              }}
                              sx={{
                                display: 'block',
                                marginTop: '10px',
                                fontFamily:"'Candara',sans-serif"
                              }}
                            >
                            <MenuItem
                              component={NavLink}
                              to={'/uiux'}
                              onClick={handleServicesMenuClose} 
                            >
                              <span style={{
                                fontFamily:"'Candara',sans-serif",
                                fontSize:'20px',
                                fontWeight:500
                              }}>UI/UX</span>
                            </MenuItem>     
                            <MenuItem
                              component={NavLink}
                              to={'/mobileApp'}
                              onClick={handleServicesMenuClose}
                            >
                            <span style={{
                                fontFamily:"'Candara',sans-serif",
                                fontSize:'20px',
                                fontWeight:500
                              }}>Mobile App services</span>
                              
                            </MenuItem> 
                            <MenuItem
                              component={NavLink}
                              to={'/WebDevelopement'}
                              onClick={handleServicesMenuClose}
                            >
                            <span style={{
                                fontFamily:"'Candara',sans-serif",
                                fontSize:'20px',
                                fontWeight:500
                              }}>Web Developement services</span>
                              
                            </MenuItem> 
                            <MenuItem
                              component={NavLink}
                              to={'/erpSoftware'}
                              onClick={handleServicesMenuClose}
                            >
                            <span style={{
                                fontFamily:"'Candara',sans-serif",
                                fontSize:'20px',
                                fontWeight:500
                              }}>ERP Software</span>
                              
                            </MenuItem> 
                            <MenuItem
                              component={NavLink}
                              to={'/gaming'}
                              onClick={handleServicesMenuClose}
                            >
                            <span style={{
                                fontFamily:"'Candara',sans-serif",
                                fontSize:'20px',
                                fontWeight:500
                              }}>Gaming Services</span>
                              
                            </MenuItem> 
                            <MenuItem
                              component={NavLink}
                              to={'/blockchain'}
                              onClick={handleServicesMenuClose}
                            >
                            <span style={{
                                fontFamily:"'Candara',sans-serif",
                                fontSize:'20px',
                                fontWeight:500
                              }}>Blockchain</span>
                              
                            </MenuItem>                         
                            <MenuItem
                              component={NavLink}
                              to={'/chatbot'}
                              onClick={handleServicesMenuClose}
                            >
                            <span style={{
                                fontFamily:"'Candara',sans-serif",
                                fontSize:'20px',
                                fontWeight:500
                              }}>AI/ML Chatbot</span>
                              
                            </MenuItem> 
                          </Menu>
                          )}
                        </ListItem>
                        {/* Portfolio */}
                        <ListItem 
                          component={NavLink} to={'/portfolio'}
                          activeStyle={activeLinkStyle}
                          key={'Home'}
                          onClick={handleCloseNavMenu}
                          sx={{
                          my: 2, color: 'white', 
                          display:'flex',
                          alignItems:'center',
                          justifyContent:'center',
                          width:'100%',
                          '&:hover': {
                            color: 'red',
                            borderBottom:'1px solid red'
                          } 
                          }}
                        >
                          <span style={{ whiteSpace: 'nowrap'}}>
                            Portfolio
                          </span>
                        </ListItem>
                        {/* Blog */}
                        <ListItem 
                          component={NavLink} to={'/blogs'}
                          activeStyle={activeLinkStyle}
                          key={'Home'}
                          onClick={handleCloseNavMenu}
                          sx={{
                          my: 2, color: 'white', 
                          display:'flex',
                          alignItems:'center',
                          justifyContent:'center',
                          width:'100%',
                          '&:hover': {
                            color: 'red',
                            borderBottom:'1px solid red'
                          } 
                          }}
                        >
                          <span style={{ whiteSpace: 'nowrap'}}>
                            Blog
                          </span>
                        </ListItem>
                        {/* Career */}
                        <ListItem 
                          onMouseEnter={handleCareerMenuOpen}
                          onMouseLeave={handleCareerMenuClose}
                          // component={NavLink} to={'/service'}
                          activeStyle={activeLinkStyle}
                          key={'Home'}
                          onClick={handleCloseNavMenu}
                          sx={{
                          my: 2, color: 'white', 
                          display:'flex',
                          alignItems:'center',
                          justifyContent:'center',
                          width:'100%',
                          '&:hover': {
                            color: 'red',
                            borderBottom:'1px solid red'
                          } 
                          }}
                        >
                          <span style={{ whiteSpace: 'nowrap',
                          display:'flex',
                          alignItems:'center',
                          justifyContent:'center'
                          }}>
                            Career <KeyboardArrowDown/>
                          </span>
                          {/* menu */}
                          {isCareerMenuOpen && (
                            <Menu
                              anchorEl={anchorElCareer}
                              anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                              }}
                              transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                              }}
                              open={isCareerMenuOpen}
                              onClose={handleCareerMenuClose}
                              PaperProps={{
                                sx: {
                                  backgroundColor: '#0B0C10',
                                  color:'white'
                                },
                              }}
                              sx={{
                                display: 'block',
                                marginTop: '10px',
                                fontFamily:"'Candara',sans-serif",
                              }}
                            >
                            <MenuItem
                              component={NavLink}
                              to={'/jobOpenings'}
                              onClick={handleServicesMenuClose} 
                            >
                              <span style={{
                                fontFamily:"'Candara',sans-serif",
                                fontSize:'20px',
                                fontWeight:500
                              }}>Job Openings</span>
                            </MenuItem>     
                            <MenuItem
                              component={NavLink}
                              to={'/whyUs'}
                              onClick={handleServicesMenuClose}
                            >
                            <span style={{
                                fontFamily:"'Candara',sans-serif",
                                fontSize:'20px',
                                fontWeight:500
                              }}>Why Us</span>
                            </MenuItem> 
                          </Menu>
                          )}
                        </ListItem>
                        {/* All pages */}
                        {/* <ListItem 
                          component={NavLink} to={'/allpages'}
                          activeStyle={activeLinkStyle}
                          key={'Home'}
                          onClick={handleCloseNavMenu}
                          sx={{
                          my: 2, color: 'white', 
                          display:'flex',
                          alignItems:'center',
                          justifyContent:'center',
                          width:'100%',
                          '&:hover': {
                            color: 'red',
                            borderBottom:'1px solid red'
                          } 
                          }}
                        >
                          <span style={{ whiteSpace: 'nowrap'}}>
                            All Pages
                          </span>
                        </ListItem> */}
                      </List>
                  </Box>
                {/* contact us button */}
                  <Box sx={{display:"flex",justifyContent:"end"}}>
                    <Link to='/contact'>
                      <Button
                        variant='contained'
                        sx={{
                          size:{sm:'small',md:'medium',md:'medium'},
                          color: 'white',
                          bgcolor: 'red',
                          border: '1px solid red',
                          borderRadius: '5px',
                          padding: '5px 10px',
                          textTransform: 'uppercase',
                          '&:hover': {
                            backgroundColor: 'darkred',
                          },
                          whitespace:'none'
                        }}
                      >
                        <Typography variant='h6' fontFamily="'Roboto', sans-serif"
                          size={{xs:'12px',sm:'small',md:'medium',lg:'medium'}}
                        >
                          CONTACT
                        </Typography>
                      </Button>
                    </Link>
                  </Box>
              </div>
            </div>
              {/* <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top', 
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu> */}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default NavBar;