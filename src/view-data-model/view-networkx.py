import json
import networkx as nx
import matplotlib.pyplot as plt

# Load JSON data from a file
with open('graph-lms.json', 'r') as f:
    data = json.load(f)

# Create a directed graph
G = nx.DiGraph()

# Add nodes with labels
for node in data['nodes']:
    G.add_node(node['id'], label=node['label'])

# Add edges with labels
for edge in data['edges']:
    G.add_edge(edge['source'], edge['target'], label=edge['label'])

# Get positions for all nodes
pos = nx.spring_layout(G, k=0.5, iterations=50)

# Extract labels for nodes and edges
node_labels = nx.get_node_attributes(G, 'label')
edge_labels = nx.get_edge_attributes(G, 'label')

# Draw the nodes
nx.draw_networkx_nodes(G, pos, node_size=700, node_color='lightblue')

# Draw the edges
nx.draw_networkx_edges(G, pos, arrowstyle='->', arrowsize=20, edge_color='gray')

# Draw node labels
nx.draw_networkx_labels(G, pos, labels=node_labels, font_size=8)

# Draw edge labels
nx.draw_networkx_edge_labels(G, pos, edge_labels=edge_labels, font_color='red', font_size=6)

# Adjust plot margins
plt.tight_layout()

# Display the graph
plt.show()
