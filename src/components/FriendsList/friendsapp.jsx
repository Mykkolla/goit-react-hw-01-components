import Friends from './friendsList'
import datafriends from "../../friends.json";



export const FriendsList = () => {
  return (
<div>
<Friends descr = {datafriends} />
</div>
  );
};