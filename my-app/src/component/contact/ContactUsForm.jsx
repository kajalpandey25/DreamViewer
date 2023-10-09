import React from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import { Container } from '@mui/system';

const formStyle = {
  display:'flex',
  flexDirection:'column',
  backgroundColor: '#0B0C10',
  color: '#FFFFFF',
  padding: '20px',
  borderRadius: '10px',
  marginTop: '20px',
  height:'100%'
};

const headingStyle = {
  color: 'red',
  marginBottom: '20px',
  textAlign:'center'
};

const inputStyle = {
  backgroundColor: '#1F2833',
  color: '#FFFFFF',
  marginBottom: '15px',
  fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
};

const labelStyle = {
  color: '#66FCF1',
  fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
};
const responsiveInputStyle = {
    // for larger screens
    fontSize: '16px',
    padding: '12px',
    '@media (max-width: 768px)': {
      fontSize: '14px',
      padding: '10px',
    },
    '@media (max-width: 480px)': {
      fontSize: '12px',
      padding: '8px',
    },
};

const responsiveLabelStyle = {
  fontSize: '20px',
  '@media (max-width: 768px)': {
    fontSize: '14px',
  },
  '@media (max-width: 480px)': {
    fontSize: '12px',
  },
};
  

const ContactUsForm = () => {
  return (
    <Box
    sx={{
        display:'flex',
        // mt:4,
        boxShadow:'0 4px 6px rgba(255, 255, 255, 0.1), 0 1px 3px rgba(255, 255, 255, 0.06)',
      }}
    >
        <Box sx={formStyle}>
          {/* <Typography variant="h4" style={headingStyle}>
              Join Our Team - Apply Today!
          </Typography> */}
          <form>
              <TextField
              label="Full Name"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              InputProps={{
                style: { ...inputStyle, ...responsiveInputStyle,
                padding:0},
              }}
              InputLabelProps={{
                style: { ...labelStyle, ...responsiveLabelStyle },
              }}
              />
              <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type="email"
              InputProps={{
                style: { ...inputStyle, ...responsiveInputStyle, padding:0 },
              }}
              InputLabelProps={{
                style: { ...labelStyle, ...responsiveLabelStyle },
              }}
              />
              <TextField
              label="Subject"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type="text"
              InputProps={{
                style: { ...inputStyle, ...responsiveInputStyle, padding:0 },
              }}
              InputLabelProps={{
                style: { ...labelStyle, ...responsiveLabelStyle },
              }}
              />
              <TextField
                  label="Phone"
                  variant="outlined"
                  margin='normal'
                  fullWidth
                  required
                  type="tel"
                  InputProps={{
                  style: { ...inputStyle, ...responsiveInputStyle, padding:0 },
                  }}
                  InputLabelProps={{
                  style: { ...labelStyle, ...responsiveLabelStyle },
                  }}
              />
              <TextField
              label="Message"
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              rows={4}
              required
              InputProps={{
                style: { ...inputStyle, ...responsiveInputStyle},
              }}
              InputLabelProps={{
                style: { ...labelStyle, ...responsiveLabelStyle },
              }}
              />
              <Button
              variant="contained"
              color="primary"
              size="large"
              // fullWidth
              sx={{ marginTop: '20px' , width:'40%',
              fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
              }}
              type="submit"
              >
              Submit
              </Button>
          </form>
        </Box>
    </Box>
  );
};

export default ContactUsForm;