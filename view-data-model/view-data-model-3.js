// Function to initialize the network
function initNetwork(data) {
    // Parse nodes and edges from the data
    var nodes = new vis.DataSet(data.nodes);
    
    // Map 'source' and 'target' to 'from' and 'to' for Vis.js edges
    var edges = new vis.DataSet(
      data.edges.map(function(edge) {
        return {
          from: edge.source,
          to: edge.target,
          label: edge.label,
          arrows: 'to'
        };
      })
    );

    // Create a network
    var container = document.getElementById('network');
    var graphData = {
      nodes: nodes,
      edges: edges
    };
    var options = {
      layout: {
        improvedLayout: true
      },
      interaction: {
        hover: true
      },
      nodes: {
        shape: 'dot',
        size: 16,
        font: {
          size: 14,
          color: '#000'
        },
        borderWidth: 2
      },
      edges: {
        width: 2,
        arrows: {
          to: {enabled: true, scaleFactor: 0.5}
        },
        smooth: {
          type: 'cubicBezier',
          forceDirection: 'vertical',
          roundness: 0.4
        },
        font: {
          align: 'top',
          size: 10,
          color: '#007700',
          strokeWidth: 0
        }
      },
      physics: {
        enabled: true,
        barnesHut: {
          gravitationalConstant: -20000, // Adjusted for node spacing
          centralGravity: 0.1,
          springLength: 150,
          springConstant: 0.04,
          damping: 0.09,
          avoidOverlap: 0.1
        },
        stabilization: {
          iterations: 200
        }
      }
    };
    var network = new vis.Network(container, graphData, options);
  }

  // Fetch the JSON data and initialize the network
  fetch('lms-graph-model.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      initNetwork(data);
    })
    .catch(function(error) {
      console.error('Error loading JSON data:', error);
    });