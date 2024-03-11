import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the count
      setCount(prevCount => prevCount + 1);
    }, 1000); // Interval of 1 second (1000 milliseconds)

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

export default MyComponent;