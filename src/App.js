import React from 'react';
// import ReactDOM from 'react-dom/client';
import { ProfileCard } from 'components/Profill/ProfilApp.jsx';
import { Stat } from './components/Stats/statsapp.jsx';
import { FriendsList } from './components/FriendsList/friendsapp.jsx';
import { Transaction } from './components/Transactions/transactApps.jsx';
import { GlobalStyle } from "./components/Globalstyl/Globalstyle.js";
import { MainSection } from "./components/Style/Loyaut.js";


export const App = () => {
    return (
<div>
    <MainSection>
    <GlobalStyle />
    <ProfileCard />
    <Stat />
    <FriendsList />
    <Transaction />
    </MainSection>
</div>
    );
  };