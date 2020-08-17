import React from 'react';
import propTypes from 'prop-types';
import Popup from 'react-popup';

const Card = ({ movie }) => {
  const handleClick = e => {
    e.preventDefault();
    
    if (movie) {
      Popup.create({
        title: movie.title,
        content: (
          <div>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
        ),
        buttons: {
          right: [{
            text: 'Close',
            action: popup => popup.close()
          }],
        },
      });
    }
  }

  return (
    <div className='card' onClick={handleClick}>
      <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} className='card-img-top' alt={movie.title}/>
      <div className='card-body'>
        <h3 className='card-title'>{movie.title}</h3>
        <p>{`Vote: ${movie.vote_average}`}</p>
        <p>{`Release: ${movie.release_date}`}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    vote_average: propTypes.number,
    release_date: propTypes.string,
    poster_path: propTypes.string,
    overview: propTypes.string
  }).isRequired
};

export default Card;