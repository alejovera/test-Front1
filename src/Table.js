import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TableContent from './TableContent';



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

function Table(props) {


    const [count, setCount] = useState([0,1,2])
    
    useEffect(() => {
        setCount(props.counter)
    }, [props.counter])

    
    
    const classes = useStyles();
    return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {count.map(item => (
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <TableContent />
                            </Paper>
                        </Grid>
                    ))}
                        
                    
                </Grid>
                
            </div>
    )
}

export default Table;
 