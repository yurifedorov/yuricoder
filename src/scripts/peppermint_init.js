//запустить Peppermint и сохранить API
var slider = Peppermint(document.getElementById('peppermint')),
    //сохранить ссылки на HTML-ноды
    rightArr = document.getElementById('right-arr'),
    leftArr = document.getElementById('left-arr'),
    getSlidesNumberButton = document.getElementById('getslidesnumber');

//клик по `#right-arr` переключит на следующий слайд
rightArr.addEventListener('click', slider.next, false);

//клик по `#left-arr` переключит на предыдущий слайд
leftArr.addEventListener('click', slider.prev, false);