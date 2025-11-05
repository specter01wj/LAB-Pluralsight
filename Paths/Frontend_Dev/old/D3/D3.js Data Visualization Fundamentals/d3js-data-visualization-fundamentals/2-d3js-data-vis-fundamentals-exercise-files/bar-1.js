
var w = 300;

var h = 100;
var padding = 10;
var dataset = [5, 10, 14, 20, 25];
var svg = d3.select("#bar1").append("svg")
          .attr("width", w)
          .attr("height", h);

function colorPicker(v) {
  if (v<=15) { return "#8F0EF9"; }
  else if (v>15) { return "#FF0033"; }
}

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
.attr({
  x: function(d, i) {return i * (w / dataset.length);},
  y: function(d) {return h - (d*4);},
  width: w / dataset.length - padding,
  height: function(d) {return d*4;},
  fill: function(d) {return colorPicker(d);}
  });