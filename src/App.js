import React, { useRef, useState, useEffect } from 'react';
import './style.css';
// dom manupulation -create form save and submit
const App = () => {
  const inputElement = useRef();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [agePlaceHolder, setAgePlaceHolder] = useState('');

  const [city, setCity] = useState('');

  const submit = () => {
    console.log(firstName, lastName, age, city);
  };

  useEffect(() => {
    setAgePlaceHolder(() => {
      if (!age) {
        return;
      }
      if (age < 18) {
        return 'You are very young, go back';
      } else if (age > 40 && age < 100) {
        return 'You are too old';
      } else if (age > 100) {
        setAge('');
        return 'Invalid Entry';
      }
    });
  }, [age]);

  return (
    <form className="simpleForm content-mid">
      <section>
        <label>FirstName:</label>
        <input
          type="text"
          ref={inputElement}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </section>
      <section>
        <label>LastName:</label>
        <input
          type="text"
          ref={inputElement}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </section>
      <section>
        <label>Age:</label>
        <div className="flex-column">
          <input
            type="text"
            ref={inputElement}
            value={age}
            onChange={(e) => {
              console.log(!isNaN(e.target.value));
              return !isNaN(e.target.value)
                ? setAge(e.target.value)
                : setAge('');
            }}
          />
          <span>{agePlaceHolder}</span>
        </div>
      </section>

      <section>
        <label>City:</label>
        <input
          type="text"
          ref={inputElement}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </section>
      <div class="text-align-initial">
        <button type="button" onClick={submit}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default App;
