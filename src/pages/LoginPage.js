import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../styles/style.css';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../assets/logo.png';
import banner from '../assets/login-banner.png'




const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={6} md={6} component={Paper} elevation={0} square sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src={logo} alt="logo" width={'200px'} />
            <Typography component="h1" variant="h1" className='welcome-text'>
              Bine ai revenit
            </Typography>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, margin: '30px 180px 0px 180px' }}>
              <Button

                fullWidth
                variant="contained"
                className='login-microsoft-button'
              >
                <img src="https://img.icons8.com/color/48/000000/microsoft.png" alt="microsoft" style={{ marginRight: '10px', width: '30px' }} />
                Loghează-te cu Microsoft
              </Button>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className='login-button'
              >
                Loghează-te
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={false} sm={6} md={6}
          sx={{
            backgroundColor: '#E6F2FF',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img src={banner} alt="banner" style={{ display: 'inline-block', height: '700px', zIndex: 99, marginLeft: '-100px' }} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}