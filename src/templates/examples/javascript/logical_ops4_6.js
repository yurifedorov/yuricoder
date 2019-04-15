{% block code %}
alert( 1 && 2 && null && 3 ); // null
alert( 1 && 2 && 3 ); // 3
{% endblock %}