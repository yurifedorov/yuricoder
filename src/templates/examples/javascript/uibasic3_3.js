{% block code %}
var age = confirm("Есть 18?");
if (age == true) {
    alert('Добро пожаловать!');
} else {
    alert('Заходите попозже!');
}
{% endblock %}