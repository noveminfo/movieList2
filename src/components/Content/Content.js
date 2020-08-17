import React, { useState, useEffect } from 'react'
import MovieCard from '../Card/MovieCard'

import Grid from '@material-ui/core/Grid'
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 0,
    paddingTop: '140%'
  }
});

const Content = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    const apiToken = '74fae36472e5adab668ae23e55efb954';
    const fetchJson = async () => {
      await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiToken}`)
        .then(response => response.json())
        .then(json => setData(json.results)
      )
      setLoading(false);
    };
    fetchJson();
  }, []);

  return (
    <Grid container spacing={2}>
      {loading ? (
        Array.from(new Array(12)).map((_, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Skeleton className={classes.media} variant='rect' />
            <Skeleton />
            <Skeleton width="60%" />
          </Grid>
        ))
      ) : (
        data.map(movie => (
          <Grid key={movie.id} item xs={12} sm={6} md={3}>
            <MovieCard
              movie={movie}
            />
          </Grid>
        ))
      )}
    </Grid>
  )
}

export default Content
