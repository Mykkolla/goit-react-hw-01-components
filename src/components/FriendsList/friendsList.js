import { Friendlist } from "../FriendsList/FriendList.styled";
import { Friendlistli } from "../FriendsList/FriendList.styled";
import { Friendlistnamespan } from "../FriendsList/FriendList.styled";
import { Friendlistisonlinespan } from "../FriendsList/FriendList.styled";

import PropTypes from 'prop-types';

const Friends = ({ descr }) => {
    return (
        <Friendlist>
          {descr.map(({ id, name, isOnline, avatar }) => (
        <Friendlistli key={id}>
        <Friendlistisonlinespan isonlinenow={isOnline}></Friendlistisonlinespan>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <Friendlistnamespan>{name}</Friendlistnamespan>
      </Friendlistli> 
          ))}
        </Friendlist>
    );
  };

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