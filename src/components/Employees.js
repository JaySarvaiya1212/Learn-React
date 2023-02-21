import React, { useState } from 'react';

const Employees = ({ name, post }) => {
  const [view, setView] = useState(true);
  return (
    <>
      <button onClick={() => setView(!view)}>
        {view ? 'Hide Employees' : 'Show Employees'}
      </button>
      {view ? (
        <p>
          Employee {name} is a {post}
        </p>
      ) : (
        <p>You cannot see the data</p>
      )}
    </>
  );
};

export default Employees;
