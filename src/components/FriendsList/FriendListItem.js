import React from 'react';
import PropTypes from 'prop-types';

import { FriendlistItem } from './FriendList.styled';
import { FriendName } from './FriendList.styled';
import { Friendliststatus } from './FriendList.styled';

const FriendListItem = ({ name, isOnline, avatar }) => {
  return (
    <FriendlistItem>
      <Friendliststatus isonlinenow={isOnline}></Friendliststatus>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendlistItem>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
