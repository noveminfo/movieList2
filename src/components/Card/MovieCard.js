import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 0,
    paddingTop: '140%'
  }
});

const MovieCard = ({ movie }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          title={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='h2'>
            {movie.title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {movie.release_date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default MovieCard