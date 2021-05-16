import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TableContent from './TableContent';



const useStyles = makeStyles(  ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
    },
    paper: {
      padding: '20px',
      textAlign: 'center',
      color: 'black',
      backgroundColor: 'white',
      marginLeft: '0.5em',
      marginRight: '0.5em',
      marginBottom: '1em',
      boxShadow: '3px 3px 3px 3px #ccc',
    },
  }));

function Table(props) {


    const [count, setCount] = useState([])
    
    const [data, setData] = useState(props.items)


    console.log(data);

    useEffect(() => {
        setData(props.items)
        setCount(props.counter)
    }, [props.counter])


    
    
    const classes = useStyles();
    return (
            <div className={classes.root}>
                <Grid container spacing={1}>
                    {data.items.map((value, index) => 
                        (
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <TableContent number={value.number} county={value.county} direction={value.direction} name={value.name} />
                            </Paper>
                        </Grid>
                        )
                    )}
            )  
                    
                </Grid>
                
            </div>
    )
}

export default Table;
 