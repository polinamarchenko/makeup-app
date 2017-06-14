import React, { Component } from 'react';

  const Brand = ({ match, location }) => {
    const {brand} = match.params;
    return (
      <div>
        {brand}
      </div>
    );
  };
export default Brand;
