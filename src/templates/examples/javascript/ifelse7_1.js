{% block code %}
var company = prompt('Столица России?', 'Москва');

(company == 'Москва') ?
   alert('Да, верно') : alert('Неправильно');
{% endblock %}