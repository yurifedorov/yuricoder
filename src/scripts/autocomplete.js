// скрипт для автозаполнения форм
// источник: https://html5css.ru/howto/howto_js_autocomplete.php 

function autocomplete(inp, arr) {
  /* функция автозаполнения принимает два аргумента,
  элемент текстового поля и массив возможных значений автозаполнения: */
  var currentFocus;
  /*выполнение функции при записи в текстовое поле:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /* закрыть все уже открытые списки значений автозаполнения */
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /* создать элемент DIV, который будет содержать элементы (значения): */
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /* добавить элемент DIV в качестве дочернего элемента контейнера автозаполнения :*/
      this.parentNode.appendChild(a);
      /* для каждого элемента массива... */
      for (i = 0; i < arr.length; i++) {
        /* проверка, начинается ли элемент с тех же букв, что и значение текстового поля: */
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /* создание элемента DIV для каждого совпадающего элемента: */
          b = document.createElement("DIV");
          /* сделать соответствующие буквы жирным шрифтом: */
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /* вставить поле ввода, которое будет содержать значение текущего элемента массива: */
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /* выполнение функции при нажатии на значение элемента (DIV element): */
          b.addEventListener("click", function(e) {
              /* вставьте значение текстового поля автозаполнения: */
              inp.value = this.getElementsByTagName("input")[0].value;
              /* закрыть список значений автозаполнения,
              или любые другие открытые списки значений автозаполнения :*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /* выполнение функции нажатие клавиши на клавиатуре: */
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /* Если нажата клавиша со стрелкой вниз,
        увеличить текущую переменную фокуса: */
        currentFocus++;
        /* и сделать элемент более видимым: */
        addActive(x);
      } else if (e.keyCode == 38) { // вверх
        /* Если нажата клавиша со стрелкой вверх,
        уменьшить текущую переменную фокуса: */
        currentFocus--;
        /* и сделать элемент более видимым: */
        addActive(x);
      } else if (e.keyCode == 13) {
        /* Если нажата клавиша ENTER, запретить отправку формы, */
        e.preventDefault();
        if (currentFocus > -1) {
          /* и имитировать щелчок на "активном" элементе: */
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /* функция для классификации элемента как "активный": */
    if (!x) return false;
    /* начните с удаления класса "active" для всех элементов: */
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /* добавить класс "autocomplete-active": */
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /* функция удаления класса "active" из всех элементов автозаполнения: */
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /* закрыть все списки автозаполнения в документе,
    кроме одного, переданного в качестве аргумента: */
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /* выполнение функции при щелчке в документе: */
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
      });
}

/* Массив, содержащий все названия стран мира: */
var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

/* запустить функцию автозаполнения в элементе "myInput", и передать массив 'countries' в качестве возможных значений автозаполнения: */
autocomplete(document.getElementById("inputOne"), countries);
autocomplete(document.getElementById("inputTwo"), countries);