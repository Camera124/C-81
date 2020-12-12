canvas=document.getElementById("myCanvas");
dim = canavas.getContext("2d");
color = "red";
dim.beginPath();
dim.strokeStyle=color;
dim.lineWidth=3;
dim.arc(200, 200, 40 ,0 , 2*Math.PI)
dim.stroke();
