import React from 'react';

const Title = (props) => {
  const { count, click } = props;

  console.log('render children');

  return (
    <div>
      giá trị hiện tại click >>> {click} | count >>> {count}
    </div>
  );
};

export default React.memo(Title);
