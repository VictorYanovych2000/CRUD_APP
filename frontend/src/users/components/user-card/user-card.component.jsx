import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import {UserCard} from "./user-card.styles";
import {UserCardText} from "./user-card.styles";

const UserCard = ({ id, username, email, profileCount }) => {
  const history = useHistory();
  const match = useRouteMatch();
  const handleUserClick = () => history.push(`${match.url}/${id}`);

  return (
    <UserCard onClick={handleUserClick}>
      <UserCardText isUsername>{username}</UserCardText>
      <UserCardText>{email}</UserCardText>
      <UserCardText>{profileCount}</UserCardText>
    </UserCard>
  );
};

export default UserCard;
