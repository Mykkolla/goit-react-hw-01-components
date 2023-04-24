import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import './index.css';

const user = require('./user.json');

// const Profile = ({
//   username,
//   tag,
//   location,
//   avatar,
//   stats
// }) => (
//   <div className="profile">
//     <div className="description">
//       <img
//         src={avatar}
//         alt={username}
//         className="avatar"
//       />
//       <p className="name">{username}</p>
//       <p className="tag">{tag}</p>
//       <p className="location">{location}</p>
//     </div>

//     <ul className="stats">
//       <li>
//         <span className="label">followers</span>
//         <span className="quantity">{stats.followers}</span>
//       </li>
//       <li>
//         <span className="label">views</span>
//         <span className="quantity">{stats.views}</span>
//       </li>
//       <li>
//         <span className="label">likes</span>
//         <span className="quantity">{stats.likes}</span>
//       </li>
//     </ul>
//   </div>
// );
const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

// const Product = ({ user }) => (
//   <>
//     <Profile {...user} />
//   </>
// );

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
  // <React.StrictMode>
  //   <Product user={user} />
  // </React.StrictMode>
);


