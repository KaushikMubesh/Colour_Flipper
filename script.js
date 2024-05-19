
let x=document.getElementById("outer")
let y=document.getElementById("but")
let ans=document.getElementById("res")
let z=[1,2,3,4,5,6,7,8,9]
size="25px"
function back(){
  color1='#'
  var letters = '0123456789ABCDEF';
   for (var i = 0; i < 6; i++) {
    color1 += letters[Math.floor(Math.random() * 16)];
}
    ans.innerHTML=color1
    ans.style.fontSize=size
    ans.style.fontWeight="bold"
   console.log(color1)
   x.style.backgroundColor=color1
}