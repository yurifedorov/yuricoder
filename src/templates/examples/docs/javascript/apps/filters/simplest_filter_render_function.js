function renderList(_list=[],el=document.body){
	el.innerHTML='';
  _list.forEach(i=>{
    let new_el = document.createElement('li')
    new_el.innerHTML=i
    el.appendChild(new_el)
  })
  console.timeEnd('test')
}