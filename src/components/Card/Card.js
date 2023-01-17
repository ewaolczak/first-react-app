import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import styles from './Card.module.scss';

const Card = (props) => {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  const dispatch = useDispatch();
  const cardId = props.cardId;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite( cardId ));
    setIsFavorite((prev) => !prev);
  };

  console.log(isFavorite);

  return (
    <li className={styles.card}>
      {props.title}
      <button
        className={clsx(styles.favorite_icon, isFavorite && styles.isFavorite)}
        onClick={handleSubmit}>
        <i className={clsx('fa fa-star-o', styles.star)}></i>
      </button>
    </li>
  );
};

export default Card;
