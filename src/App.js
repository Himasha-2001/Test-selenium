import React, { useState } from 'react';
import './App.css';
import Form from './components/forms';
import SuccessMessage from './components/SucessesMessage';

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <div className="App">
      <h1>React Selenium Testing</h1>
      {formSubmitted ? (
        <SuccessMessage />
      ) : (
        <Form onSubmit={handleFormSubmit} />
      )}
     
    </div>
   
  );
}

export default App;
