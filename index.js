document.getElementById("btn-love").addEventListener('click',demo);
let a=document.getElementById("input-name");
let b=document.getElementById("input-crushname");
let c=document.getElementById("result");
function demo()
{

    if(a.value==""&&b.value!=""){
c.value="Enter Your Name";
}
else if(b.value==""&&a.value!=""){
    c.value="Enter Your Crush Name";
   
    }
else if(a.value==""&&b.value==""){
    c.value="Enter Both Name";
}
else{
    let x=Math.trunc(Math.random()*101);
   
    c.value=x+"%";
}
}