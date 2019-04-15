{% block code %}
var login = prompt('Введите логин', 'admin');

if (login == 'admin') {

  var pass = prompt('Пароль?', '123');
  
  var message =
    (pass == '123') ? 'Доступ разрешен!' :
    (pass == null) ? 'Вход отменён' :
    'Неверный пароль';
    alert(message);

} else if (login == null) { // (**)
  alert('Вход отменён');

} else {
  alert('Пользователь не найден');
}
{% endblock %}