const ul = $("#ul")
let contador = 0
function add() {
  const inputValue = $("input").val()
  //con val tenemos el valor que tiene el input en ese momento
  $("#ul").append("<li>" + inputValue + " "  + "<button onclick='remove(" + contador + ")'>X</button>" + "</li>")
  contador++
  $("#input").val("")
}
function remove(index) {
  $("ul").children() [index].remove()
  }