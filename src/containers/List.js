import React, { useState, useEffect } from 'react';
import MovieCard from '../components/Card/MovieCard'

function List() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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
    <div className='row'>
      {loading ? (
        <p>Loading</p>
      ) : (
          data.map(movie =>
            <div key={movie.id} className='col-sm-3'>
              <MovieCard
                movie={movie}
              />
            </div>
          )
        )}
    </div>
  );

}

export default List;