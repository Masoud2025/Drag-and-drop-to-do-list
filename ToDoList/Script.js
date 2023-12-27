var button1 = document.getElementById('btn');
var toDoLists =  document.getElementById("inputTask");
var id = 1,
  topic = {
    value: 13
  },
  textarea = {
    value: 131313
  };

button1.addEventListener('click', function() {
  let value = document.getElementById("myInput").value;
  const elements = `<h1 id="drag1"draggable="true" ondragstart="drag(event)" width="336" height="69">${value}</h1>
  `;
  toDoLists.insertAdjacentHTML('beforeend', elements);
  id++;
});
// Reset Button 
const Reload =()=>{ 
  location.reload();
}
//drag and drop
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
