import React from 'react';
import useStyles from './style';
import spinner from '../../spinner.gif';

export default function Spinner() {
  const classes = useStyles();
  return (
    <div className={classes.spinner}>
      <img width='100' height='100' src={spinner}/>
    </div>
  );
}