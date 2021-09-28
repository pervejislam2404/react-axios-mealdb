import axios from 'axios';
import './App.css';
import {useState,useEffect} from 'react'
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import { setDb } from './components/Storage/Storage';
import { Grid } from '@mui/material';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';



function App() {
  
const [item,setItem] =useState([])
const [user,setUser] =useState([])

useEffect(() =>{
axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
.then(response => setItem(response.data.meals))
},[])


function handleData (data) {
  const container = [...user,data]
 setUser(container)
setDb(data.strMeal)
}

  return (
    <div className="App">
    <Header/>
    <Grid container>
      <Grid item xs={12} xl={9}>
      <Grid container p={5} spacing={4}>
      {item.map(itm => <Cards handle={handleData} key={itm.idMeal} item={itm}/>)}
      </Grid>
      </Grid>



      <Grid item sx={{ borderLeft: 1 }} xs={12} xl={3} p={4}>

      {user.map(item => {return (<Card sx={{ display: 'flex',margin: '15px 0' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
      <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {item.strMeal}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           {item.strMeal}
          </Typography>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 158}}
        image={item.strMealThumb}
        alt="Live from space album cover"
      />
    </Card>)})}

      </Grid>



    </Grid>
    </div>
  );
}

export default App;
