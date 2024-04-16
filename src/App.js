import React from 'react';
import Header from './components/header';
import CardList from './components/cardList';
import Main from './components/main';
function App() {
  //const reactElement = React.createElement('p',{},'No es JSX');

  return (
    <>
      <div className="container">
        <Header/>
        <Main/>
        <CardList/>
      </div>
    </>
  );
}

export default App;
