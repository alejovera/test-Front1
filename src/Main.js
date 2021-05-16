import React, {useState, useEffect} from 'react'

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

function Main() {

  const [items, setItems] = useState({
    items: [
      {
        name: 'Downtown',
        direction: '12345 River Road',
        county: 'San Diego, CA 92159',
        number: '3948-9343'
      },
      {
        name: 'Imperial County',
        direction: '12345 River Road',
        county: 'San Diego, CA 92159',
        number: '3948-9343'
      },
      {
        name: 'North Park',
        direction: '12345 River Road',
        county: 'San Diego, CA 92159',
        number: '3948-9343'
      },
      {
        name: 'South Bay',
        direction: '12345 River Road',
        county: 'San Diego, CA 92159',
        number: '3948-9343'
      },
      {
        name: 'North County',
        direction: '12345 River Road',
        county: 'San Diego, CA 92159',
        number: '3948-9343'
      },
      {
        name: 'Kensington',
        direction: '12345 River Road',
        county: 'San Diego, CA 92159',
        number: '3948-9343'
      },
      {
        name: 'Easy County',
        direction: '12345 River Road',
        county: 'San Diego, CA 92159',
        number: '3948-9343'
      },
      {
        name: 'Inland County',
        direction: '12345 River Road',
        county: 'San Diego, CA 92159',
        number: '3948-9343'
      }

    ]
  })

  // useEffect(() => {
  //   setItems(prevState => ({
  //     items: {
  //       ...prevState.items,
  //       name: 'Alvarado 377'
  //     }
  //   }))

  // }, [])

  

  console.log(items);


  const [count, setCount] = useState([1])


  

  const handleClick = e => {
      e.preventDefault()
      setCount(count.concat([3]))

      setItems({ items: [...items.items, ...[{
        name: 'Easy County',
        direction: '12345 River Road',
        county: 'San Diego, CA 92159',
        number: '3948-9343'
      }] ] })

      console.log(items);
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
      
        <Table items={items} counter={count} />
    </div>

  );
}

export default Main;
