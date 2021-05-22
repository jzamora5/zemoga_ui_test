import React from 'react';
import Card from './Card';

const CardsList = (props) => {
  return <Card cardData={props.data[0]} mode="grid"></Card>;
};

export default CardsList;
