{% block code %}
var year = prompt('Год основания С-Петербурга?', '');

if (year < 1703) {
  alert( 'Не верно, это было позднее...' );
} else if (year > 1703) {
  alert( 'Перебор, это было раньше...' );
} else {
  alert( 'Да, точно в этом году!' );
}
{% endblock %}