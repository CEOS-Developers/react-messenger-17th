import React from 'react';
import { IUser } from '../../interface/interface';

const Profile = ({ userName, userImg, statusMessage }: IUser) => {
  return (
    <div>
      <p>{userName}</p>
      <p>{statusMessage}</p>
    </div>
  );
};

export default Profile;
