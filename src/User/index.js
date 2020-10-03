import React from 'react';
import './index.css';

export function User({data}) {

  return (
    <div>
      {data.login}
    </div>
  );
}