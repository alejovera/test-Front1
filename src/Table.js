import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Table.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';


const useStyles = makeStyles(  ({
    root: {
      flexGrow: 1,
    },
    
    paper: {
      padding: '30px',
      textAlign: 'center',
      color: 'black',
      backgroundColor: 'white',
      boxShadow: '3px 3px 3px 3px #ccc',
    },
  }));

function Table() {
    const classes = useStyles();
    return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <div className="item">
                                <div className="item__info">
                                    <h3 className="item__directionName">Hola</h3>
                                    <p className="item__directionData">Buenos Aires</p>
                                    <p className="item__directionData">San Diego</p>
                                    <p className="item__directionData">5463-4938</p>
                                </div>
                                <div className="item__iconsRow">
                                    <div className="item__icons">
                                        <AccessAlarmIcon />
                                        <p>14</p>
                                    </div>
                                    <div className="item__icons">
                                        <AccessAlarmIcon />
                                        <p>14</p>
                                    </div>
                                    <div className="item__icons">
                                        <AccessAlarmIcon />
                                        <p>14</p>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>xs=6</Paper>
                    </Grid>
                </Grid>
            </div>
    )
}

export default Table;
