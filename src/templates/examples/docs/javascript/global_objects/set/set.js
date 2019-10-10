'use strict';

let set = new Set();

let alex = {name: "Alex"};
let bob = {name: "Bob"};
let mike = {name: "Mike"};
let john = {name: "John"};

// посещения, некоторые пользователи заходят много раз
set.add(alex);
set.add(bob);
set.add(mike);
set.add(john);
set.add(john); // John зашел 2 раз

// set сохраняет только уникальные значения
alert( set.size ); // 4

set.forEach( user => alert(user.name ) ); // Alex, Bob, Mike, John