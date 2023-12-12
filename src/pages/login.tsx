import { Box, Container, Grid, Link, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useUser } from '../hooks/useUser';
import { update_current_user_id } from '../slices/userSlice';
import { AppState } from '~/store';
import { Navigate } from 'react-router';

const Login = () => {
  const [login, setLogin] = useState<'login' | 'register'>('login');
  const user = useSelector((state: AppState) => state.user.current_user);

  const dispatch = useDispatch();
  useUser();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let body = {};
    const password = data.get('password');
    const rePassword = data.get('re-password');
    const surname = data.get('surname');

    if (login == 'login') {
      body = {
        username: surname,
        password,
      };
      const id = await handleLogin(body);
      dispatch(update_current_user_id(id));
    } else {
      if (password !== rePassword) {
        throw new Error("Passwords don't match");
      }
      body = {
        login: data.get('name'),
        pwd: password,
        account: 0,
        lastName: surname,
        surName: surname,
        email: surname,
        cardList: [0],
      };
      handleRegister(body);
    }
  };

  const handleLogin = async (body: unknown) => {
    const response = await fetch('http://localhost:8083/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error('Invalid credentials');
    }
    return (await response.json()) as number;
  };

  const handleRegister = async (body: unknown) => {
    const response = await fetch('http://localhost:8083/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    return await response.json();
  };

  if (user) {
    return <Navigate to="/" replace />;
  }

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
            id="password"
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
              id="re-password"
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

export default Login;
