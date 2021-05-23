import React from 'react';
import Card from './Card';
import '../../assets/styles/Main/CardsList.scss';

const CardsList = ({ data, mode }) => {
  return (
    <section className={`card-list--${mode}`}>
      {data.map((cardData) => {
        return <Card cardData={cardData} mode={mode}></Card>;
      })}
    </section>
  );
};

export default CardsList;
