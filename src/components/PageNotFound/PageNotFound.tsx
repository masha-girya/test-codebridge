import React from 'react';
import { Link } from 'react-router-dom';

export const PageNotFound: React.FC = () => {
  return (
    <div className="PageNotFound">
      <div className="PageNotFound__container" />
      <p className="PageNotFound__text">
        Oops, seems you are lost
      </p>
      <Link to="/" className="PageNotFound__link">
        Go back home
      </Link>
    </div>
  );
};
