import './App.css';
import { useEffect, useState } from 'react';
import { Box, Button, Grid, TextField ,Typography} from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import * as types from './redux/actionTypes'

function App() {
  const [search,setSearch] = useState("")
  const [query,setQuery] = useState("salad")

  const {recipes} = useSelector((state) => state.data)

  const updateSearch = () => {
    setQuery(search);
    setSearch("")
  }
  let dispatch = useDispatch();
  useEffect(()=>{
    dispatch({type:types.FETCH_RECIPE_START,paylaod:query})
  },[query,dispatch]);
  return (
    <div className="App">
      <h2>Recipe App</h2>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" type="text" value={search}
       onChange={(e)=>setSearch(e.target.value)} 
        variant="outlined" />
      <Button onClick={updateSearch} variant="contained" style={{width:"50px"}}color="primary">Search</Button>
    </Box>
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" >
        {recipes && recipes.length && recipes.map((eachRecipe,index)=>(
         <Grid key={index} item>
              <Typography gutterBottom variant="h5" component="div">
          {eachRecipe.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {eachRecipe.email}</Typography>
         </Grid>
      ))}
        </Grid>
      </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
