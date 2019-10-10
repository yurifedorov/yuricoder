const user = {
  name: 'Joe',
  age: 25,
  pet: {
    type: 'dog',
    name: 'Buttercup'
  }
};

Object.freeze(user);

user.pet.name = 'Daffodil';

console.log(user.pet.name); // Daffodil