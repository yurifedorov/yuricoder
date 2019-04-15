{% block code %}
if (1 || 0) { // сработает как if( true || false )
  alert( 'верно' );
}
{% endblock %}