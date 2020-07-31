import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppNavbar from './components/AppNavBar.js';
import UserReact from './UserList.js'

function App() {
  return (
    <div className="App">
	  <AppNavbar/>
	  <UserReact/>



    </div>
  );
}

export default App;
