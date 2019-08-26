let str = prompt('2 + 2 = ?', ''); // prompt() возвращает string
let num = Number(str); // преобразуем string в number

switch (num) {
  case 3:
    alert( 'близко, но нет' );
    break;
  case 4:
    alert( 'верно' );
    break;
  case 5:
    alert( 'близко, но нет' );
    break;
  default:
    alert( "не верно" );
}