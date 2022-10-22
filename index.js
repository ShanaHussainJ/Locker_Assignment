function clickscreen(val){
    document.getElementById("pwd").value+=val
}
function clearscreen(){
    document.getElementById("pwd").value=""
}
function enterpwd(){
    var text=document.getElementById("pwd").value
    if (text == 1234) {
        alert("Success!");
      } else {
        alert("Incorrect Password");
      }
    
}
