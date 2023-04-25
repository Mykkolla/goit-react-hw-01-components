import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/ProfilApp.jsx';
import { Stat } from './components/statsapp.jsx';
import { FriendsList } from './components/friendsapp.jsx';
import { Transaction } from './components/transactApps.jsx';
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

