{% block code %}
var undef; // переменная не присвоена, т.е. равна undefined
var zero = 0;
var emptyStr = "";
var msg = "Привет!";

var result = undef || zero || emptyStr || msg || 0;

alert( result ); // выведет "Привет!" - первое значение, которое является true
{% endblock %}