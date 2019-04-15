{% block code %}
var x;
true || (x = 1);
alert(x); // undefined, x не присвоен
{% endblock %}