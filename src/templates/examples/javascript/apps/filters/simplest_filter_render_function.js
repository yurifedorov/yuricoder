let list = ['JavaScript','Kotlin','Rust','PHP','Ruby','Java','MarkDown','Python','C++','Fortran','Assembler']
const result = document.getElementById('results')
renderList(list,result)
function renderList(_list=[],el=document.body){
  _list.forEach(i=>{
    let new_el = document.createElement('li')
    new_el.innerHTML=i
    el.appendChild(new_el)
  })
}