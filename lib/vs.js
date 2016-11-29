function show(){
  var myBtn = document.getElementById('krug');
  var myCheckBox = document.getElementById('hd-1');
  var myForm = document.getElementById('form');
  if(myCheckBox.checked){
    myForm.style.display = "table";
    myBtn.style.backgroundImage = "url(img/call.gif)";
  }else{
    myForm.style.display = "none";
    myBtn.style.backgroundImage = "url(img/close.gif)";
  }
}
