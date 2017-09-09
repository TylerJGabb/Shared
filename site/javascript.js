var clicked = false;

var body = d3.select("body");
body.append("h1")
    .html("This is the header. It was made with d3.js");

body.append("button")
    .attr("id","btn1")
    .attr("onclick","btn1_clicked()")
    .html("Button 1");

console.log("some quote blap blip foo bar baz");


var svg = body.append("svg");

var circle = svg.append("circle")
    .attr("cx",20)
    .attr("cy",20)
    .attr("r",50)
    .style("fill","darkblue")
    .style("opacity",0);

var rec = svg.append("rectangle")
    .attr("x",20)
    .attr("y",20)
    .attr("width",100)
    .attr("height",100)
    .style("fill","orange")
    .style("opacity",1);

function btn1_clicked(){
    body.style("background",function banana(){ 
        return clicked ? "white" : "red";
    });
    
    circle.style("opacity",function switcher(){
        return clicked ? 1 : 0;
    });

    rec.style("opacity",function switcher(){
        return clicked ? 0 : 1;
    });
    
    clicked = !clicked;
}