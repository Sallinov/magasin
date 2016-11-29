function feedback(){
  var div = document.createElement('div');
  div.style.width = "70%";
  div.style.height = "auto";
  div.style.position = "fixed";
  div.style.background = "#000";
  div.style.opacity = "0.8";
  div.style.top = "0";
  div.style.left = "15%";
  div.style.zIndex ="99999";
  div.style.fontSize ="50px";
  div.style.padding ="20px 0";
  div.style.color ="#fff";
  div.style.textAlign ="center";
  div.innerHTML = "<div>Ожидайте звонка</div><div>Ожидайте звонка</div>";
  document.body.appendChild(div);
  setTimeout(function() {
    div.parentNode.removeChild(div);
  }, 2500);
}
