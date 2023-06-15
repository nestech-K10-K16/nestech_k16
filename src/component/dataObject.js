import React from 'react';

const DataObject = (props) => {
  const { data } = props;

  return <div>{JSON.stringify(data)}</div>;
};

export default DataObject;
