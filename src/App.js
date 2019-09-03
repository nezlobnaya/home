import React, { useState } from 'react';
import Joke from './Joke';
import Stories from './Stories';
import Jobs from './Job';



function App() {
  const [userQuery, setUserQuery] = useState('');

  const updateUserQuery = e => {
    console.log('userQuery', userQuery);
    setUserQuery(e.target.value);
  }

  const searchQuery =() => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank')
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      searchQuery();
    }
  }


  return (
    <div className="App">
      <h1>Hello Vald!</h1>
      <div className='form'>
        <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress} />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Stories />
      <hr />
      <Jobs />
    </div>
  );
}

export default App;
