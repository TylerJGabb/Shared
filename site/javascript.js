var clicked = false;

// var people = {
//     // Id : Dob, Name
//     1 : ["01/26/1992","Tyler Gabb"],
//     2 : ["07/26/1996","Max VonHippel"]
// };


// body.selectAll(".rectangle")
//     .data(people)
//     .enter()
//         .append("circle")
//             .attr("cx",function xfun(elem){
//                 return elem.key*100;
//             })
//             .attr("cy",function yfun(elem){
//                 return elem.key*100;
//             })
//             .attr("r",function radfnc(elem){
//                 return elem[1] == "Tyler Gabb" ? 80 : 100;
//             })
//             .style("fill","darkslategrey");

var body = d3.select("body");

body.append("h1")
    .html("This is the header. It was made with d3.js");

body.append("button:first-child")
    .attr("id","btn1")
    .attr("onclick","btn1_clicked()")
    .html("Button 1");

console.log("some quote blap blip foo bar baz");


var svg = body.append("svg")
    .attr("width",1000)
    .attr("height",1000);

var circle = svg.append("circle")
    .attr("cx",20)
    .attr("cy",20)
    .attr("r",50)
    .style("fill","darkblue")
    .style("opacity",0);

var rec = svg.append("rect")
    .attr("x",20)
    .attr("y",20)
    .attr("width",100)
    .attr("height",100)
    .style("fill","orange")
    .style("opacity",1);

function btn1_clicked(){
    clicked = !clicked;
    // body.style("background",function banana(){ 
    //     return clicked ? "white" : "red";
    // });
    
    circle.style("opacity",function switcher(){
        return clicked ? 1 : 0;
    });

    rec.style("opacity",function switcher(){
        return clicked ? 0 : 1;
    });

    
}