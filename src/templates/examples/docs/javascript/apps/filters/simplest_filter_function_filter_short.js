function filter(val,list){
  console.time('test')
    return list.filter(i=>(~i.indexOf(val)))
  };