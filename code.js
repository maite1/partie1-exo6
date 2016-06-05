function recuperation(){
  var premiernombre = document.getElementById('premier_nombre').value;
  var deuxiemenombre = document.getElementById('deuxieme_nombre').value;
   if (isNaN (premiernombre) == true || isNaN (deuxiemenombre) == true){
     alert('error');
   }
   else{
    premiernombre = parseFloat(premiernombre);
    deuxiemenombre = parseFloat(deuxiemenombre);
    var result = premiernombre % deuxiemenombre;
    alert(result);
   }
}
