const canvas = document.getElementById("result");
const preview = document.getElementById("preview");
preview.addEventListener("click", prev);

canvas.height = canvas.width / 1.616;
const ctx = canvas.getContext("2d");
ctx.font = "20px Helvetica";

const image = document.getElementById("imgDisplayed");
const logo = document.getElementById("logo");

function prev(){

      let inName = document.getElementById("inName").value;
      let inReg = document.getElementById("inReg").value;
      let inFaculty = document.getElementById("inFaculty").value;
      let inCampus = document.getElementById("inCampus").value;
      let inProgram = document.getElementById("inProgram").value;

      const name = document.getElementById("name");
      const reg = document.getElementById("reg");
      const faculty = document.getElementById("faculty");
      const campus = document.getElementById("campus");
      const program = document.getElementById("program");

      name.innerHTML = inName;
      reg.innerHTML = inReg;
      faculty.innerHTML = inFaculty;
      campus.innerHTML = inCampus + "," + inProgram;
    
      ctx.fillStyle = "#159";
      ctx.rect(0, 0, 300, 56);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.fillText("Busitema University", 10, 25);
      ctx.font = "16px Arial";
      ctx.fillText("Student ID", 15, 45);
      ctx.drawImage(logo, 230, 3, 50, 50);
      ctx.fillStyle = "#000";
      ctx.fillText(name.innerHTML, 110, 90);
      ctx.fillText(reg.innerHTML, 110, 115);
      ctx.fillText(faculty.innerHTML, 110, 140);
      ctx.fillText(campus.innerHTML, 110, 165);
      ctx.drawImage(image, 10, 65, 80, 110);
}

function loadImage(event) {
  const image = document.getElementById("imgDisplayed");
  image.src = URL.createObjectURL(event.target.files[0]);
}

const download = document.getElementById("down");
download.addEventListener("click", function(){

  if(window.navigator.msSaveBlob) {

    window.navigator.msSaveBlob(canvas.msToBlob(), "Card.png");
  } else {

    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = "Card.png";
    a.click();
    document.body.removeChild(a);
  }
});
