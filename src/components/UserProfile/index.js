import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    }
  }, []);
  return (
    <>
      <div className="grid wide profile_container">
        <ul className="profile_information">
          <li className="profile_user-name">{user.name}</li>
          <li className="profile_user-phone"></li>
          <li className="profile_user_email"></li>
          <li className="profile_user_avatar"></li>
        </ul>
      </div>
    </>
  );
};
export default UserProfile;
