import React from 'react';
import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { getFilteredCards } from '../../redux/store';
import { useSelector } from 'react-redux';

const Favorite = () => {
  const favoriteCards = useSelector(getFilteredCards);

  if (favoriteCards.length === 0)
    return (
      <div className={styles.favorite}>
        <PageTitle>Favorite</PageTitle>
        <p>No favorite cards</p>
      </div>
    );

  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.column}>
        <ul className={styles.cards}>
          {favoriteCards.map((favoriteCard) => (
            <Card
              key={favoriteCard.id}
              cardId={favoriteCard.cardId} // is this necessary?
              title={favoriteCard.title}
              isFavorite={favoriteCard.isFavorite}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Favorite;
