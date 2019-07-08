function filter(val,list){
let result=[];
  list.forEach(i=>{
    if(i.indexOf(val)!=-1)
      result.push(i)
  })
return result;
}