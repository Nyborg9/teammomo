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

rectangle(30, 50, "solid", "green", 0, 0);
rectangle(200, 80, "solid", "white", 60, 20);
rectangle(190, 30, "solid", "pink", 15, 5);


rectangleSvg(30, 50, "solid", "green", 0, 0);
rectangleSvg(200, 80, "solid", "white", 60, 20);
rectangleSvg(190, 30, "solid", "pink", 15, 5);