import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import Form from './Form.js'
import { createTheme, ThemeProvider } from '@mui/material/styles';


console.log('Trust the process and keep going!! LFG ')
console.log('Are you still moving! Go Baby, you got this')
// Material UI librariees

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

export default function FullWidthGrid() {

  return (
    <ThemeProvider theme={theme}>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} xl={11}>
          <Typography variant="h3" style={{ color: '#34608F', textAlign: 'center' }}>
            Request vendors for quotes
            </Typography>
        </Grid>
        <Grid item xs={12} md={12} xl={12}>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>
    </ThemeProvider>

  );
}