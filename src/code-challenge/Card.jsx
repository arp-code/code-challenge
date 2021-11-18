import React from 'react';
// import { formatName } from './helpers';

export const Card = ({ name, image }) => (
  <div className="card">
    <div className="card-image">{image}</div>
    <div className="card-name">{name}</div>
  </div>
);
