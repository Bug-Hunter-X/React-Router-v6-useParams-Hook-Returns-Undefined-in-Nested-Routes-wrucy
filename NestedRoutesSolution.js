import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        // Fetch user data based on userId
        const userData = await fetch(`/api/users/${userId}`);
        setUser(await userData.json());
      }
    };
    fetchUser();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile: {user.name}</h1>
      {/* ...other user details... */}
    </div>
  );
};

export default UserProfile;