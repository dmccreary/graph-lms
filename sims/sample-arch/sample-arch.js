let components = [];
let connections = [];
let hoveredComponent = null;
let canvasWidth = 800;
let canvasHeight = 450;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Initialize components with scaled positions
  initializeComponents();
  initializeConnections();
}

function draw() {
  background(245);
  
  // Calculate scale factor based on current canvas width
  let scaleFactor = width / canvasWidth;
  
  // Draw connections first (behind components)
  stroke(0);
  strokeWeight(2 * scaleFactor);
  for (let conn of connections) {
    let startComp = components.find(c => c.id === conn.from);
    let endComp = components.find(c => c.id === conn.to);
    if (startComp && endComp) {
      drawArrow(
        startComp.x * scaleFactor, startComp.y * scaleFactor,
        endComp.x * scaleFactor, endComp.y * scaleFactor,
        scaleFactor
      );
    }
  }
  
  // Draw components
  hoveredComponent = null;
  for (let comp of components) {
    let x = comp.x * scaleFactor;
    let y = comp.y * scaleFactor;
    let w = comp.width * scaleFactor;
    let h = comp.height * scaleFactor;
    
    // Check if mouse is hovering over component
    if (mouseX >= x - w/2 && mouseX <= x + w/2 && 
        mouseY >= y - h/2 && mouseY <= y + h/2) {
      hoveredComponent = comp;
      // Highlight hovered component
      fill(red(comp.color) + 30, green(comp.color) + 30, blue(comp.color) + 30);
    } else {
      fill(comp.color);
    }
    
    stroke(0);
    strokeWeight(1 * scaleFactor);
    rect(x - w/2, y - h/2, w, h, 5 * scaleFactor);
    
    // Draw text
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(10 * scaleFactor);
    text(comp.name, x, y);
  }
  
  // Draw info box
  drawInfoBox(scaleFactor);
}

function initializeComponents() {
  components = [
    // Core Knowledge Infrastructure (Center)
    { id: 'kg', name: 'Knowledge Graph\nEngine', x: 300, y: 200, width: 120, height: 60, 
      color: color(255, 165, 0), // Orange
      description: 'Central semantic hub connecting all TLA data pillars, enabling intelligent relationships between learners, competencies, and learning resources.' },
    
    { id: 'vector', name: 'Vector Store', x: 350, y: 150, width: 100, height: 50, 
      color: color(138, 43, 226), // Purple
      description: 'Stores semantic embeddings for competencies, learning content, and learner profiles to enable AI-powered similarity matching and recommendations.' },
    
    { id: 'graphdb', name: 'Graph Database', x: 250, y: 150, width: 100, height: 50, 
      color: color(70, 130, 180), // Steel Blue
      description: 'Stores RCD relationships, learning pathways, and competency networks in a graph structure for complex querying and traversal.' },
    
    // TLA Data Pillar Services (Inner Ring)
    { id: 'xapi', name: 'xAPI Processing\nService', x: 200, y: 120, width: 100, height: 50, 
      color: color(32, 178, 170), // Light Sea Green
      description: 'Ingests and normalizes learning experience data using IEEE P9274.1 xAPI standard for comprehensive learner activity tracking.' },
    
    { id: 'comp_reg', name: 'Competency\nRegistry', x: 400, y: 120, width: 100, height: 50, 
      color: color(255, 99, 71), // Tomato
      description: 'Manages IEEE 1484.20.1 RCD definitions and frameworks, providing standardized competency descriptions and assessment criteria.' },
    
    { id: 'activity_cat', name: 'Learning Activity\nCatalog', x: 400, y: 280, width: 100, height: 50, 
      color: color(154, 205, 50), // Yellow Green
      description: 'Manages IEEE P2881 learning activity metadata, providing detailed descriptions of training resources and their relationships.' },
    
    { id: 'learner_prof', name: 'Learner Profile\nService', x: 200, y: 280, width: 100, height: 50, 
      color: color(255, 192, 203), // Pink
      description: 'Maintains Enterprise Learner Records tracking individual competency levels, learning history, and career progression data.' },
    
    // Edge Learning Systems (Outer Ring)
    { id: 'lms', name: 'LMS/Learning\nPlatforms', x: 100, y: 50, width: 100, height: 50, 
      color: color(173, 216, 230), // Light Blue
      description: 'Traditional Learning Management Systems providing structured course delivery and basic learner tracking capabilities.' },
    
    { id: 'adaptive', name: 'Adaptive Learning\nSystems', x: 500, y: 50, width: 100, height: 50, 
      color: color(240, 128, 128), // Light Coral
      description: 'AI-powered personalized learning systems that adapt content and pacing based on individual learner performance and preferences.' },
    
    { id: 'sim_vr', name: 'Simulation &\nVR Training', x: 100, y: 350, width: 100, height: 50, 
      color: color(221, 160, 221), // Plum
      description: 'Immersive learning environments using simulation and virtual reality technologies for hands-on skill development.' },
    
    { id: 'mobile', name: 'Mobile Learning\nApps', x: 500, y: 350, width: 100, height: 50, 
      color: color(144, 238, 144), // Light Green
      description: 'On-demand learning applications for mobile devices enabling just-in-time learning and microlearning opportunities.' },
    
    // AI/ML Analytics Layer (Right Side)
    { id: 'search', name: 'Semantic Search\nEngine', x: 550, y: 200, width: 100, height: 50, 
      color: color(255, 215, 0), // Gold
      description: 'Vector-based search engine for discovering relevant content and competencies using semantic similarity matching.' },
    
    { id: 'recommender', name: 'Learning Path\nRecommender', x: 520, y: 150, width: 100, height: 50, 
      color: color(255, 105, 180), // Hot Pink
      description: 'AI-driven system providing personalized learning path recommendations based on competency goals and learner preferences.' },
    
    { id: 'prediction', name: 'Competency\nPrediction Model', x: 520, y: 250, width: 100, height: 50, 
      color: color(205, 92, 92), // Indian Red
      description: 'ML models for analyzing skill gaps, predicting learning outcomes, and forecasting competency development timelines.' },
    
    // Data Integration & Processing (Left Side)
    { id: 'mom', name: 'TLA Master\nObject Model', x: 50, y: 200, width: 100, height: 50, 
      color: color(127, 255, 212), // Aquamarine
      description: 'Data normalization layer standardizing learning events across different systems using the TLA MOM specification.' },
    
    { id: 'lrs', name: 'Federated LRS\nNetwork', x: 80, y: 150, width: 100, height: 50, 
      color: color(100, 149, 237), // Cornflower Blue
      description: 'Distributed Learning Record Store network maintaining learner data ownership while enabling cross-system analytics.' },
    
    { id: 'pipeline', name: 'Real-time Data\nPipeline', x: 80, y: 250, width: 100, height: 50, 
      color: color(255, 160, 122), // Light Salmon
      description: 'Streaming data processing system handling real-time learning events and maintaining data synchronization across systems.' },
    
    // Administrative & Governance (Top)
    { id: 'iam', name: 'Identity & Access\nManagement', x: 300, y: 50, width: 100, height: 50, 
      color: color(176, 196, 222), // Light Steel Blue
      description: 'Centralized authentication and authorization system managing user access across all TLA components and learning systems.' },
    
    { id: 'governance', name: 'Data Governance\nDashboard', x: 200, y: 80, width: 100, height: 50, 
      color: color(230, 230, 250), // Lavender
      description: 'Monitoring and management interface for data quality, compliance, privacy, and stewardship across the TLA ecosystem.' },
    
    { id: 'admin', name: 'Admin Console', x: 400, y: 80, width: 100, height: 50, 
      color: color(255, 228, 181), // Moccasin
      description: 'Central administration interface for system configuration, monitoring, and management of TLA components and services.' },
    
    // Career & Workforce Management (Bottom)
    { id: 'career_map', name: 'Career Pathway\nMapper', x: 300, y: 350, width: 100, height: 50, 
      color: color(152, 251, 152), // Pale Green
      description: 'Interactive visualization tool mapping career progression routes and required competencies for different organizational roles.' },
    
    { id: 'workforce', name: 'Workforce\nAnalytics', x: 200, y: 320, width: 100, height: 50, 
      color: color(255, 182, 193), // Light Pink
      description: 'Analytics platform providing organizational insights into capability gaps, readiness levels, and workforce development needs.' },
    
    { id: 'credential', name: 'Credential\nVerification', x: 400, y: 320, width: 100, height: 50, 
      color: color(216, 191, 216), // Thistle
      description: 'Digital credentialing system managing badges, certificates, and micro-credentials with blockchain-based verification capabilities.' }
  ];
}

function initializeConnections() {
  connections = [
    // Knowledge Graph connections (central hub)
    { from: 'kg', to: 'vector' },
    { from: 'kg', to: 'graphdb' },
    { from: 'kg', to: 'xapi' },
    { from: 'kg', to: 'comp_reg' },
    { from: 'kg', to: 'activity_cat' },
    { from: 'kg', to: 'learner_prof' },
    
    // Data flow connections
    { from: 'mom', to: 'xapi' },
    { from: 'lrs', to: 'xapi' },
    { from: 'pipeline', to: 'kg' },
    
    // AI/ML connections
    { from: 'vector', to: 'search' },
    { from: 'vector', to: 'recommender' },
    { from: 'kg', to: 'prediction' },
    
    // Edge system connections
    { from: 'lms', to: 'xapi' },
    { from: 'adaptive', to: 'recommender' },
    { from: 'sim_vr', to: 'xapi' },
    { from: 'mobile', to: 'xapi' },
    
    // Administrative connections
    { from: 'iam', to: 'kg' },
    { from: 'governance', to: 'kg' },
    { from: 'admin', to: 'kg' },
    
    // Career management connections
    { from: 'career_map', to: 'kg' },
    { from: 'workforce', to: 'learner_prof' },
    { from: 'credential', to: 'comp_reg' }
  ];
}

function drawArrow(x1, y1, x2, y2, scale) {
  // Draw line
  line(x1, y1, x2, y2);
  
  // Calculate arrowhead
  let angle = atan2(y2 - y1, x2 - x1);
  let arrowLength = 10 * scale;
  let arrowAngle = PI / 6;
  
  // Draw arrowhead
  let x3 = x2 - arrowLength * cos(angle - arrowAngle);
  let y3 = y2 - arrowLength * sin(angle - arrowAngle);
  let x4 = x2 - arrowLength * cos(angle + arrowAngle);
  let y4 = y2 - arrowLength * sin(angle + arrowAngle);
  
  line(x2, y2, x3, y3);
  line(x2, y2, x4, y4);
}

function drawInfoBox(scale) {
  let infoX = 0;
  let infoY = 400 * scale;
  let infoWidth = 600 * scale;
  let infoHeight = 50 * scale;
  
  // Draw info box background
  fill(255, 255, 255, 200);
  stroke(0);
  strokeWeight(1);
  rect(infoX, infoY, infoWidth, infoHeight);
  
  // Draw info text
  fill(0);
  noStroke();
  textAlign(LEFT, TOP);
  textSize(12 * scale);
  
  if (hoveredComponent) {
    text(hoveredComponent.name + ": " + hoveredComponent.description, 
         infoX + 10 * scale, infoY + 5 * scale, 
         infoWidth - 20 * scale, infoHeight - 10 * scale);
  } else {
    text("Hover over components to see detailed descriptions. This diagram shows a knowledge graph-centric TLA architecture with integrated AI/ML capabilities.", 
         infoX + 10 * scale, infoY + 5 * scale, 
         infoWidth - 20 * scale, infoHeight - 10 * scale);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}