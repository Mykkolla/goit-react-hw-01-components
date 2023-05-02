import { Friendlist } from '../FriendsList/FriendList.styled';
import FriendListItem from './FriendListItem';

import PropTypes from 'prop-types';

const Friends = ({ descr }) => (
  <Friendlist>
    {descr.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </Friendlist>
);

export default Friends;

Friends.propTypes = {
  descr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};
