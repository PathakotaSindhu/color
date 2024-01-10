const button=document.querySelector("button");
const body=document.querySelector("body");
const color=["indigo","blue","pink","red","green","orange","white"]
body.backgroundColor='pink';

document.querySelector("button").addEventListener("click",function(){
const colorIndex=parseInt(Math.random()*color.length);
body.style.backgroundColor=color[colorIndex];
});
