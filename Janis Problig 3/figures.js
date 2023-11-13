const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function square(number) {
    return number*number;
}

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

function rectangleSvg(length, height, mode, color, x, y) {
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


//(60, "solid", "red", 80, 80)


circleSvg(60, "solid", "blue", 60, 100)

rectangleSvg(50,50,"solid","red", 50, 80)