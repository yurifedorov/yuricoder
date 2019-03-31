switch (true) {
  case (window.matchMedia("(min-width: 1900px)").matches):
	// 3 элемента
	var box1 = document.getElementById('box-1');
	var box2 = box1.cloneNode(true);
	var box3 = box1.cloneNode(true);
	box1.parentNode.insertBefore(box2, box1.nextSibling);
	box1.parentNode.insertBefore(box3, box2.nextSibling);
	box2.id = "box-2";
	box3.id = "box-3";
	Split(['#box-1', '#box-2', '#box-3'], {
		sizes: [15, 25, 60],
		gutterSize: 3,
		elementStyle: function (dimension, size, gutterSize) {return {'width': 'calc(' + size + '% - ' + gutterSize + 'px)',}},
		gutterStyle: function (dimension, gutterSize) {return {'width': gutterSize + 'px',}}
	})
	break;

  case (window.matchMedia("(min-width: 1024px)").matches):
	// 2 элемента
	var box1 = document.getElementById('box-1');
	var box2 = box1.cloneNode(true);
	box1.parentNode.insertBefore(box2, box1.nextSibling);
	box2.id = "box-2";
	Split(['#box-1', '#box-2'], {
		sizes: [25, 75],
		gutterSize: 3,
		elementStyle: function (dimension, size, gutterSize) {return {'width': 'calc(' + size + '% - ' + gutterSize + 'px)',}},
		gutterStyle: function (dimension, gutterSize) {return {'width': gutterSize + 'px',}}
	})
	break;
	
  default:
	// 1 элемент
	Split(['#box-1'], {sizes: [102],})}