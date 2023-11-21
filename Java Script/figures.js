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
//Using the funtions to draw figures in canvas