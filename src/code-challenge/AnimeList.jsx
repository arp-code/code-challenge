import React from 'react';
import { Card } from './Card';
// import { filterAndSortAnimeList } from './helpers';

// Request "http://localhost:3000/list"

const AnimeList = () => {
  return (
    <div className="anime-list">
      <h1>Anime List</h1>

      <div className="anime-list-cards">
        <Card name="Name" image="image.jpg" />
      </div>
    </div>
  );
};

export default AnimeList;
