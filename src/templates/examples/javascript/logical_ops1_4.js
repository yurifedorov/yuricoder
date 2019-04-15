{% block code %}
var hour = prompt('значение hour:', '9');
if (hour < 10 || hour > 18) {
  alert( 'Закрыто, приходите позже!' );
} else {
  alert( 'Добро пожаловать!' );
}
{% endblock %}