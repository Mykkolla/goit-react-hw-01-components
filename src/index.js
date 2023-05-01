import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/Profill/ProfilApp.jsx';
import { Stat } from './components/Stats/statsapp.jsx';
import { FriendsList } from './components/FriendsList/friendsapp.jsx';
import { Transaction } from './components/Transactions/transactApps.jsx';
import './index.css';



const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
    <Stat />
    <FriendsList />
    <Transaction />
  </React.StrictMode>
);

