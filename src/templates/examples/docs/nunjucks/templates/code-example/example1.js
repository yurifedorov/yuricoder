// javascript (example-1)
function compareNumeric(a, b) {
 if (a > b) return 1;
 if (a == b) return 0;
 if (a < b) return -1;
}

let arr = [ 1, 2, 15 ];

arr.sort(compareNumeric);