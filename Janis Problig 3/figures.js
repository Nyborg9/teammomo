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

function circleSvg(radius, mode, color) {
    if (mode=="solid"){
    document.getElementById("Container").innerHTML = '<svg><circle r="'+ radius +'" cx="200" cy="70"  fill='+ color +'></circle></svg>'
}
    else if (mode="outline"){
    document.getElementById("Container").innerHTML = '<svg><circle r="'+ radius +'" cx="50" cy="50" fill="none" stroke='+ color +'></circle></svg>'
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

function rectangleSvg(length, height, mode, color) {
    if (mode=="solid"){
        document.getElementById("Container").innerHTML = document.getElementById("Container").innerHTML + '<svg><rect height="'+ height +'" width="'+ length +'" cx="20" cy="200"  fill='+ color +'></rect></svg>'
    }
        else if (mode="outline"){
        document.getElementById("Container").innerHTML = '<svg><rect height="'+ height +'" width="'+ length +'" cx="200" cy="200" fill="none" stroke='+ color +'></circle></svg>'
        }
}

rectangle(400, 100, "solid", "orange", 0, 0);
rectangle(30, 10, "solid", "black", 140, 50);
circle(5, "solid", "red", 240, 30);


circleSvg(60, "solid", "red")

rectangleSvg(50,50,"solid","blue")