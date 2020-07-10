const saveButton = document.querySelector(".saveBtn");
console.log(saveButton);
const textMsg = document.getElementById("text");
const openDate = new Date();
document.getElementById("currentDay").innerHTML = openDate.toDateString();


const timeRows = document.getElementsByClassName("row");
console.log(timeRows);
let currentHour = parseInt(moment().format("H"));
console.log(currentHour);

Array.from(timeRows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (timeRows) {
    
    if (currentHour === rowHour) {
      setColor(row, "#ff6961");
    } else if ((currentHour < rowHour)) {
      setColor(row, "#77dd77");
    } else if ((currentHour > rowHour)) {
      setColor(row, "#d3d3d3");
    
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}


function renderLastRegistered() {
 
  


}
saveButton.addEventListener("click", function(event) {
  event.preventDefault();

  localStorage.setItem("text", );
  renderLastRegistered();





});


