import React from 'react';
import style from './Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
  return (
    <div className={style.favorite}>
      <PageTitle>Favorite</PageTitle>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
        perspiciatis dolorem voluptatum ipsum repudiandae tempora impedit unde
        explicabo. Tenetur quisquam rerum ea, nulla earum eos perspiciatis
        quaerat quis excepturi quia!
      </p>
    </div>
  );
};

export default Favorite;
