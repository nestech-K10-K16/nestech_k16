import React, { useEffect, useState } from 'react';
import './App.css';
import { DataObject, Title } from './component';

const App = () => {
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(0);
  const [dataObject, setDataObject] = useState({});

  const kiemTraSoNguyenTo = () => {
    var flag = true;
    let n = 11;

    if (n < 2) {
      flag = false;
    }

    for (var i = 2; i < n - 1; i++) {
      if (n % i === 0) {
        flag = false;
        break;
      }
    }

    return flag;
  };

  const currentFlag = kiemTraSoNguyenTo();
  console.log('flag >>>', currentFlag);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => {
        setDataObject(json);
      });
  }, []);

  const tangGiaTri = () => {
    setCount((prevState) => prevState + 1);
    setClick(click + 1);
  };

  const giamGiaTri = () => {
    // setCount(count - 1);
    setCount((pre) => pre - 1);
    setClick(click - 1);
    // console.log('count >>>', count);
  };

  return (
    <div className="container">
      <Title count={count} click={click} />
      <button onClick={tangGiaTri}>Tăng giá trị </button>
      <button onClick={giamGiaTri}>Giam giá trị </button>
      <DataObject data={dataObject} />
      <h1>{currentFlag.toString()}</h1>
    </div>
  );
};

export default App;
