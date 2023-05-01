import PropTypes from 'prop-types';

const Friends = ({ descr }) => {
    return (
        <ul className="friend-list">
          {descr.map(({ id, name, isOnline, avatar }) => (
        <li key={id}>
        <span className={isOnline ? 'statusonline' : 'statusoffline'}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li> 
          ))}
        </ul>
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