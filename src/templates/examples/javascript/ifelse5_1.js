{% block code %}
var access;
var age = prompt('Сколько вам лет?', '');
if (age >= 18) {
  access = true;
} else {
  access = false;
}
alert(access);
{% endblock %}