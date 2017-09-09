var clicked = false;

var body = d3.select("body");
body.append("h1")
    .html("This is the header. It was made with d3.js");

body.append("button")
    .attr("id","btn1")
    .attr("onclick","btn1_clicked()")
    .html("Button 1");

console.log("some quote blap blip foo bar baz");
function btn1_clicked(){
    
    body.style("background",function banana(){ 
            return clicked ? "white" : "red";
        })
        .append("svg")
        .append("circle")
            .attr("cx",20)
            .attr("cy",20)
            .attr("r",50)
            .style("fill","darkblue");

    clicked = !clicked;
}
