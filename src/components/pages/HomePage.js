import React from 'react';
//

const logo = 'http://placekitten.com/200/300';

export default () => (
  <div className="text-center">
    <header className="bg-purple-darker m-6 p-6 rounded shadow-lg">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="text-white text-3xl">Welcome to React</h1>
    </header>
    <p className="text-base">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);
