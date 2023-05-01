
import Profile from './profil'
import user from "../../user.json";
// const user = require('../user.json');


export const ProfileCard = () => {
  return (
    <div>
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
</div>
  );
};
