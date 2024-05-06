import React, { useState, useEffect } from 'react';

const Revert = ({ s }) => {
  const [revertedString, setRevertedString] = useState(s);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevertedString(prevString => {
        return prevString.charAt(prevString.length - 1) + prevString.substring(0, prevString.length - 1);
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>{revertedString}</div>;
}

export default Revert;