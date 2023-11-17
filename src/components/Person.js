import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ name, age, email }) => {
  return (
    <div>
      <h2>Person Information</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Person;
