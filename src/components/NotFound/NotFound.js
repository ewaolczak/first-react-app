import React from 'react';
import style from './NotFound.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
  return (
    <div className={style.not_found}>
      <PageTitle>404 not found</PageTitle>
    </div>
  );
};

export default Favorite;
