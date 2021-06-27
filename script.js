let counter=document.getElementById('counter');
let par=document.getElementById('par');
let brojac=0;
counter.textContent=brojac;


function br(){
   brojac+=1;
  counter.textContent=brojac;
}

function save(){
   par.textContent+=brojac+'-';
   counter.textContent=0;
   brojac=0;
}
