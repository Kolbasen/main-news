import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  CssBaseline,
} from '@material-ui/core';

import PermIdentity from '@material-ui/icons/PermIdentity';
import { setToken } from '../../../helpers/tokenHelpers';
import { loginQuery } from '../../../helpers/apiHelpers';

import useStyles from './style';

export default function AdminLogin () {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (username, password, e) => {
    setSubmitting(true);
    const data = { username, password };
    try {
      const result = await loginQuery(data);
      console.log(result);
      if (result.success) {
        if (result.entity.token) {
          setToken(result.entity.token);
          setRedirect(true);
        }
      } else {
        setSubmitting(false);
        setError(result.entity.error);
      }
    } catch (error) {
      setSubmitting(false);
      setError('Some error');
    }
  };

  if (redirect) {
    return <Redirect to='/admin' />;
  }

  return (
    <Container component='main' maxWidth='xs'>
      {
        error
      }
      <CssBaseline />
      <div className={classes.elements}>
        <Avatar>
          <PermIdentity />
        </Avatar>
        <Typography component='h1' variant='h5'>
			Sing In
        </Typography>
        <form className={classes.form}>
          <Grid className={classes.input}>
            <TextField
              id='username'
              label='Login'
              value={username}
              onChange={({target}) => setUsername(target.value)}
              autoFocus
              fullWidth
            />
          </Grid>
          <Grid className={classes.input}>
            <TextField
              id='password'
              label='Password'
              type='password'
			  value={password}
			  onChange={({target}) => setPassword(target.value)}
              fullWidth
            />
          </Grid>
          <Grid>
            <Button className={classes.submit}
              type='submit'
              fullWidth
              color='primary'
			  variant='contained'
			  onClick={(e) => {
                e.preventDefault();
                handleSubmit(username, password);
              }}
            >
              {
                submitting ? 
                  'Logging in...' :
                  'Log In'
              }
            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
