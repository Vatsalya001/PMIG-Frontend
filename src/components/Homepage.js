import React from 'react';
import {
  Typography,
  Container,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Typography variant="h4" align="center">
        Welcome to the Homepage
      </Typography>
    </Container>
  );
};

export default HomePage;
