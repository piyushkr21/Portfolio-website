function openProfile(){
document.getElementById("profilePanel").style.right="0";
}

function closeProfile(){
document.getElementById("profilePanel").style.right="-350px";
}


const words=["Full Stack Developer","Web Developer","Programmer"];

let i=0;
let j=0;
let currentWord="";
let isDeleting=false;

function type(){

currentWord=words[i];

if(isDeleting){

document.getElementById("typing").textContent=currentWord.substring(0,j--);

if(j<0){
isDeleting=false;
i=(i+1)%words.length;
}
}
else{
document.getElementById("typing").textContent=currentWord.substring(0,j++);
if(j===currentWord.length){
isDeleting=true;
setTimeout(type,1000);
return;
}
}
setTimeout(type,120);
}
type();