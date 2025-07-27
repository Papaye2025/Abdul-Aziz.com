var icon = document.getElementById("icon");

  icon.onclick = function(){
  document.body.classList.toggle("Dark-theme");
  if(document.body.classList.contains("Dark-theme")){
    icon.src = "sun.png";
  }else{
    icon.src = "moon.png";
  }
}


