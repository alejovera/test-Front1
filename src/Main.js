import React, {useState} from 'react'

import Table from './Table';
import './Main.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import LocationOnIcon from '@material-ui/icons/LocationOn';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   title: {
//     display: 'none',
//     // justifyContent: 'space-between',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   },
//   search: {
//     position: 'relative',
//     display: 'flex',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.common.white, 0.25),
//     },
//     marginLeft: '2em',
//     width: '50%',
    
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

function Main() {
  // const classes = useStyles();


  const [count, setCount] = useState([1,2,3,4,5,6])


  const handleClick = e => {
      e.preventDefault()
      setCount(count.concat([3]))
      console.log(count);
  }



  return (
    <div>
      <div className="searchBar__container">
      
      <AppBar position="" className="appbar">
        <Toolbar className="toolbar">
          
          <div className="appbar__left">
            <LocationOnIcon color="primary" />
            <h4 className="appbar__location">Locations</h4>
          </div>
          <div className="appbar__rigth">
            <div className="searchBar">
                <div className="searchIcon">
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search"
                  className="inputbase"
                  inputProps={{ 'aria-label': 'Search' }}
                />
            </div>
            <div className="searchBar__addContainer" onClick={handleClick}>
              <AddCircleOutlineIcon style={{fontSize: 25}} className="searchBar__addBtn" />
            </div>
            <div className="searchBar__list">
              <FormatListBulletedIcon />
            </div>
          </div>
            
        </Toolbar>
        
      </AppBar>
      </div>
      
        <Table counter={count} />
    </div>

  );
}

export default Main;
