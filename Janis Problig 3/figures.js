const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function square(number) {
    return number*number;
}

function circle(radius, mode, color) {
    if (mode == "solid"){
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(200,60,radius,0,2*Math.PI);
        ctx.fill();
        ctx.stroke();
    }
    else if (mode == "outline"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.arc(200,60,radius,0,2*Math.PI);
    ctx.stroke();
}
}

function circleSvg(radius, mode, color) {
    if (mode=="solid"){
    document.getElementById("Container").innerHTML = '<svg><circle r="'+ radius +'" cx="50" cy="50"  fill='+ color +'></circle></svg>'
}
    else if (mode="outline"){
    document.getElementById("Container").innerHTML = '<svg><circle r="'+ radius +'" cx="50" cy="50" fill="none" stroke='+ color +'></circle></svg>'
    }
}

function rectangle(length, height, mode, color) {
    if (mode == "solid"){
        ctx.fillStyle = color;
        ctx.fillRect(10, 10, length, height);
    }
    else if (mode == "outline"){
        ctx.strokeStyle = color;
        ctx.strokeRect(10, 10, length, height)
}

}

function rectangleSvg(length, height, mode, color) {
    if (mode=="solid"){
        document.getElementById("Container").innerHTML = '<svg><rect height="'+ height +'" width="'+ length +'" cx="50" cy="50"  fill='+ color +'></rect></svg>'
    }
        else if (mode="outline"){
        document.getElementById("Container").innerHTML = '<svg><rect height="'+ height +'" width="'+ length +'" cx="50" cy="50" fill="none" stroke='+ color +'></circle></svg>'
        }
}

//rectangle(100, 100, "outline", "red");

//circle(50, "outline", "blue");

//circleSvg(30, "outline", "red")
rectangleSvg(50,50,"outline","blue")