import React from 'react';
// import ReactDOM from 'react-dom/client';
import Profile from './components/Profile/profile';
import Statistics from './components/Stats/Statistics';
import Friends from './components/FriendsList/friendsList';
import TransactionHistory from './components/Transactions/Transaction';
import { MainSection } from './components/Style/Loyaut.js';

import user from './data/user.json';
import dataststs from './data/data.json';
import datafriends from './data/friends.json';
import transactionhis from './data/transactions.json';

export const App = () => {
  return (
    <div>
      <MainSection>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={dataststs} />
        <Friends descr={datafriends} />
        <TransactionHistory items={transactionhis} />
      </MainSection>
    </div>
  );
};
