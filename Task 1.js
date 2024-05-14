function generateDiv() {
    let width = document.getElementById("widthSelect").value;
    let div = document.createElement("div");
    div.style.backgroundColor = "red";
    div.style.width = `${width}px`;
    div.style.height = "30px";
    document.getElementById("generatedDiv").innerHTML = "";
    document.getElementById("generatedDiv").appendChild(div);
  }
  
  function moveUp() {
    let div = document.getElementById("generatedDiv");
    let currentTop = parseInt(div.style.top) || 0;
    div.style.top = `${currentTop - 20}px`;
  }
  
  function moveDown() {
    let div = document.getElementById("generatedDiv");
    let currentTop = parseInt(div.style.top) || 0;
    div.style.top = `${currentTop + 20}px`;
  }
  