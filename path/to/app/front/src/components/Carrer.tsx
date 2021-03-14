import React from 'react';
import { TextField, Grid, InputLabel, Typography } from '@material-ui/core';
import { PROFILE } from '../domain/services/profile';

import useStyles from './styles';

const Career = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant='h5' component='h3' className={classes.title}>
        職歴
      </Typography>
      <TextField
        className={classes.formField}
        fullWidth
        label={PROFILE.CARRERS.COMPANY}
      />
      <TextField
        className={classes.formField}
        fullWidth
        label={PROFILE.CARRERS.POSITION}
      />
      <div className={classes.careerSpan}>
        <InputLable shrink>{PROFILE.CARRERS.SPAN}</InputLable>
        <Grid
          container
          spacing={1}
          alignContent='space-between'
          alignItems='center'
        >
          <Grid item xs={5}>
            <TextField
              fullWidth
              type='month'
              InputLabelProps={{
                shrink: true
              }}
              />
          </Grid>
          <Grid item xs={2}>
            <Typography align='center'>〜</Typography>
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              type='month'
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
