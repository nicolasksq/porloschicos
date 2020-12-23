import React, { useContext } from 'react';
import { AuthContext } from 'context/AuthContext';

export default function PrivateTest() {
  const [dataAuth] = useContext(AuthContext);

  console.log(dataAuth);
  return <h1>Private</h1>;
}
