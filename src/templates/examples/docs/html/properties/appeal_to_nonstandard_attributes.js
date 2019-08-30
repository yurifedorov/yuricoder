let myImg = document.querySelector('#newLogo');

// вывод в консоль DOM-свойств элемента
console.log(myImg.src);
console.log(myImg.alt);
console.log(myImg.placeholder); // undefined 
console.log(myImg.getAttribute('placeholder')); // "..."