# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

<<<<<<< HEAD
Graph LMS is a documentation and research project for designing Learning Management Systems (LMS) using graph-based data models. The project focuses on conceptual design, data modeling, and visualization of learning system architectures rather than implementing a full LMS platform.

## Architecture

This is primarily a documentation site built with MkDocs Material theme, containing:

- **Conceptual Design**: Learning system entities and relationships modeled as graphs
- **Data Models**: JSON representations of LMS component relationships (see `src/view-data-model/graph-lms.json`)
- **Visualizations**: Interactive simulations and graph visualizations using vis.js and p5.js
- **Documentation**: Comprehensive architectural documentation in Markdown

### Key Components

- `docs/` - Main documentation content organized by concepts, architecture, and simulations
- `src/view-data-model/` - Graph data models and Python visualization scripts
- `docs/sims/` - Interactive JavaScript simulations for demonstrating concepts
- `data-models/` - Core data model definitions

## Development Commands

### Documentation Site

```bash
# Install dependencies (requires Python + pip)
pip install mkdocs "mkdocs-material[imaging]"

# Build the site locally
mkdocs build

# Run local development server at http://localhost:8000
mkdocs serve

# Deploy to GitHub Pages
mkdocs gh-deploy
```

### Python Data Visualization

```bash
# For NetworkX graph visualization (from src/view-data-model/)
cd src/view-data-model
python view-networkx.py
```

### Image Processing Tools

```bash
# Convert gray pixels to white in images (from src/tools/)
cd src/tools
python logo-gray-to-white.py
```

## Key Files and Directories

- `mkdocs.yml` - Site configuration and navigation structure
- `docs/arch/core-systems.md` - Detailed LMS component architecture
- `src/view-data-model/graph-lms.json` - Core graph data model with nodes/edges representing LMS entities
- `docs/sims/` - Interactive demonstrations and templates
- `docs/concepts/` - Conceptual documentation on learning graphs, trajectories, and xAPI

## Development Notes

- The project uses MkDocs Material theme with social card generation
- Interactive simulations use vis.js for graph rendering and p5.js for animations  
- Python scripts use NetworkX and matplotlib for graph analysis and visualization
- All content is licensed under Creative Commons ShareAlike Attribution Noncommercial
- The site is deployed to GitHub Pages with the `mkdocs gh-deploy` command

## Data Model Structure

The core data model (`src/view-data-model/graph-lms.json`) represents LMS entities as nodes (Students, Courses, Modules, etc.) with directed edges showing relationships (enrollment, prerequisite, assessment, etc.). This graph-based approach enables analysis of learning paths, dependencies, and system interactions.
=======
Graph LMS is a documentation website focused on Learning Management Systems using graph-based architectures. The project uses MkDocs with the Material theme to generate static documentation sites.

## Common Commands

### Documentation Build and Deployment
- `mkdocs build` - Build the documentation site locally
- `mkdocs serve` - Run local development server at http://localhost:8000
- `mkdocs gh-deploy` - Deploy to GitHub Pages (does not commit source changes)

### Python Environment Setup
The project uses Conda for environment management:
```sh
conda create -n mkdocs python=3
conda activate mkdocs
pip install mkdocs "mkdocs-material[imaging]"
```

### Git Workflow
```sh
git add FILES
git commit -m "comment"
git push
```

## Architecture and Structure

### Core Components
- **Documentation Source**: `/docs/` - All markdown content organized by topic
- **Site Configuration**: `mkdocs.yml` - Navigation, theme, and plugin configuration
- **Generated Site**: `/site/` - Static HTML output (auto-generated, don't edit)
- **Data Models**: `/data-models/` and `/src/` - Python scripts for graph visualization
- **Interactive Simulations**: `/docs/sims/` - JavaScript-based educational microsims

### Key Topics Covered
- Concept graphs and content graphs for learning
- Learning trajectories and prerequisite mapping
- xAPI (Experience API) and Learning Record Store (LRS) integration
- Graph-based Integrated Learning Architecture (ILA)

### Python Visualization Tools
- NetworkX for graph processing (`src/view-data-model/view-networkx.py`)
- Matplotlib for rendering
- JSON data models for graph structures

## Development Notes

### Theme and Styling
- Uses MkDocs Material theme with custom CSS
- Social card generation enabled (requires imaging libraries)
- Navigation includes expandable sections and search

### Content Organization
- Conceptual documentation in `/docs/concepts/`
- Architecture documentation in `/docs/arch/`
- Interactive simulations in `/docs/sims/`
- AI prompts and examples in `/docs/prompts/`

### Required Libraries for Social Cards
On macOS with Apple Silicon:
```sh
brew install cairo freetype libffi libjpeg libpng zlib
export DYLD_FALLBACK_LIBRARY_PATH=/opt/homebrew/lib
```
>>>>>>> 04caab8 (Add CLAUDE.md and update README with GitHub best practices)
