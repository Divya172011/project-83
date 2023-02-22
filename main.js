
var last_position_of_x,last_position_of_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
line_width=1;
var width=screen.width;

new_width=screen.width-70;
new_height=screen.height-300;

if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";

}
canvas.addEventListener("touchstart" ,my_touchstart);
function my_touchstart(e){
    console.log("my_touchstart");
    color=document.getElementById("color").value;
    line_width=document.getElementById("line_width").value;
    
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove" ,my_touchmove);
function my_touchmove(e){
    console.log("my_touchmove");
    current_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_y=e.touches[0].clientY-canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=line_width;

        console.log("last position of x and y coordinates =");
        console.log("X="+last_position_of_x +"Y="+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);

        console.log("current position of x and y coordinates =");
        console.log("X="+current_position_of_x +"Y="+current_position_of_y);
        ctx.lineTo(current_position_of_x,current_position_of_y);

        ctx.stroke();

    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
}

function ClearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

var mouse_event="empty";
var last_position_of_x,last_position_of_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
line_width=1;
canvas.addEventListener("mousedown" ,my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    line_width=document.getElementById("line_width").value;
    mouse_event="mousedown";
}
canvas.addEventListener("mousemove" ,my_mousemove);
function my_mousemove(e){
    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canvas.offsetTop;
    if(mouse_event=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=line_width;

        console.log("last position of x and y coordinates =");
        console.log("X="+last_position_of_x +"Y="+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);

        console.log("current position of x and y coordinates =");
        console.log("X="+current_position_of_x +"Y="+current_position_of_y);
        ctx.lineTo(current_position_of_x,current_position_of_y);

        ctx.stroke();


    }
    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
}
canvas.addEventListener("mouseup" ,my_mouseup);
function my_mouseup(e){
    mouse_event="my_mouseup";
}
canvas.addEventListener("mouseleave" ,my_mouseleave);
function my_mouseleave(e){
    mouse_event="my_mouseleave";
}
function ClearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}



