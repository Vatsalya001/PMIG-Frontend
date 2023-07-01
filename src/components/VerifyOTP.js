import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const VerifyOTP = () => {
  const classes = useStyles();
  const [otp, setOTP] = useState('');

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verification logic here
    console.log(`Verifying OTP: ${otp}`);
  };

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Typography variant="h4" align="center">
        Verify OTP
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          label="OTP"
          variant="outlined"
          fullWidth
          className={classes.textField}
          value={otp}
          onChange={handleOTPChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className={classes.button}
        >
          Verify
        </Button>
      </form>
    </Container>
  );
};

export default VerifyOTP;
