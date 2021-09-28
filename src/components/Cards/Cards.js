import React from 'react';
import { Fab } from '@mui/material';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';


const Cards = (props) => {
    const {item,handle} = props;
    const {strInstructions,strMeal,strMealThumb} =item;
    return (
        
             <Grid item md={4} xl={2} xs={12}>
             <Card  sx={{ boxShadow: 3 }} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={strMealThumb}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {strMeal}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {strInstructions.slice(0,80)}
        </Typography>
      </CardContent>
      <CardActions>
      <Fab onClick={()=>handle(item)} color="primary" aria-label="add">
         <AddCircleIcon />
       </Fab>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
             </Grid>
       
    );
};

export default Cards;