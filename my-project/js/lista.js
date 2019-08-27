NuevaTarea = function() {
  var validate = true;

  var texto = document.getElementById("input").value; //Obtenemos Texto

  console.log(texto.length)
  if(texto == ""){
    validate = false;
  }

  if(validate) {

	var ul = document.getElementById("list"); //Obtenemos lista a ingresar
  var li = document.createElement("li");    //Creamos un elemento del tipo li
  li.setAttribute("class","Normal");
  li.setAttribute("id",ul.length)


  var checkbox = document.createElement('input'); //Crear Checkbox
  checkbox.type = "checkbox";
  checkbox.setAttribute("id", "Tarea") //Agregar id en caso de iterar sobre elementos 
  checkbox.setAttribute("Onclick","myFunction()")
  li.appendChild(checkbox) //Agregamos al li
  li.appendChild(document.createTextNode(" "+texto)); //Agregamos texto al Li
  ul.appendChild(li)
  document.getElementById("input").value = ""; //Elimina tarea seleccionada
	} else {
		alert("Please write an activity");
	}
  
}

function myFunction() {
  // Get the output text
  var ul = document.getElementById("list");

  var items = ul.getElementsByTagName("input");

  var texts = ul.getElementsByTagName("li");


  for (var i = 0; i < items.length; ++i) {
    
    console.log(items[i])
    console.log(i)
     //Iterar sobre type checkbox
    texts[i].className = "Checado"

    if (items[i].checked == true){
      texts[i].className = "Checado"

    } else {
      texts[i].className = "Normal"
    }
  
  }

  var text = document.getElementById("text");

  
} 

confirmar = function() {
var ul = document.getElementById("list");
var items = ul.getElementsByTagName("input");
var texts = ul.getElementsByTagName("li");
for (var i = 0; i < items.length; ++i) {
  console.log(items[i])
  console.log(i)
  items[i].checked = true; //Iterar sobre type checkbox
  texts[i].className = "Checado"

}


}

desconfirmar = function() {
  var ul = document.getElementById("list");
var items = ul.getElementsByTagName("input");
var texts = ul.getElementsByTagName("li");

for (var i = 0; i < items.length; ++i) {
  console.log(items[i])
  items[i].checked = false;//Iterar sobre type checkbox
  texts[i].className = "Normal"
}
}

borrar = function(){
  var ul =document.getElementById("list");
  ul.innerHTML = ''; //Eliminar elementos del ul
}




