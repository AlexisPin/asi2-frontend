import { Box, Container, Grid, Link, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { useState } from 'react';

export const Login = () => {
  const [login, setLogin] = useState<'login' | 'register'>('login');
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let body = {};
    if (login == 'login') {
      body = {
        surname: data.get('surname'),
        password: data.get('password'),
      };
    } else {
      body = {
        name: data.get('name'),
        surname: data.get('surname'),
        password: data.get('password'),
        confirm_password: data.get('re-password'),
      };
    }
    console.log(body);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          {login == 'login' ? 'Sign In' : 'Register'}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {login == 'register' && (
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
          )}
          <TextField
            margin="normal"
            required
            fullWidth
            name="surname"
            label="Surname"
            id="surname"
            autoComplete="Surname"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="surname"
            autoComplete="Password"
          />
          {login == 'register' && (
            <TextField
              margin="normal"
              required
              fullWidth
              name="re-password"
              label="Re-Password"
              type="password"
              id="surname"
              autoComplete="Confirm Password"
            />
          )}

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            {login == 'login' ? 'Sign In' : 'Register'}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="#"
                variant="body2"
                onClick={() => setLogin((prev) => (prev == 'login' ? 'register' : 'login'))}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
