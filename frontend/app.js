// Simple D3.js graph visualizer for ChainSense

const width = 960, height = 600;

async function loadGraph() {
  const response = await fetch("http://127.0.0.1:8000/api/graph");
  const data = await response.json();
  renderGraph(data);
}

function renderGraph(graph) {
  const svg = d3.select("#graph");
  svg.selectAll("*").remove();

  const simulation = d3.forceSimulation(graph.nodes)
    .force("link", d3.forceLink(graph.links).id(d => d.id).distance(150))
    .force("charge", d3.forceManyBody().strength(-400))
    .force("center", d3.forceCenter(width / 2, height / 2));

  const link = svg.append("g")
    .attr("stroke", "#aaa")
    .selectAll("line")
    .data(graph.links)
    .join("line")
    .attr("stroke-width", d => Math.sqrt(d.value));

  const node = svg.append("g")
    .selectAll("circle")
    .data(graph.nodes)
    .join("circle")
    .attr("r", 10)
    .attr("fill", d => d.type === "contract" ? "#ff7f0e" : "#1f77b4")
    .call(drag(simulation));

  node.append("title").text(d => d.id);

  simulation.on("tick", () => {
    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);
  });
}

function drag(simulation) {
  function dragstarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }

  function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  function dragended(event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }

  return d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended);
}

loadGraph();
