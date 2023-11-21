const ctx = canvas.getContext("2d");
//Constant used to draw in Canvas
function circle(radius, mode, color, x, y) {
    //We chose to have x y coordinates as parameters in all of the functions to make them easier to use
    if (mode == "solid"){
        ctx.beginPath();
        //Starts a path in canvas
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        //choses the color for the outline and the solid color in the circle
        ctx.arc(x,y,radius,0,2*Math.PI);
        //Draws a circle
        ctx.fill();
        //fills the circle
        ctx.stroke();
        //draws the outline
    }
    else if (mode == "outline"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.arc(x,y,radius,0,2*Math.PI);
    ctx.stroke();
    //Draws the same circle without the fill commands
}

}

function circleSvg(radius, mode, color, x, y) {
    if (mode=="solid"){
    document.getElementById("Graphics").innerHTML = document.getElementById("Graphics").innerHTML + '<circle r="'+ radius +'" cx="'+x+'" cy="'+y+'"  fill='+ color +'></circle>'
    //This creates a Circle SVG using the parameters and using the fill attribute
}
    else if (mode="outline"){
    document.getElementById("Graphics").innerHTML = document.getElementById("Graphics").innerHTML + '<circle r="'+ radius +'" cx="50" cy="50" fill="none" stroke='+ color +'></circle>'
    //Creates the same Circle SVG but setting the fill attribute to none, and using the stroke attribute
}
}

function rectangle(length, height, mode, color, x, y) {
    if (mode == "solid"){
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
         //choses the color for the outline and the solid color in the rectangle
        ctx.fillRect(x, y, length, height);
        //Draws the rectangle

    }
    else if (mode == "outline"){
        ctx.strokeStyle = color;
        ctx.strokeRect(x, y, length, height)
        //creates the rectangle without the fill command
}

}

function rectangleSvg(length, height, mode, color, x=0, y) {
    if (mode=="solid"){
        document.getElementById("Graphics").innerHTML = document.getElementById("Graphics").innerHTML + '<rect height="'+ height +'" width="'+ length +'" x="'+x+'" y="'+y+'"  fill='+ color +'></rect>'
    //This creates a Rectangle SVG using the parameters and using the fill attribute
    }
        else if (mode="outline"){
        document.getElementById("Graphics").innerHTML = document.getElementById("Graphics").innerHTML + '<rect height="'+ height +'" width="'+ length +'" x="'+x+'" y="'+y+'" fill="none" stroke='+ color +'></rect>'
        //This creates a Rectangle SVG using the parameters, setting the fill attribute to none and using the stroke attribute
    }
}

circle(50, "solid", "orange", 55, 55)
rectangle(90, 40, "solid", "purple", 60, 25)
circle(30, "solid", "blue", 50, 40)

circleSvg(50, "solid", "orange", 55, 55)
rectangleSvg(90, 40, "solid", "purple", 60, 25)
circleSvg(30, "solid", "blue", 50, 40)
