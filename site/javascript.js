console.log("some quote blap blip foo bar baz");
function btn1_clicked(){
    d3.select("body")
        .style("background","red")
        .append("svg")
        .append("circle")
            .attr("cx",20)
            .attr("cy",20)
            .attr("r",50)
            .style("fill","darkblue");
}

d3.select("#btn1").attr("onclick","btn1_clicked()");