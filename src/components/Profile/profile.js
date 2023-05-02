import PropTypes from 'prop-types';
import defaultimg from '../../assets/imeges/default.jpg';

import { Description } from './profile.styled';
import { DescriptionIMG } from './profile.styled';
import { ProfileMain } from './profile.styled';
import { DescriptionUL } from './profile.styled';
import { Descriptionli } from './profile.styled';

const Profile = ({ username, tag, location, avatar = defaultimg, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <ProfileMain>
      <Description>
        <DescriptionIMG src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <DescriptionUL>
        <Descriptionli>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </Descriptionli>
        <Descriptionli>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </Descriptionli>
        <Descriptionli>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </Descriptionli>
      </DescriptionUL>
    </ProfileMain>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

// import Profile from './profil';
// import user from '../../data/user.json';

// export const ProfileCard = () => {
//   return (
//     <div>
//       <Profille
//         username={user.username}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         stats={user.stats}
//       />
//     </div>
//   );
// };
