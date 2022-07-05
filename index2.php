<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="style.css">
  <title>Print Student ID</title>
</head>
<body>

  <div class="back">
    <form>
      <h3>Edit this form to print your ID</h3>
      <label>Student name</label>
      <input type="text" id="inName"   placeholder="OKELLO Joel">
       <label>Registration Number</label>
      <input type="text" id="inReg"  placeholder="BU/UG/2021/2342">    
      <label>Faculty</label>
      <input type="text" id="inFaculty"  placeholder="FSE">
      <label>Campus</label>
      <input type="text" id="inCampus"  placeholder="Nagongera">
      <label>Program</label>
      <input type="text" id="inProgram"  placeholder="HPM">
      <label for="file" class="upload">Current Photo</label>
      <br>
      <span>Choose one that describes you perfectly</span>
      <input type="file" id="file" accept="image/*" onchange="loadImage(event)">
    </form>
      <button type="submit" id="preview">Preview</button>


    <div class="container">
      <canvas id="result" class="card">
        <header id="head">
          <img src="./busitema.png" id="logo">
          <div class="camp">
            <h4>Busitema University</h4>
            <span>Student ID</span>
          </div>      
        </header>

        <div class="content">
          <img src="" id="imgDisplayed">
          <ul>
            <li id="name"></li>
            <li id="reg"></li>
            <li id="faculty"></li>
            <li id="campus"></li>
          </ul>
        </div>

    </canvas>
    <button id="down">Download</button>
  </div>


  <script src="main.js"></script>
</body>
</html>
