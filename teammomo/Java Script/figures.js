const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function circle(radius, mode, color, x, y) {
    if (mode == "solid"){
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.arc(x,y,radius,0,2*Math.PI);
        ctx.fill();
        ctx.stroke();
    }
    else if (mode == "outline"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.arc(x,y,radius,0,2*Math.PI);
    ctx.stroke();
}

}

function circleSvg(radius, mode, color, x, y) {
    if (mode=="solid"){
    document.getElementById("Graphics").innerHTML = document.getElementById("Graphics").innerHTML + '<circle r="'+ radius +'" cx="'+x+'" cy="'+y+'"  fill='+ color +'></circle>'
}
    else if (mode="outline"){
    document.getElementById("Graphics").innerHTML = document.getElementById("Graphics").innerHTML + '<circle r="'+ radius +'" cx="50" cy="50" fill="none" stroke='+ color +'></circle>'
    }
}

function rectangle(length, height, mode, color, x, y) {
    if (mode == "solid"){
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.fillRect(x, y, length, height);
    }
    else if (mode == "outline"){
        ctx.strokeStyle = color;
        ctx.strokeRect(x, y, length, height)
}

}

function rectangleSvg(length, height, mode, color, x=0, y) {
    if (mode=="solid"){
        document.getElementById("Graphics").innerHTML = document.getElementById("Graphics").innerHTML + '<rect height="'+ height +'" width="'+ length +'" x="'+x+'" y="'+y+'"  fill='+ color +'></rect>'
    }
        else if (mode="outline"){
        document.getElementById("Graphics").innerHTML = document.getElementById("Graphics").innerHTML + '<rect height="'+ height +'" width="'+ length +'" x="'+x+'" y="'+y+'" fill="none" stroke='+ color +'></rect>'
        }
}

rectangle(400, 100, "solid", "orange", 0, 0);
rectangle(30, 10, "solid", "black", 140, 50);
circle(5, "solid", "red", 240, 30);

circle(100, "solid", "blue", 550, 100);
rectangle(200, 50, "solid", "purple", 550, 50);
rectangle(50, 20, "solid", "red", 690, 30);

rectangle(50, 200, "solid", "pink", 800, 0);
rectangle(30, 10, "solid", "purple", 840, 50);
circle(25, "solid", "white", 840, 30);

rectangle(80, 100, "solid", "brown", 0, 250);
rectangle(50, 10, "solid", "navy", 100, 300);
circle(60, "solid", "green", 75, 315);

rectangle(30, 50, "solid", "green", 200, 250);
rectangle(200, 80, "solid", "white", 260, 270);
rectangle(190, 30, "solid", "pink", 215, 255);

circle(50, "solid", "orange", 555, 305)
rectangle(90, 40, "solid", "purple", 560, 275)
circle(30, "solid", "blue", 550, 290)
