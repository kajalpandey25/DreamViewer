import { Box, Container, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import PortfolioCards from './PortfolioCards'


const PortDetailContent = () => {
  return (
 <>
  <Box sx={{
    width:'100%',
    height:'100%',
    my:8
  }}
  >
   <PortfolioCards/> 
  </Box>
 </>
  )
}

export default PortDetailContent