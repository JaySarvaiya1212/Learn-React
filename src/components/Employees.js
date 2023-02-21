import React, { useState } from 'react';

const Employees = ({ name, post }) => {
  const [view, setView] = useState(true);
  return (
    <div className='bg-gray-400'>
      <button onClick={() => setView(!view)}>
        {view ? 'Hide Employees Data' : 'Show Employees Data'}
      </button>
      {view ? (
        <p>
          Employee {name} is a {post}
        </p>
      ) : (
        <p>You cannot see the data</p>
      )}
    </div>
  );
};

export default Employees;
