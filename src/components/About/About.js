import React from 'react';
import style from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
  return (
    <div className={style.about}>
      <PageTitle>About</PageTitle>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, vitae!
        Hic, animi voluptates provident culpa officia ipsum veritatis soluta
        incidunt facilis eveniet eligendi impedit debitis, sint ab rem. Optio,
        tempora?
      </p>
    </div>
  );
};

export default About;
