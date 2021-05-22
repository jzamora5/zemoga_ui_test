import React from 'react';
import Card from './Card';

const CardsList = (props) => {
  return <Card cardData={props.data[0]}></Card>;
};

export default CardsList;
