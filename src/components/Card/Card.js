import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';
import styles from './Card.module.scss';

const Card = (props) => {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  const dispatch = useDispatch();
  const cardId = props.cardId;

  const addToFavorite = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite( cardId ));
    setIsFavorite((prev) => !prev);
  };
  const addToTrash = (e) => {
    e.preventDefault();
    dispatch(removeCard( cardId ));
    setIsFavorite((prev) => !prev);
  };

  console.log(isFavorite);

  return (
    <li className={styles.card}>
      {props.title}
      <div className={styles.card_buttons}>
      <button
        className={clsx(styles.favorite_icon, isFavorite && styles.isFavorite)}
        onClick={addToFavorite}>
        <i className={clsx('fa fa-star-o', styles.star)}></i>
      </button>
      <button
        className={styles.trash_icon}
        onClick={addToTrash}>
        <i className={clsx('fa fa-trash', styles.trash)}></i>
      </button>
      </div>
    </li>
  );
};

export default Card;
