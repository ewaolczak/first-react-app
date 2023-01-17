import React from 'react';
import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { getIsFavorite } from '../../redux/cardsRedux';
import { useSelector } from 'react-redux';

const Favorite = () => {
  const favoriteCards = useSelector(getIsFavorite);

  if (favoriteCards.length === 0)
    return (
      <div className={styles.favorite}>
        <PageTitle>Favorite</PageTitle>
        <p className={styles.no_favorite_cards}>No favorite cards</p>
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
              cardId={favoriteCard.id}
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
