import React from 'react';
import coverImage from "../../assets/img/06fb3665-0875-45bb-9574-b33a5a1fd1cb.jpg";

const Cover = () => {
  return (
    <div>
      <img src={coverImage} style={{ width: '100%' }} alt="cover" />
    </div>
  );
};

export default Cover;