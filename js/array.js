const characters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
  },
];

//1. Get an array of all heights, name
//cách 1
let new_array = [];
new_array = characters.map((item, index) => {
  return { height: item.height, name: item.name };
});

console.log('new_array', new_array);

//cách 2
let new_array_01 = [];
for (let i = 0; i < characters.length; i++) {
  new_array_01.push({ height: characters[i].height, name: characters[i].name });
}

console.log('new_array_01 >>>', new_array_01);

//2. get list actor name which height taller than 170
//cách 1
let new_arr = [];
new_arr = characters.filter((item, index) => {
  return parseInt(item.height) > 170;
});
console.log('arr >>>', new_arr);

//cách 2
let new_arr_01 = [];
for (let i = 0; i < characters.length; i++) {
  if (parseInt(characters[i].height) > 170) {
    new_arr_01.push(characters[i]);
  }
}
console.log('arr >>>', new_arr_01);

//3. push random actor information

characters.push({
  name: 'Nguyen Van A',
  height: '190',
  mass: '94',
  eye_color: 'blue',
  gender: 'male',
});

let name = 'Nguyen Van A';

console.log('update >>', characters);
console.log('update >>', [
  ...characters,
  {
    name,
    height: '190',
    mass: '94',
    eye_color: 'blue',
    gender: 'male',
  },
]);

let new_object = {
  1: {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
  },
  2: {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
  },
};

Object.keys(new_object).map((key) => {
  console.log('item - index', new_object[key]);
});

let a = 10;

var b = 10;

const hamA = () => {
  console.log('log hàm A');
};

hamA();
hamB();

function hamB() {
  console.log('log hàm B');
}

//arrow function - không có hoisting
//default function - hoisting
