import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // marginTop:20,
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function GroupSizesColors() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
       size="small" color="primary" 
       style={{borderColor:'#FFFFFF', color:'#FFFFFF'}}
        // aria-label="small outlined button group"
      >
        <Button>Popular</Button>
        <Button>Upcoming</Button>
        <Button>Three</Button>
      </ButtonGroup>
      
    </div>
  );
}