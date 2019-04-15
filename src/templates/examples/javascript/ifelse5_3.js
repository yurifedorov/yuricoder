{% block code %}
var age = prompt('Введите число:', '');
var access = (age >= 18) ? true : false;
alert(access);
{% endblock %}